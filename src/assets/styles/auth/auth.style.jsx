import styled from '@emotion/styled';

export const AuthField = styled.div({
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

    '@media (max-width: 900px)': {
        flexDirection: 'column',
        width: '90%',
        margin: '30px auto',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '6px',
        overflow: 'hidden',
        height: 'max-content',

        '& .right_field': {
            width: '100%',
            padding: '40px 50px'
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
});

export const ImageField = styled.div(props => ({
    background: `url(${props.image})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right',

    '@media (max-width: 900px)': {
        height: '400px'
    },

    '@media (max-width: 500px)': {
        height: '200px'
    }
}));
