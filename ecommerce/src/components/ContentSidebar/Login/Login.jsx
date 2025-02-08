import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';

function Login() {
    const { container, title, remember, checkbox, label, submit, forgot } =
        styles;
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);
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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
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
                    content={isRegister ? 'REGISTER' : 'LOGIN'}
                    type='submit'
                    onClick={() => toast.success('Login successfully')}
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
