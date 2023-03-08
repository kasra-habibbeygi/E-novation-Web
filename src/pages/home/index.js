import MainNav from '@/components/MainNav/MainNav';
import Profile from '@/components/Profile/Profile';
import Shower from '@/components/Shower/Shower';
import TitleNav from '@/components/TitleSideNav/TitleNav';
import classes from './MainScreen.module.css';

export default function HomePage() {
    return (
        <div className={classes.main}>
            <Profile />

            <div className={classes.imageContainer}>
                <img src='images/logo.png' className={classes.mainLogo} />
            </div>

            <MainNav />
            <TitleNav />
            <Shower />
        </div>
    );
}
