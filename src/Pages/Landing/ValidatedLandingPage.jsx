import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';

const ValidatedLandingPage = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return ( <
        div >
        Welcome User!{ user && user.email } <
        button onClick = { handleLogout } > Logout < /button> < /
        div >
    )
}

export default ValidatedLandingPage