import styled from '@emotion/styled';

export const InputField = styled.div(props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '30px',

    label: {
        fontSize: '1.2rem',
        color: props.theme.colors.gray
    },

    input: {
        width: '100%',
        height: '40px',
        padding: '10px',
        borderRadius: '6px',
        border: `1px solid ${props.theme.colors.inputBorder}`,
        color: '#4e4e4e',
        fontFamily: 'main',

        '&::placeholder': {
            color: '#bebebe'
        }
    }
}));
