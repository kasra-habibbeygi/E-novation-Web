// Assets
import { HistoryMainField } from '../assets/styles/main/index';

// Component
import LayoutProvider from '../components/layout/layout.provider';
import HistoryList from '../components/pages/history/list';

const History = () => {
    return (
        <LayoutProvider>
            <HistoryMainField>
                <header>
                    <h3>History</h3>
                </header>
                <HistoryList />
            </HistoryMainField>
        </LayoutProvider>
    );
};

export default History;
