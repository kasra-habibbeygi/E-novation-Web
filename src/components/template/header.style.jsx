import styled from '@emotion/styled';

export const HeaderField = styled.header(props => ({
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    b: {
        display: 'none'
    },

    h3: {
        fontSize: '1.4rem'
    },

    '@media (max-width: 900px)': {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        padding: '5px 20px',
        borderRadius: '8px',
        marginBottom: '25px',

        b: {
            display: 'block',
            fontSize: '1rem'
        },

        h3: {
            fontSize: '1rem',
            backgroundColor: props.theme.colors.primary,
            color: 'white',
            fontWeight: 'normal',
            padding: '5px 10px',
            borderRadius: '5px'
        }
    },

    '@media (max-width: 500px)': {
        b: {
            fontSize: '.9rem',
            fontWeight: '600'
        },

        h3: {
            fontSize: '.9rem'
        }
    }
}));
