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
