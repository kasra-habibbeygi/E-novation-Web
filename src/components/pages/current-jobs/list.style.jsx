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
            fontSize: '1.6rem'
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

    '@media (max-width: 900px)': {
        div: {
            width: '100%',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            padding: '10px',
            margin: '0 20px',
            cursor: 'pointer',

            h3: {
                marginBottom: '0',
                fontSize: '1.4rem',
                textAlign: 'left',
                paddingLeft: '15px'
            },

            a: {
                display: 'none'
            }
        },

        svg: {
            margin: '0 20px',
            width: '100%'
        }
    },

    '@media (max-width: 500px)': {
        div: {
            h3: {
                fontSize: '1rem'
            }
        },

        svg: {
            width: '100%'
        }
    }
});
