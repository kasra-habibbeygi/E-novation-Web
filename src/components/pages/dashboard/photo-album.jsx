// Assets
import { MainField, Card } from './photo-album.style';
import CarImg from '@/src/assets/images/car.jpg';

const PhotoAlbum = () => {
    return (
        <MainField>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
            <Card background={CarImg.src}></Card>
        </MainField>
    );
};

export default PhotoAlbum;
