import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';

// Assets
import { ButtonField } from './button.style';

const Button = ({
    text,
    borderType = 'normal',
    color = 'primary',
    loading = false,
    extraClass,
    disabled = false,
    clickHandler,
    extraId
}) => {
    return (
        <ButtonField
            borderType={borderType}
            color={color}
            className={`${disabled ? 'disabled' : ''} ${extraClass || ''}`}
            onClick={clickHandler}
            id={extraId}
        >
            {loading ? <PulseLoader color='#FFFFFF' loading={loading} size={10} /> : text}
        </ButtonField>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    borderType: PropTypes.oneOf(['normal', 'sharp', 'rounded']),
    color: PropTypes.oneOf(['primary', 'danger', 'warning']),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    clickHandler: PropTypes.func
};

export default Button;
