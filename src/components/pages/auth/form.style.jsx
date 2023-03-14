import styled from '@emotion/styled';

export const AuthField = styled.div(props => ({
    width: '90%',
    marginTop: '50px',

    '& .alerts': {
        marginTop: '10px',
        color: props.theme.colors.danger
    },

    '& .password_field': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        input: {
            paddingRight: '50px'
        },

        img: {
            position: 'absolute',
            width: '22px',
            height: '36px',
            bottom: '33px',
            right: '16px',
            cursor: 'pointer'
        }
    }
}));
