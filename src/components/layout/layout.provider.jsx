// Assets
import { LayoutField } from './layout.style';

// Component
import Navbar from './navbar';
import Aside from './aside';
import UserAside from './user-aside';

const LayoutProvider = ({ children }) => {
    return (
        <LayoutField>
            <Navbar />
            <Aside />
            <UserAside />
            <section className='page_content_field'>{children}</section>
        </LayoutField>
    );
};

export default LayoutProvider;
