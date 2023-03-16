import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    gap: '15px',

    div: {
        width: '100%',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '30px',

        p: {
            fontSize: '1.2rem'
        },

        img: {
            width: '80px'
        }
    }
});