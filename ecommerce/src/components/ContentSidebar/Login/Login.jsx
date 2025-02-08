import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
    const { container, title, remember, checkbox, label, submit, forgot } =
        styles;

    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <InputCommon
                label='Username or email'
                type='text'
                isRequired={true}
            />

            <InputCommon label='Password' type='password' isRequired={true} />

            <div className={remember}>
                <input className={checkbox} type='checkbox' />
                <span className={label}>Remember me</span>
            </div>

            <button className={submit}>Sign in</button>

            <div className={forgot}>Lost your password?</div>
        </div>
    );
}

export default Login;
