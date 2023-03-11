// Assets
import Image from 'next/image';
import { MainEmptyField } from './empty-field.style';
import EmptyFile from '../../assets/images/icons/folder.svg';

const EmptyField = () => {
    return (
        <MainEmptyField>
            <Image src={EmptyFile} alt='empty field' width={100} />
            <p>No items were found to display!</p>
        </MainEmptyField>
    );
};

export default EmptyField;
