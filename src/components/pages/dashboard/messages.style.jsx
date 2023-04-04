import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    padding: '0 50px 20px 0',
    display: 'none',

    svg: {
        width: '100%'
    },

    ul: {
        listStyle: 'none'
    },

    li: {
        backgroundColor: '#F2F5FA',
        borderRadius: '8px',
        width: '100%',
        padding: '15px',
        marginBottom: '10px'
    },

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        span: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
        },

        img: {
            height: 'auto',
            width: '20px'
        },

        small: {
            color: '#a7a7a7'
        },

        b: {
            fontWeight: '400'
        }
    },

    '@media (max-width: 900px)': {
        display: 'block'
    }
});
