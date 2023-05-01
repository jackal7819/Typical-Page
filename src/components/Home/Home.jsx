import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import styles from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

const Home = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Card className={styles.home}>
            <h1>Welcome back!</h1>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
