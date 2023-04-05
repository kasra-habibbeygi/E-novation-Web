import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    padding: '0 40px 20px 0',
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
        display: 'block',
        padding: '0',

        ul: {
            margin: '0 30px 20px 0',
            padding: '0',
            paddingRight: '10px',
            overflow: 'auto',
            height: 'calc(93vh - 210px)',

            '&::-webkit-scrollbar': {
                width: '5px'
            },

            '&::-webkit-scrollbar-track': {
                background: 'transparent'
            },

            '&::-webkit-scrollbar-thumb': {
                background: 'rgb(232 232 232)',
                borderRadius: '50px'
            }
        }
    }
});
