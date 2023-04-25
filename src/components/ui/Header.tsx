import React, {useEffect} from "react";
import './Header.css';
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {useAppDispatch} from "../../features/hook";
import {setLogin} from "../../features/login/loginSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.login.value);

    useEffect(() => {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}.`);
    }, [isLoggedIn]);

    const clickHandle = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        dispatch(setLogin(true));
    };

    return <div className="header">
        <button onClick={clickHandle}>Přihlásit se</button>
    </div>
};

export default Header;