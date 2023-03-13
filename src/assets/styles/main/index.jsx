import styled from '@emotion/styled';

export const DashboardMainField = styled.section({
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
        gap: '20px'
    },

    '@media (max-width: 1300px)': {
        '& .content_field': {
            flexDirection: 'column'
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
                button: {
                    padding: '10px 10px',
                    fontSize: '0.8rem'
                }
            }
        },

        '& .right_field': {
            flexWrap: 'wrap'
        }
    }
});

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
