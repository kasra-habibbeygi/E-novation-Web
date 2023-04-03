import styled from '@emotion/styled';

export const AuthField = styled.div(props => ({
    display: 'flex',
    height: '100vh',

    '& .right_field': {
        width: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 50px',
        backgroundColor: 'white',

        img: {
            width: '300px',
            height: 'auto'
        }
    },

    '& .login_footer': {
        display: 'none',
        position: 'absolute',
        bottom: '10px',
        width: '100%',

        p: {
            color: 'white',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold'
        },

        small: {
            color: 'white',
            width: '100%',
            textAlign: 'center',
            display: 'block'
        }
    },

    '& .remember_field': {
        alignItems: 'center',
        width: '90%',
        color: 'white',
        gap: '10px',
        display: 'none',

        label: {
            display: 'block'
        }
    },

    '@media (max-width: 900px)': {
        flexDirection: 'column',
        width: '100%',

        '& .remember_field': {
            display: 'flex'
        },

        '& .right_field': {
            width: '100%',
            height: '100%',
            backgroundColor: props.theme.colors.primary
        },

        label: {
            display: 'none'
        },

        '& .login_footer': {
            display: 'block'
        },

        '& .mb-0': {
            marginBottom: '10px'
        }
    },

    '@media (max-width: 500px)': {
        '& .right_field': {
            padding: '40px 20px',

            img: {
                width: '60%'
            }
        }
    }
}));

export const ImageField = styled.div(props => ({
    background: `url(${props.image})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right',

    '@media (max-width: 900px)': {
        display: 'none'
    }
}));
