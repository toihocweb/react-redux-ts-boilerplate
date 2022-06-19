import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './actions/userActions';
import './App.css';
import { IAppState } from './store/store';

function App() {
    const currentUser = useSelector((state: IAppState) => state.userState.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUser());
    }, []);

    return (
        <div className="App">
            <h1>Welcome to React-Ts-Boilerplate</h1>
            <h2>{currentUser && currentUser.email}</h2>
            {/* <DemoCard /> */}
        </div>
    );
}

export default App;
