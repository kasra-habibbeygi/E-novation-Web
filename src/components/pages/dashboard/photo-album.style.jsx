import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',

    svg: {
        width: '23%'
    },

    '@media (max-width: 1300px)': {
        svg: {
            width: '30%'
        }
    },

    '@media (max-width: 800px)': {
        svg: {
            width: '46%'
        }
    },

    '@media (max-width: 600px)': {
        svg: {
            width: '100%'
        }
    }
});

export const Card = styled.div(props => ({
    width: '23%',
    height: '200px',
    borderRadius: '6px',
    background: `url(${props.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    position: 'relative',

    div: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        backgroundColor: '#000000a8',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',

        img: {
            height: 'auto',
            width: '20px'
        }
    },

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

export const ModalField = styled.div(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    opacity: props.status ? '1' : '0',
    pointerEvents: props.status ? 'initial' : 'none',
    zIndex: '15',
    overflow: 'auto',
    padding: '30px 0',

    '& .layout': {
        width: '100%',
        minHeight: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: '#000000c4',
        zIndex: '11'
    },

    '& .content': {
        position: 'relative',
        zIndex: '12',
        width: '700px',
        background: 'rgb(255 255 255 / 13%)',
        backdropFilter: 'blur( 7px )',
        borderRadius: '10px',
        padding: '30px',
        margin: 'auto'
    },

    img: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '30px'
    },

    p: {
        color: 'white'
    },

    button: {
        marginTop: '30px'
    },

    '@media (max-width: 800px)': {
        img: {
            height: 'auto'
        }
    }
}));
