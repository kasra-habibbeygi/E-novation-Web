// Assets
import { MainField } from './project-info.style';

// Component
import CardSkeleton from '@/src/components/skeleton/card';

const ProjectInfo = ({ jobsInfo, isLoaded }) => {
    return (
        <MainField>
            <ul>
                {isLoaded ? (
                    <>
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                        <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                    </>
                ) : (
                    <>
                        <li>
                            <p>E-Novation Ref No : </p>
                            <span>{jobsInfo?.id_number}</span>
                        </li>
                        <li>
                            <p>Job Title : </p>
                            <span>{jobsInfo?.name}</span>
                        </li>
                        <li>
                            <p>Total Quantity : </p>
                            <span>{jobsInfo?.amount}</span>
                        </li>
                        <li>
                            <p>Purchase Order Number : </p>
                            <span>{jobsInfo?.order_number}</span>
                        </li>
                        <li>
                            <p>Custumer Drawing Number : </p>
                            <span>{jobsInfo?.budjet}</span>
                        </li>
                        <li>
                            <p>Start Date : </p>
                            <span>{jobsInfo?.start_date}</span>
                        </li>
                        <li>
                            <p>Expected Delivary Date : </p>
                            <span>{jobsInfo?.estimate}</span>
                        </li>
                        <li>
                            <p>Job Manager : </p>
                            <span>{jobsInfo?.manager}</span>
                        </li>
                    </>
                )}
            </ul>
        </MainField>
    );
};

export default ProjectInfo;
