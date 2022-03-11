import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

//API//
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSender: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    // firestore
    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;




