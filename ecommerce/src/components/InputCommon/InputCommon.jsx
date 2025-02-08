import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function InputCommon({ label, type, isRequired = false }) {
    const { container, labelInput, boxInput, eyeIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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
        </div>
    );
}

export default InputCommon;
