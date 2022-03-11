import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from "../Firebase/context";

const ForgetPassword = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
            .then(() => {
                setError(null);
                setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
                setEmail("");
                setTimeout(() => {
                    props.history.push("/login")
                }, 5000)
            })
            .catch((error) => {
                setError(error);
                setEmail("");
            })
    };

    const disabled = email === "";

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div class="formBoxLeftForget">
                </div>
                <div class="formBoxRight">
                    <div className="formContent">
                        {
                            success && <span
                                style={{
                                    border: "1px solid green",
                                    background: "green",
                                    color: "#ffffff"
                                }}
                            >
                                {success}
                            </span>
                        }
                        {error && <span>{error.message}</span>}
                        <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <button disabled={disabled}>Récupérer</button>
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déja inscrit? Connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;