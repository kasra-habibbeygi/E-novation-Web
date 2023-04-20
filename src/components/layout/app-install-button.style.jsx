import styled from '@emotion/styled';

export const ModalField = styled.nav(props => ({
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
        width: '450px',
        background: 'white',
        borderRadius: '10px',
        padding: '25px',
        margin: 'auto',

        p: {
            fontSize: '1rem',
            color: '#7e8395'
        },

        h3: {
            fontSize: '1.7rem',
            marginBottom: '15px',
            color: '#313132',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            img: {
                width: '40px',
                height: 'auto'
            }
        }
    },

    '& .button_group': {
        display: 'flex',
        gap: '15px',
        marginTop: '20px',
        justifyContent: 'flex-end',

        button: {
            fontSize: '1rem',
            minWidth: 'max-content',
            width: 'unset',
            fontWeight: '200'
        },

        '& .close_button': {
            background: 'white',
            border: '2px solid #f1f1f1',
            color: '#515678'
        }
    },

    '@media (max-width: 900px)': {
        '& .content': {
            h3: {
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#313132',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: 'center',

                img: {
                    width: '30px',
                    height: 'auto'
                }
            }
        }
    },

    '@media (max-width: 500px)': {
        '& .content': {
            margin: 'auto 15px',
            padding: '15px'
        }
    }
}));
