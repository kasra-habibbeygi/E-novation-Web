import styled from '@emotion/styled';

export const UserAsideField = styled.aside(props => ({
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '400px',
    backgroundColor: props.theme.colors.primary,
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 30px',
    overflow: 'auto',
    zIndex: '12',

    img: {
        width: '80px',
        height: 'auto',
        margin: '0 auto'
    },

    h3: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '20px',
        textAlign: 'center'
    },

    button: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: '1rem'
    },

    '& .user_info_field': {
        width: '100%',
        background: props.theme.colors.primary,
        position: 'sticky',
        top: '-50px',
        zIndex: '1',
        paddingBottom: '50px',

        '& .content_field': {
            marginTop: '30px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            padding: '20px 15px',

            p: {
                fontSize: '0.9rem'
            },

            b: {
                fontSize: '1.5rem',
                color: props.theme.colors.primary
            }
        }
    },

    '& .messages_field': {
        marginTop: '30px',

        header: {
            width: 'max-content',
            borderBottom: '1px solid white',
            color: 'white',
            marginBottom: '20px'
        },

        img: {
            width: '50px'
        },

        '& .message': {
            display: 'flex',
            alignItems: 'center',
            marginTop: '25px',

            div: {
                width: '100%',
                marginLeft: '30px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '7px',
                padding: '15px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',

                '&::after': {
                    content: '""',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    left: '-7px',
                    borderRadius: '5px',
                    transform: 'rotate(-45deg)'
                }
            },

            p: {
                fontSize: '0.8rem',
                textAlign: 'left',
                marginTop: '5px'
            },

            b: {
                fontSize: '0.9rem',
                textAlign: 'left',
                width: '100%',
                color: '#7487ff'
            }
        }
    },

    '@media (max-width: 1200px)': {
        right: props.status ? '0' : '-400px',
        transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1) 0s'
    },

    '@media (max-width: 500px)': {
        width: '320px',
        padding: '50px 12px',

        h3: {
            fontSize: '1.4rem'
        },

        '& .user_info_field': {
            paddingBottom: '30px',

            '& .content_field': {
                p: {
                    fontSize: '0.8rem'
                }
            }
        },

        '& .messages_field': {
            img: {
                width: '40px'
            },

            '& .message': {
                div: {
                    marginLeft: '15px'
                }
            }
        }
    }
}));

export const Layout = styled.div(props => ({
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'black',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1) 0s',
    cursor: 'pointer',
    zIndex: '11',

    '@media (max-width: 1200px)': {
        opacity: props.status ? '0.7' : '0',
        pointerEvents: props.status ? 'initial' : 'none'
    }
}));
