import JobDetails from './JobDetails';
import Message from './Message';
import classes from './Profile.module.css';
import UserInterface from './UserInterface';

export default function Profile() {
    return (
        <div className={classes.profile}>
            <UserInterface />
            <JobDetails />
            <Message />
        </div>
    );
}
