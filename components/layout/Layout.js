import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export default function Layout({ children }) {
    debugger;
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </div>
    );
}

