import styled from '@emotion/styled';

export const AsideField = styled.aside(props => ({
    backgroundColor: props.theme.colors.secondary,
    width: '70px',
    height: 'calc(100vh - 70px)',
    position: 'fixed',
    top: '70px',
    paddingTop: '35px',

    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',

        li: {
            width: '100%'
        },

        'a , div': {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px 5px',
            transition: 'all linear 0.15s',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '0.9rem',
            color: 'white',
            textAlign: 'center',
            lineHeight: '17px',

            '&:hover': {
                backgroundColor: '#ffffff3d'
            }
        },

        '& .mobile_view': {
            display: 'none'
        }
    },

    img: {
        width: '27px',
        height: 'auto'
    },

    '@media (max-width: 1050px)': {
        ul: {
            '& .web_view': {
                display: 'none'
            },

            '& .mobile_view': {
                display: 'flex'
            }
        }
    },

    '@media (max-width: 500px)': {
        width: '50px',

        img: {
            width: '23px',
            height: 'auto'
        },

        ul: {
            a: {
                fontSize: '0.8rem'
            }
        }
    }
}));
