import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/StoreProvider';

function Login() {
    const { container, title, remember, checkbox, label, submit, forgot } =
        styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsSidebarOpen } = useContext(SidebarContext);
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            ),
        }),
        onSubmit: async (values) => {
            if (isLoading) return;

            const { email: username, password } = values;

            if (isRegister) {
                setIsLoading(true);

                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                setIsLoading(true);
                await signIn({ username, password })
                    .then((res) => {
                        const { id, token, refreshToken, message } = res.data;
                        setUserId(id);
                        toast.success(message);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        setIsLoading(false);
                        setIsSidebarOpen(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
        },
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired={true}
                    formik={formik}
                />

                <InputCommon
                    label='Password'
                    type='password'
                    isRequired={true}
                    id='password'
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        label='Confirm Password'
                        type='password'
                        isRequired={true}
                        id='confirmPassword'
                        formik={formik}
                    />
                )}
                <div className={remember}>
                    <input className={checkbox} type='checkbox' />
                    <span className={label}>Remember me</span>
                </div>

                <Button
                    content={
                        isLoading
                            ? 'LOADING...'
                            : isRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type='submit'
                />
            </form>

            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : "Don't have an account"
                }
                type='submit'
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />

            {!isRegister && (
                <div className={forgot} onClick={handleToggle}>
                    Lost your password?
                </div>
            )}
        </div>
    );
}

export default Login;
