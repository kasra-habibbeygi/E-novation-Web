/* eslint-disable indent */
import styled from '@emotion/styled';

export const ButtonField = styled.button(props => ({
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    color: 'white',
    fontSize: '1rem',
    backgroundColor:
        props.color === 'primary'
            ? props.theme.colors.primary
            : props.color === 'danger'
            ? props.theme.colors.danger
            : props.color === 'warning'
            ? props.theme.colors.secondary
            : '',
    borderRadius: props.borderType === 'normal' ? '6px' : props.borderType === 'sharp' ? '0' : props.borderType === 'rounded' ? '80px' : ''
}));
