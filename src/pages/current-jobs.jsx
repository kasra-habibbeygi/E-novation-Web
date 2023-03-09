// Assets
import { CurrentJobsField } from '../assets/styles/main/index';

// Component
import LayoutProvider from '../components/layout/layout.provider';
import CurrentJobsList from '../components/pages/current-jobs/list';

const CurrentJobs = () => {
    return (
        <LayoutProvider>
            <CurrentJobsField>
                <header>
                    <h3>Current Jobs</h3>
                </header>
                <CurrentJobsList />
            </CurrentJobsField>
        </LayoutProvider>
    );
};

export default CurrentJobs;
