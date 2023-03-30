// Component
import LayoutProvider from '../components/layout/layout.provider';
import CurrentJobsList from '../components/pages/current-jobs/list';
import HeaderTemp from '../components/template/header';

const CurrentJobs = () => {
    return (
        <LayoutProvider>
            <HeaderTemp title='Current Jobs'></HeaderTemp>
            <CurrentJobsList />
        </LayoutProvider>
    );
};

export default CurrentJobs;
