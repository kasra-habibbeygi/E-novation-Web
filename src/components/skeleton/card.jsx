import ContentLoader from 'react-content-loader';

const card = ({ height, background = '#F2F2F2', foregroundColor = 'white' }) => {
    return (
        <ContentLoader speed={3} backgroundColor={background} foregroundColor={foregroundColor} height={height}>
            <rect x='0' y='0' rx='5' ry='5' width='100%' height='100%' />
        </ContentLoader>
    );
};

export default card;
