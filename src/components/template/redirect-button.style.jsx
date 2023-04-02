import styled from '@emotion/styled';

export const ButtonField = styled.button(props => ({
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    display: 'none',
    justifyContent: 'center',
    left: '0',
    backgroundColor: 'white',
    paddingBottom: '10px',
    cursor: 'unset',

    'a , div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        textAlign: 'center',
        width: '90%',
        backgroundColor: props.theme.colors.primary,
        color: 'white',
        borderRadius: '10px',
        alignItems: 'center',
        padding: '5px 0',
        marginBottom: '10px',

        img: {
            width: '15px',
            height: 'auto'
        }
    },

    '@media (max-width: 900px)': {
        display: 'flex'
    }
}));
