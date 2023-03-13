import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',

    svg: {
        width: '23%'
    },

    div: {
        width: '23%',
        borderRadius: '6px',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '50px 15px',

        h3: {
            fontWeight: 'normal',
            marginBottom: '15px',
            fontSize: '1.5rem'
        },

        button: {
            margin: '0 auto',
            width: 'max-content',
            fontSize: '0.9rem',
            padding: '5px 25px',
            marginTop: '20px'
        }
    },

    '@media (max-width: 1300px)': {
        div: {
            width: '31%'
        },

        svg: {
            width: '31%'
        }
    },

    '@media (max-width: 800px)': {
        div: {
            width: '46%'
        },

        svg: {
            width: '46%'
        }
    },

    '@media (max-width: 600px)': {
        div: {
            width: '100%'
        },

        svg: {
            width: '100%'
        }
    }
});
