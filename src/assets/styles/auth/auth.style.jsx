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

        img: {
            width: '300px',
            height: 'auto'
        }
    },

    '@media (max-width: 900px)': {
        flexDirection: 'column',
        width: '90%',
        margin: '30px auto',
        gap: '40px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        paddingBottom: '30px',
        borderRadius: '6px',
        overflow: 'hidden',

        '& .right_field': {
            width: '100%'
        }
    },

    '@media (max-width: 500px)': {
        '& .right_field': {
            padding: '0 20px',

            img: {
                width: '90%'
            }
        }
    }
});

export const ImageField = styled.div(props => ({
    background: `url(${props.image})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'right'
}));
