import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    backgroundColor: 'white',
    padding: '20px',
    width: '100%',
    borderRadius: '8px',
    display: 'flex',
    gap: '20px',
    minWidth: '500px',

    '& .progress_bar': {
        width: '7px',
        backgroundColor: props.theme.colors.secondary,
        borderRadius: '50px',
        position: 'relative',

        '&::after': {
            content: '""',
            width: '100%',
            height: `calc(11.111111111% * ${props.state})`,
            backgroundColor: props.theme.colors.primary,
            borderRadius: '50px',
            position: 'absolute',
            bottom: '0',
            left: ''
        }
    },

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',

        svg: {
            width: '100%',

            defs: {
                width: '100%',
                display: 'block'
            }
        },

        li: {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #f1f1f1',
            borderRadius: '8px',
            padding: '6px 20px',
            transition: 'all linear 0.2s',
            backgroundColor: 'white',
            color: 'black',

            img: {
                width: '35px',
                height: 'auto',
                marginRight: '20px'
            },

            '&.active': {
                backgroundColor: props.theme.colors.primary,
                color: 'white'
            },

            '&.deactive': {
                color: 'gray'
            }
        }
    },

    '@media (max-width: 1300px)': {
        width: '100%',
        borderRadius: '0 8px 8px 8px',
        minWidth: 'unset',

        ul: {
            width: '100%'
        }
    },

    '@media (max-width: 900px)': {
        padding: '0 40px 20px 0',
        gap: '12px',

        ul: {
            gap: '5px',

            li: {
                padding: '6px 10px',

                '&.active': {
                    transform: 'scale(1.025)'
                }
            }
        },

        '& .progress_bar': {
            width: '10px'
        }
    },

    '@media (max-width: 500px)': {
        height: 'calc(100vh - 240px)',

        p: {
            fontSize: '0.85rem'
        },

        img: {
            width: '4vh !important',
            marginRight: '10px !important',
            minWidth: '30px'
        },

        ul: {
            gap: '5px',

            li: {
                padding: '6px 10px',
                height: '100%',

                '&.active': {
                    transform: 'scale(1.025)'
                }
            }
        }
    },

    '@media (max-height: 700px)': {
        p: {
            fontSize: '0.8rem'
        },

        img: {
            width: '4vh !important',
            marginRight: '10px !important',
            minWidth: '30px'
        },

        ul: {
            gap: '3px',

            li: {
                padding: '3px 10px',
                height: '100%'
            }
        }
    }
}));
