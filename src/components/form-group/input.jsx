// Assets
import { InputField } from './input.style';

const Input = ({ label, placeholder, value, valueGetter, name, type = 'text', extraClass }) => {
    return (
        <InputField className={extraClass}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={e => valueGetter(e)}
                placeholder={placeholder ? placeholder : ''}
            />
        </InputField>
    );
};

export default Input;
