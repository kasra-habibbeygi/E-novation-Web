import styled from '@emotion/styled';

export const LayoutField = styled.main({
    '& .page_content_field': {
        width: 'calc(100% - 470px)',
        marginLeft: '70px',
        marginTop: '70px',
        padding: '30px'
    },

    '@media (max-width: 1200px)': {
        '& .page_content_field': {
            width: 'calc(100% - 70px)'
        }
    },

    '@media (max-width: 500px)': {
        '& .page_content_field': {
            width: 'calc(100% - 50px)',
            padding: '10px',
            marginLeft: '50px'
        }
    }
});
