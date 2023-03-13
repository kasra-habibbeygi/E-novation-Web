import ContentLoader from 'react-content-loader';

const card = ({ height, background = '#e3e3e3', foregroundColor = '#c4c4c4' }) => {
    return (
        <ContentLoader speed={3} backgroundColor={background} foregroundColor={foregroundColor} height={height}>
            <rect x='0' y='0' rx='0' ry='0' width='100%' height='100%' />
        </ContentLoader>
    );
};

export default card;
