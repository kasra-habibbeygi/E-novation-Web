import styled from '@emotion/styled';

export const MainField = styled.div({
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
            cursor: 'pointer',
            border: '1px solid #f1f1f1',
            borderRadius: '8px',
            padding: '10px 20px',
            transition: 'all linear 0.2s',

            '&:hover': {
                backgroundColor: '#f5f5f5'
            },

            img: {
                width: '30px',
                height: 'auto',
                marginRight: '20px'
            },

            '&.active': {
                backgroundColor: '#3b3b3b',
                color: 'white'
            }
        }
    }
});
