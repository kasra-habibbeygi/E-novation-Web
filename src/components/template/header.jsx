import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Assets
import { HeaderField } from './header.style';

const HeaderTemp = ({ title }) => {
    const userInfo = useSelector(state => state.UserInfo.info);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <HeaderField>
            <b>{domLoaded && userInfo.company}</b>
            <h3>{title}</h3>
        </HeaderField>
    );
};

export default HeaderTemp;
