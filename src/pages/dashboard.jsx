import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Component
import LayoutProvider from '../components/layout/layout.provider';
import ProjectList from '../components/pages/dashboard/job-progress/project-list';
import ProjectInfo from '../components/pages/dashboard/job-progress/project-info';
import PhotoAlbum from '../components/pages/dashboard/photo-album';
import Docuemnt from '../components/pages/dashboard/document';
import Button from '../components/form-group/button';

// Assets
import { DashboardMainField } from '../assets/styles/main/index';

// API
import { GetSpecificJobsMessages } from '../api-request/jobs/messages';

const Dashboard = () => {
    const router = useRouter();
    const [tabsStatus, setTabsStatus] = useState('photoAlbum');
    const [jobsInfo, setJobsInfo] = useState({});

    useEffect(() => {
        GetSpecificJobsMessages(router.query.jobId)
            .then(res => {
                setJobsInfo(res);
            })
            .catch(() => {});
    }, [router.query.jobId]);

    const tabsStatusHanler = status => {
        setTabsStatus(status);
    };

    return (
        <LayoutProvider>
            <DashboardMainField>
                <header>
                    <div className='left_field'>
                        <h3>Current Project</h3>
                        <small>Victoria Car Platform</small>
                    </div>
                    <div className='right_field'>
                        <Button
                            text='Photo Album'
                            borderType='rounded'
                            extraClass={tabsStatus === 'photoAlbum' && 'active'}
                            clickHandler={() => tabsStatusHanler('photoAlbum')}
                        />
                        <Button
                            text='Job Progress'
                            borderType='rounded'
                            extraClass={tabsStatus === 'jobsProgress' && 'active'}
                            clickHandler={() => tabsStatusHanler('jobsProgress')}
                        />
                        <Button
                            text='Documents'
                            borderType='rounded'
                            extraClass={tabsStatus === 'Documents' && 'active'}
                            clickHandler={() => tabsStatusHanler('Documents')}
                        />
                    </div>
                </header>
                {tabsStatus === 'photoAlbum' && <PhotoAlbum />}
                {tabsStatus === 'jobsProgress' && (
                    <div className='content_field'>
                        <ProjectList jobsInfo={jobsInfo} />
                        <ProjectInfo jobsInfo={jobsInfo} />
                    </div>
                )}
                {tabsStatus === 'Documents' && <Docuemnt />}
            </DashboardMainField>
        </LayoutProvider>
    );
};

export default Dashboard;
