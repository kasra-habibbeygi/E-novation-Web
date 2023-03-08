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
    }
}));
