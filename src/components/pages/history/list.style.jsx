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
        marginBottom: '15px'
    },

    div: {
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap'
    },

    p: {
        flex: '1 0 45%',
        color: '#8a8a8a',
        fontSize: '0.9rem',
        display: 'flex',
        gap: '5px',

        span: {
            color: props.theme.colors.primary,
            fontWeight: 'bold',
            minWidth: 'max-content'
        },

        b: {
            fontWeight: 'normal',
            display: 'block'
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

    '@media (max-width: 400px)': {
        li: {
            flexDirection: 'column',

            h3: {
                fontSize: '1rem'
            },
            p: {
                fontSize: '0.8rem'
            }
        }
    }
}));
