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
        height: '200px',
        gap: '10px',

        p: {
            fontSize: '1rem'
        },

        img: {
            width: '40px',
            height: 'auto',
            filter: 'invert(82%) sepia(85%) saturate(1923%) hue-rotate(330deg) brightness(99%) contrast(92%)'
        }
    },

    '@media (max-width: 900px)': {
        flexWrap: 'wrap',

        div: {
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
        }
    }
});
