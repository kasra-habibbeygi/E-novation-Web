import Link from 'next/link';

// Assets
import { MainField } from './document.style';

// Component
import Button from '../../form-group/button';

const Document = () => {
    return (
        <MainField>
            <div>
                <h3>DOC</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, perspiciatis et earum voluptate blanditiis fugiat,
                    exercitationem, enim aliquam deleniti veniam ex. Officiis, rem? Repellat nulla sunt accusantium neque modi ipsam?{' '}
                </p>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>DOC</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, perspiciatis et earum voluptate blanditiis fugiat,
                    exercitationem, enim aliquam deleniti veniam ex. Officiis, rem? Repellat nulla sunt accusantium neque modi ipsam?{' '}
                </p>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>DOC</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, perspiciatis et earum voluptate blanditiis fugiat,
                    exercitationem, enim aliquam deleniti veniam ex. Officiis, rem? Repellat nulla sunt accusantium neque modi ipsam?{' '}
                </p>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>DOC</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, perspiciatis et earum voluptate blanditiis fugiat,
                    exercitationem, enim aliquam deleniti veniam ex. Officiis, rem? Repellat nulla sunt accusantium neque modi ipsam?{' '}
                </p>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>DOC</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, perspiciatis et earum voluptate blanditiis fugiat,
                    exercitationem, enim aliquam deleniti veniam ex. Officiis, rem? Repellat nulla sunt accusantium neque modi ipsam?{' '}
                </p>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
        </MainField>
    );
};

export default Document;
