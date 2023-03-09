import Link from 'next/link';

// Assets
import { MainField } from './list.style';

// Component
import Button from '../../form-group/button';

const CurrentJobsList = () => {
    return (
        <MainField>
            <div>
                <h3>Victoria Car Platform</h3>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>Victoria Car Platform</h3>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>Victoria Car Platform</h3>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>Victoria Car Platform</h3>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
            <div>
                <h3>Victoria Car Platform</h3>
                <Link href='/'>
                    <Button text='View' color='warning' />
                </Link>
            </div>
        </MainField>
    );
};

export default CurrentJobsList;
