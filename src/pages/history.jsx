// Component
import LayoutProvider from '../components/layout/layout.provider';
import HistoryList from '../components/pages/history/list';
import HeaderTemp from '../components/template/header';

const History = () => {
    return (
        <LayoutProvider>
            <HeaderTemp title='History'></HeaderTemp>
            <HistoryList />
        </LayoutProvider>
    );
};

export default History;
