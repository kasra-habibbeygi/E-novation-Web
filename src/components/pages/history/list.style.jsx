import styled from '@emotion/styled';

export const MainField = styled.ul(props => ({
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '20px',

    li: {
        display: 'flex',
        width: '48%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px'
    },

    h3: {
        borderRight: '1px solid #e7e7e7',
        paddingRight: '20px',
        marginRight: '20px'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        flexWrap: 'wrap'
    },

    p: {
        flex: '1 0 45%',

        span: {
            color: props.theme.colors.primary,
            fontWeight: 'bold'
        }
    }
}));
