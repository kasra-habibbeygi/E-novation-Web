import styled from '@emotion/styled';

export const DashboardMainField = styled.section(props => ({
    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '40px',

        header: {
            margin: '0'
        },

        h3: {
            fontSize: '1.4rem'
        },

        small: {
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',

            svg: {
                width: '100px'
            }
        },

        '& .right_field': {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',

            button: {
                fontSize: '1rem',
                width: 'max-content',
                padding: '10px 25px',
                color: 'black',
                backgroundColor: 'transparent',
                border: '1px solid white',

                '&.active': {
                    backgroundColor: 'white'
                }
            }
        }
    },

    '& .content_field': {
        display: 'flex',
        gap: '20px',
        position: 'relative',

        '& .tabs': {
            position: 'absolute',
            display: 'none',
            alignItems: 'center',
            gap: '10px',
            top: '-39px',

            button: {
                borderRadius: '5px 5px 0 0',
                fontSize: '1rem',
                fontWeight: '600',
                width: '110px',
                background: props.theme.colors.primary,
                color: 'white',

                '&.active': {
                    backgroundColor: 'white',
                    color: 'black'
                }
            }
        }
    },

    '& .project_list': {
        width: 'max-content'
    },

    '& .project_info': {
        width: 'max-content'
    },

    '& .mobile_menu': {
        display: 'none'
    },

    '@media (max-width: 1300px)': {
        '& .header': {
            marginBottom: '60px'
        },

        '& .content_field': {
            flexDirection: 'column',

            '& .tabs': {
                display: 'flex'
            }
        },

        '& .project_list': {
            width: '100%',
            display: 'none',

            '&.active': {
                display: 'block'
            }
        },

        '& .project_info': {
            width: '100%',
            display: 'none',

            '&.active': {
                display: 'block'
            }
        }
    },

    '@media (max-width: 900px)': {
        '& .content_field': {
            '& .tabs': {
                display: 'none'
            }
        },

        '& .left_field': {
            width: '100%',

            small: {
                color: props.theme.colors.secondary,
                border: `1px solid ${props.theme.colors.secondary}`,
                padding: '5px 20px',
                width: '100%',
                borderRadius: '10px',
                backgroundColor: 'white',
                marginTop: '10px',
                boxShadow: 'rgb(0 0 0 / 14%) 0px 3px 5px',
                fontWeight: 'bold'
            }
        },

        '& .header': {
            marginBottom: '15px',

            '& .right_field': {
                position: 'absolute',
                zIndex: '10',
                top: '49%',
                right: '-170px',
                transform: 'rotate(90deg) translate(-8%)',
                background: '#F2CA30',
                height: '125px',
                borderRadius: '22px',
                paddingTop: '52px',

                button: {
                    color: 'white',
                    border: 'none',
                    background: 'transparent',
                    borderRadius: '0',
                    height: '102%',
                    fontSize: '0.9rem',
                    padding: '5px 15px',

                    '&.active': {
                        backgroundColor: '#F2F5FA',
                        color: 'black'
                    },

                    '&:nth-child(2)': {
                        borderRadius: '0 0 0 22px',
                        order: '1'
                    },

                    '&:last-of-type': {
                        borderRadius: '0 0 22px 0',
                        order: '3'
                    },

                    '&:first-of-type': {
                        order: '2'
                    }
                },

                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '-22px',
                    top: '-3px',
                    width: '70px',
                    height: '130px',
                    background: props.buttonStatus === 'Photo Album' ? '#F2F5FA' : props.theme.colors.secondary,
                    borderRadius: ' 80px 80px 0 0',
                    transform: 'rotate(155deg)',
                    zIndex: '-1'
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: '-22px',
                    top: '-3px',
                    width: '70px',
                    height: '130px',
                    background: props.buttonStatus === 'Documents' ? '#F2F5FA' : props.theme.colors.secondary,
                    borderRadius: ' 80px 80px 0 0',
                    transform: 'rotate(200deg)',
                    zIndex: '-1'
                }
            }
        },

        '& .mobile_menu': {
            display: 'flex',
            width: '90%',
            position: 'fixed',
            bottom: '10px',
            left: '5%',
            backgroundColor: props.theme.colors.primary,
            alignItems: 'center',
            gap: '5px',
            justifyContent: 'center',
            borderRadius: '10px',
            padding: '5px 0',
            zIndex: '10',

            span: {
                width: '1px',
                height: '25px',
                backgroundColor: 'white'
            },

            img: {
                width: '20px',
                height: 'auto'
            },

            button: {
                backgroundColor: 'transparent',
                width: '100%'
            },

            p: {
                color: 'white'
            }
        }
    },

    '@media (max-width: 600px)': {
        '& .mobile_menu': {
            p: {
                fontSize: '0.8rem'
            }
        }
    }
}));
