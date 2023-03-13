import styled from '@emotion/styled';

export const MainField = styled.section({
    backgroundColor: 'white',
    padding: '20px',
    width: 'max-content',
    borderRadius: '8px',

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        paddingRight: '20px',

        li: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #f1f1f1',
            borderRadius: '8px',
            padding: '10px 20px',
            transition: 'all linear 0.2s',

            p: {
                fontSize: '0.9rem',
                fontWeight: '500'
            },

            span: {
                color: '#6d6d6d',
                fontSize: '0.9rem'
            }
        }
    },

    '@media (max-width: 1300px)': {
        width: '100%'
    },

    '@media (max-width: 500px)': {
        ul: {
            li: {
                flexDirection: 'column',
                alignItems: 'flex-start',

                p: {
                    fontSize: '0.8rem'
                }
            }
        }
    }
});
