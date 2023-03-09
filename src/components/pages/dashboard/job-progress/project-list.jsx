import Image from 'next/image';

// Assets
import { MainField } from './project-list.style';
import Supply from '@/src/assets/images/icons/medical-box.svg';

const ProjectList = () => {
    return (
        <MainField>
            <ul>
                <li className='active'>
                    <Image src={Supply} alt='' width={80} />
                    <p>Engineering / Designing / Drafting</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Engineering / Designing / Drafting</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Engineering / Designing / Drafting</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Engineering / Designing / Drafting</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
                <li>
                    <Image src={Supply} alt='' width={80} />
                    <p>Material supply</p>
                </li>
            </ul>
        </MainField>
    );
};

export default ProjectList;
