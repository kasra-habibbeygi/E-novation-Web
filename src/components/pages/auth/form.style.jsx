import styled from '@emotion/styled';

export const AuthField = styled.div(props => ({
    width: '90%',
    marginTop: '50px',

    '& .alerts': {
        marginTop: '10px',
        color: props.theme.colors.danger
    }
}));
