import styled from '@emotion/styled';

export const NavbarField = styled.nav({
    height: '70px',
    backgroundColor: 'white',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0',
    width: 'calc(100% - 400px)',
    zIndex: '5',

    img: {
        width: '140px',
        height: 'auto'
    },

    '& .right_field': {
        alignItems: 'center',
        gap: '10px',
        display: 'none',

        img: {
            width: '20px',
            height: 'auto',
            cursor: 'pointer'
        }
    },

    '@media (max-width: 1200px)': {
        width: '100%',

        '& .right_field': {
            display: 'flex'
        }
    }
});
