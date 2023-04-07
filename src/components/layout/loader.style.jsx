import styled from '@emotion/styled';

export const LoaderField = styled.nav(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: props.theme.colors.secondary,
    width: '100%',
    height: '100vh',
    zIndex: '20',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    p: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.1rem',
        color: 'white',
        position: 'relative',
        left: '7px',
        gap: '5px'
    },

    img: {
        width: '300px',
        height: 'auto'
    },

    '@media (max-width: 500px)': {
        img: {
            width: '200px'
        },

        p: {
            fontSize: '1.1rem',
            position: 'relative',
            left: '16px'
        }
    }
}));
