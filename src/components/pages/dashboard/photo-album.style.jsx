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
    backgroundPosition: 'center'
}));
