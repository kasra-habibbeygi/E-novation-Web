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

        a: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px 0',
            transition: 'all linear 0.15s',

            '&:hover': {
                backgroundColor: '#ffffff3d'
            }
        }
    },

    img: {
        width: '27px',
        height: 'auto'
    }
}));
