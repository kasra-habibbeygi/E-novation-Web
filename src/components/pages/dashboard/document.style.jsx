import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
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
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '300px',

        h3: {
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '1.3rem'
        },

        p: {
            fontSize: '0.9rem',
            overflow: 'auto'
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
        margin: '0 30px 20px 0',
        padding: '0',
        paddingRight: '10px',
        overflow: 'auto',
        height: 'calc(100vh - 210px)',

        '&::-webkit-scrollbar': {
            width: '5px'
        },

        '&::-webkit-scrollbar-track': {
            background: 'transparent'
        },

        '&::-webkit-scrollbar-thumb': {
            background: 'rgb(232 232 232)',
            borderRadius: '50px'
        },

        div: {
            width: '23%',
            borderRadius: '6px',
            backgroundColor: '#dadada',
            textAlign: 'left',
            padding: '15px',
            flexDirection: 'column',
            height: 'unset',

            h3: {
                fontWeight: 'normal',
                marginBottom: '8px',
                paddingBottom: '5px',
                fontSize: '1rem',
                borderBottom: '1px solid black',
                color: 'black',
                width: '100%'
            },

            p: {
                fontSize: '0.9rem',
                overflow: 'auto',
                color: 'black',
                width: '100%'
            },

            a: {
                width: '100%',
                display: 'block'
            },

            button: {
                margin: '0 auto',
                width: 'max-content',
                fontSize: '0.9rem',
                padding: '5px 25px',
                marginTop: '20px'
            }
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
