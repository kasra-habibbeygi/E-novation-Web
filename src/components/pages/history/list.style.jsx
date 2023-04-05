import styled from '@emotion/styled';

export const MainField = styled.ul(props => ({
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',

    svg: {
        width: '48%'
    },

    li: {
        display: 'flex',
        width: '48%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        flexDirection: 'column'
    },

    h3: {
        borderBottom: `1px solid ${props.theme.colors.secondary}`,
        paddingBottom: '15px',
        marginBottom: '15px',
        fontSize: '1.2rem'
    },

    div: {
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap'
    },

    p: {
        flex: '1 0 45%',
        color: '#8a8a8a',
        fontSize: '1rem',
        display: 'flex',
        gap: '5px',

        span: {
            color: props.theme.colors.primary,
            fontWeight: 'bold',
            minWidth: 'max-content'
        },

        b: {
            fontWeight: 'normal',
            display: 'block',
            fontSize: '1rem'
        }
    },

    '@media (max-width: 1300px)': {
        li: {
            width: '100%'
        },

        svg: {
            width: '100%'
        }
    },

    '@media (max-width: 900px)': {
        paddingBottom: '80px',

        li: {
            flexDirection: 'column',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }
    },

    '@media (max-width: 600px)': {
        li: {
            flexDirection: 'column',

            h3: {
                fontSize: '1rem'
            },

            p: {
                fontSize: '0.8rem'
            },

            b: {
                fontSize: '0.8rem'
            }
        }
    }
}));
