import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Component
import LayoutProvider from '../components/layout/layout.provider';
import ProjectList from '../components/pages/dashboard/job-progress/project-list';
import ProjectInfo from '../components/pages/dashboard/job-progress/project-info';
import PhotoAlbum from '../components/pages/dashboard/photo-album';
import Docuemnt from '../components/pages/dashboard/document';
import Button from '../components/form-group/button';
import HeaderTemp from '../components/template/header';
import RedirectButton from '../components/template/redirect-button';
import MobileMessages from '../components/pages/dashboard/messages';

// Hooks
import useWindowDimensions from '../hooks/get-window-dimensions';

// Assets
import { DashboardMainField } from '../assets/styles/main/index';
import Document from '../assets/images/icons/document.svg';
import Setting from '../assets/images/icons/settings.svg';
import Info from '../assets/images/icons/info.svg';
import Undo from '@/src/assets/images/icons/undo.svg';

// API
import { GetSpecificJobsMessages } from '../api-request/jobs/messages';

const Dashboard = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const [domLoaded, setDomLoaded] = useState(false);
    const [tabsStatus, setTabsStatus] = useState('Job Progress');
    const [jobsInfo, setJobsInfo] = useState({});
    const [isLoaded, setIsloaded] = useState(true);
    const [jobsProgresstabsStatus, setJobsProgressTabsStatus] = useState('Job Progress');

    useEffect(() => {
        setDomLoaded(true);
        if (router.query.jobId) {
            GetSpecificJobsMessages(router.query.jobId)
                .then(res => {
                    setJobsInfo(res);
                    setIsloaded(false);
                })
                .catch(() => {});
        }
    }, [router.query.jobId]);

    const tabsStatusHanler = status => {
        setTabsStatus(status);
    };

    const returnHanler = () => {
        setJobsProgressTabsStatus('Job Progress');
    };

    return (
        <LayoutProvider>
            <DashboardMainField buttonStatus={tabsStatus}>
                <div className='header'>
                    <div className='left_field'>
                        <HeaderTemp title={tabsStatus} />
                        <small>{jobsInfo.name}</small>
                    </div>
                    <div className='right_field'>
                        <Button
                            text='Job Progress'
                            borderType='rounded'
                            extraClass={tabsStatus === 'Job Progress' ? 'active' : ''}
                            clickHandler={() => {
                                tabsStatusHanler('Job Progress');
                                setJobsProgressTabsStatus('Job Progress');
                            }}
                        />
                        <Button
                            text='Photo Album'
                            borderType='rounded'
                            extraClass={tabsStatus === 'Photo Album' ? 'active' : ''}
                            clickHandler={() => {
                                tabsStatusHanler('Photo Album');
                                setJobsProgressTabsStatus('Photo Album');
                            }}
                        />
                        <Button
                            text='Documents'
                            borderType='rounded'
                            extraClass={tabsStatus === 'Documents' ? 'active' : ''}
                            clickHandler={() => {
                                tabsStatusHanler('Documents');
                                setJobsProgressTabsStatus('Documents');
                            }}
                        />
                    </div>
                </div>
                {tabsStatus === 'Photo Album' && <PhotoAlbum />}
                {tabsStatus === 'Job Progress' && (
                    <>
                        <div className='content_field'>
                            <div className='tabs'>
                                <Button
                                    text='Job Progress'
                                    extraClass={jobsProgresstabsStatus === 'Job Progress' ? 'active' : ''}
                                    clickHandler={() => setJobsProgressTabsStatus('Job Progress')}
                                />
                                <Button
                                    text='Job Info'
                                    extraClass={jobsProgresstabsStatus === 'Job Info' ? 'active' : ''}
                                    clickHandler={() => setJobsProgressTabsStatus('Job Info')}
                                />
                            </div>
                            <span className={`project_list ${jobsProgresstabsStatus === 'Job Progress' ? 'active' : ''}`}>
                                <ProjectList jobsInfo={jobsInfo} isLoaded={isLoaded} />
                            </span>
                            <span className={`project_list ${jobsProgresstabsStatus === 'Job Info' ? 'active' : ''}`}>
                                <ProjectInfo jobsInfo={jobsInfo} isLoaded={isLoaded} />
                            </span>
                            {jobsProgresstabsStatus === 'Message Board' && <MobileMessages />}
                        </div>
                        {jobsProgresstabsStatus === 'Job Progress' && (
                            <div className='mobile_menu'>
                                <button onClick={() => setJobsProgressTabsStatus('Job Info')}>
                                    <Image src={Info} alt='' />
                                    <p>Jobs Info</p>
                                </button>
                                <span></span>
                                <button onClick={() => setJobsProgressTabsStatus('Message Board')}>
                                    <Image src={Document} alt='' />
                                    <p>Message Board</p>
                                </button>
                                <span></span>
                                <button onClick={() => router.push('/current-jobs')}>
                                    <Image src={Setting} alt='' />
                                    <p>Company Jobs</p>
                                </button>
                            </div>
                        )}
                    </>
                )}
                {tabsStatus === 'Documents' && <Docuemnt />}
                {domLoaded && width < 900 && (jobsProgresstabsStatus === 'Message Board' || jobsProgresstabsStatus === 'Job Info') && (
                    <RedirectButton text='Current Jobs' icon={Undo} returnHandler={returnHanler} />
                )}
            </DashboardMainField>
        </LayoutProvider>
    );
};

export default Dashboard;
