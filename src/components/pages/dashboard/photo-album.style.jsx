import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap'
});

export const Card = styled.div(props => ({
    width: '23%',
    height: '200px',
    borderRadius: '6px',
    background: `url(${props.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 1300px)': {
        width: '30%'
    },

    '@media (max-width: 800px)': {
        width: '46%'
    },

    '@media (max-width: 600px)': {
        width: '100%'
    }
}));
