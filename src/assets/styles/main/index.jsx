import styled from '@emotion/styled';

export const DashboardMainField = styled.section(props => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '40px',

        h3: {
            fontSize: '1.4rem'
        },

        small: {
            fontSize: '0.9rem'
        },

        '& .right_field': {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',

            button: {
                fontSize: '0.9rem',
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
                fontSize: '0.9rem',
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

    '@media (max-width: 1300px)': {
        header: {
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

    '@media (max-width: 800px)': {
        header: {
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'flex-start',

            '& .right_field': {
                button: {
                    padding: '10px 10px'
                }
            }
        }
    },

    '@media (max-width: 500px)': {
        header: {
            '& .right_field': {
                gap: '5px',

                button: {
                    padding: '10px 5px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                }
            }
        },

        '& .right_field': {
            flexWrap: 'wrap'
        },

        '& .content_field': {
            '& .tabs': {
                top: '-35px',

                button: {
                    fontSize: '0.7rem',
                    width: '100px'
                }
            }
        }
    }
}));

export const HistoryMainField = styled.section({
    header: {
        marginBottom: '40px',

        h3: {
            fontSize: '1.4rem'
        }
    }
});

export const CurrentJobsField = styled.section({
    header: {
        marginBottom: '40px',

        h3: {
            fontSize: '1.4rem'
        }
    }
});
