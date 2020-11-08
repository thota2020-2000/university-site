import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/login_page_css.css';

const LoginPage = () => {
    let history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();

        history.push("/landing-page");
    }

    return (
        <>
            <div style={{ backgroundColor: '#e6e6e6', width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
                <form onSubmit={submitForm}>
                    <div className="login-form">
                        <div>
                            <div> <center> <h1> Login </h1> </center> </div>
                            <br />
                        </div>
                        <div>
                            <div> User Id </div>
                            <div> <input type="text" placeholder="user id" required /> </div><br />
                        </div>
                        <div>
                            <div> Password </div>
                            <div> <input type="password" placeholder="password" required /> </div> <br />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="submit" name="submit" style={{ color: 'white', border: '0.2rem solid indigo', backgroundColor: 'indigo' }} />
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export { LoginPage as default };