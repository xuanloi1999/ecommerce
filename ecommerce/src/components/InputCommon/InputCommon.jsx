import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import classNames from 'classnames';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { container, labelInput, boxInput, eyeIcon, error, isErrInput } =
        styles;
    const [showPassword, setShowPassword] = useState(false);

    const { formik, id } = props;
    const passwordOrAnotherType =
        type === 'password' && showPassword ? 'text' : type;

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={passwordOrAnotherType}
                    {...props}
                    id={id}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    className={classNames({
                        [isErrInput]: formik.errors[id] && formik.touched[id],
                    })}
                />

                {type === 'password' && (
                    <div className={eyeIcon}>
                        {showPassword ? (
                            <FaEyeSlash
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <FaEye onClick={() => setShowPassword(true)} />
                        )}
                    </div>
                )}
            </div>
            {formik.errors[id] && formik.touched[id] && (
                <div className={error}>{formik.errors[id]}</div>
            )}
        </div>
    );
}

export default InputCommon;
