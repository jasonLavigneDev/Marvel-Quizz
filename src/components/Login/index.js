import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from "../Firebase/context";

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (password.length > 5 && email !== "") {
            setBtn(true);
        } else if (btn) {
            setBtn(false);
        }
    }, [password, email, btn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.loginUser(email, password)
            .then(user => {
                // logged In
                setEmail("");
                setPassword("");
                props.history.push("/welcome")
            })
            .catch(error => {
                setError(error);
                setEmail("");
                setPassword("");
            })
    };

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div class="formBoxLeftLogin">
                </div>
                <div class="formBoxRight">
                    <div className="formContent">
                        {error !== "" && <span>{error.message}</span>}
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div class="inputBox">
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel-Quiz? Inscrivez-vous maintenant.</Link>
                            <br />
                            <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié ? Récupérez-le ici.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;