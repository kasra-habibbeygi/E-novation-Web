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

    '@media (max-width: 900px)': {
        overflow: 'auto',
        height: 'calc(100vh - 210px)',
        margin: '0 30px 20px 0',
        padding: '0',
        paddingRight: '10px',

        '&::-webkit-scrollbar': {
            width: '5px'
        },

        '&::-webkit-scrollbar-track': {
            background: 'transparent'
        },

        '&::-webkit-scrollbar-thumb': {
            background: 'rgb(232 232 232)',
            borderRadius: '50px'
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

    '& .close_btn': {
        position: 'absolute',
        top: '20px',
        right: '20px',
        cursor: 'pointer',

        img: {
            width: '20px',
            height: 'auto'
        }
    },

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
        padding: '70px 30px',
        margin: 'auto'
    },

    '& .headr_image': {
        width: '100%',
        height: '400px',
        borderRadius: '10px',
        marginBottom: '30px',
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
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
