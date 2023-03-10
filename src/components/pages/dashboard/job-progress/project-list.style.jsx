import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    backgroundColor: 'white',
    padding: '20px',
    width: 'max-content',
    borderRadius: '8px',

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        overflow: 'auto',
        maxHeight: '500px',
        paddingRight: '20px',

        li: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #f1f1f1',
            borderRadius: '8px',
            padding: '10px 20px',
            transition: 'all linear 0.2s',

            img: {
                width: '30px',
                height: 'auto',
                marginRight: '20px'
            },

            '&.active': {
                backgroundColor: props.theme.colors.primary,
                color: 'white'
            }
        }
    },

    '@media (max-width: 1300px)': {
        width: '100%'
    },

    '@media (max-width: 500px)': {
        p: {
            fontSize: '0.8rem'
        },

        img: {
            width: '25px !important',
            marginRight: '10px !important'
        }
    }
}));
