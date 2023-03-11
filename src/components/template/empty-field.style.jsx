import styled from '@emotion/styled';

export const MainEmptyField = styled.span({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '100px 20px',
    width: '100% !important',

    img: {
        width: '60px',
        height: 'auto'
    },

    p: {
        fontSize: '1.2rem'
    }
});
