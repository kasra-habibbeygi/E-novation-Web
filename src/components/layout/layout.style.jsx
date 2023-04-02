import styled from '@emotion/styled';

export const LayoutField = styled.main({
    '& .page_content_field': {
        width: 'calc(100% - 470px)',
        marginLeft: '70px',
        marginTop: '70px',
        padding: '30px',
        minHeight: 'calc(100vh - 70px)'
    },

    '@media (max-width: 1200px)': {
        '& .page_content_field': {
            width: 'calc(100% - 70px)'
        }
    },

    '@media (max-width: 900px)': {
        '& .page_content_field': {
            width: '100%',
            padding: '10px 30px',
            marginLeft: '0'
        }
    }
});
