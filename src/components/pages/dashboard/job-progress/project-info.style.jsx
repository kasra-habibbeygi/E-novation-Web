import styled from '@emotion/styled';

export const MainField = styled.section({
    backgroundColor: 'white',
    padding: '20px',
    width: '100%',
    borderRadius: '8px',

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',

        svg: {
            width: '100%',

            defs: {
                width: '100%',
                display: 'block'
            }
        },

        li: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #f1f1f1',
            borderRadius: '8px',
            padding: '10px 20px',
            transition: 'all linear 0.2s',

            p: {
                fontSize: '1rem',
                fontWeight: '500'
            },

            span: {
                color: '#6d6d6d',
                fontSize: '1rem'
            }
        }
    },

    '@media (max-width: 1300px)': {
        width: '100%',
        borderRadius: '0 8px 8px 8px'
    },

    '@media (max-width: 900px)': {
        padding: '0 50px 20px 0',

        ul: {
            li: {
                flexWrap: 'wrap',

                p: {
                    fontSize: '0.9rem'
                }
            }
        }
    }
});
