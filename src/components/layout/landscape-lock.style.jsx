import styled from '@emotion/styled';

export const MainField = styled.aside(props => ({
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: props.theme.colors.primary,
    zIndex: '100',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '20px',
    display: ' none',

    img: {
        width: '220px',
        height: 'auto'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '1rem',
        color: 'white',

        img: {
            width: '30px',
            height: 'auto'
        }
    },

    '@media (max-height: 412px)': {
        display: 'flex'
    }
}));
