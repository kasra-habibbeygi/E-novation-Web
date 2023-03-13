import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Assets
import { MainField } from './list.style';

// API
import { GetHistory } from '@/src/api-request/histroy';

// Component
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';

const HistoryList = () => {
    const userId = useSelector(state => state.UserInfo.info.id);
    const [historyList, setHistoryList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        GetHistory(userId)
            .then(res => {
                setHistoryList(res);
                setIsloaded(false);
            })
            .catch(() => {});
    }, [userId]);

    return (
        <MainField>
            {isLoaded ? (
                <>
                    <CardSkeleton height='110' />
                    <CardSkeleton height='110' />
                    <CardSkeleton height='110' />
                    <CardSkeleton height='110' />
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
        </MainField>
    );
};

export default HistoryList;
