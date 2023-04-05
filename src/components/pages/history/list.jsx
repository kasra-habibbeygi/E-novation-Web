import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Assets
import { MainField } from './list.style';
import Home from '@/src/assets/images/icons/home.svg';

// API
import { GetHistory } from '@/src/api-request/histroy';

// Component
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';
import RedirectButton from '../../template/redirect-button';

// Hooks
import useWindowDimensions from '@/src/hooks/get-window-dimensions';

// Utils
import { Time } from '@/src/utils/constasts';

const HistoryList = () => {
    const userId = useSelector(state => state.UserInfo.info.id);
    const [historyList, setHistoryList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);
    const [domLoaded, setDomLoaded] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setDomLoaded(true);

        GetHistory(userId)
            .then(res => {
                setHistoryList(res);
                setIsloaded(false);
            })
            .catch(() => {});

        const apiRecall = setInterval(() => {
            GetHistory(userId)
                .then(res => {
                    setHistoryList(res);
                })
                .catch(() => {});
        }, Time.API_RECALL_TIME);

        return () => {
            clearInterval(apiRecall);
        };
    }, [userId]);

    return (
        <MainField>
            {isLoaded ? (
                <>
                    <CardSkeleton height='180' />
                    <CardSkeleton height='180' />
                    <CardSkeleton height='180' />
                    <CardSkeleton height='180' />
                </>
            ) : historyList.length ? (
                historyList.map(item => (
                    <li key={`history_list_${item.id}`}>
                        <h3>{item.name}</h3>
                        <div>
                            <p>
                                <span>ID No : </span>
                                <b>{item.id_number}</b>
                            </p>
                            <p>
                                <span>Order No : </span>
                                <b>{item.order_number}</b>
                            </p>
                            <p>
                                <span>Total Quantity : </span>
                                <b>{item.amount}</b>
                            </p>
                            <p>
                                <span>Drowing Number : </span>
                                <b>{item.order_number}</b>
                            </p>
                            <p>
                                <span>State : </span>
                                <b>{item.state}</b>
                            </p>
                        </div>
                    </li>
                ))
            ) : (
                <EmptyField />
            )}
            {domLoaded && width < 900 && <RedirectButton src='/current-jobs' text='Current Jobs' icon={Home} />}
        </MainField>
    );
};

export default HistoryList;
