const form = document.querySelector('.form');
const textEmail = document.querySelector('.form__input--email');
const textPassword = document.querySelector('.form__input--password');
const btnFormLogin = document.querySelector('.form__button--logIn');
const btnRegister = document.querySelector('.form__button--register');
const btnLogout = document.querySelector('.form__button--logOut');

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // connentAuthEmulator, // це для швидкого сервера локального
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBhJ5beXwmy_ttB_5GIAo765d2PbOi8cTk',
  authDomain: 'news-my-first-projec.firebaseapp.com',
  databaseURL: 'https://news-my-first-projec-default-rtdb.firebaseio.com',
  projectId: 'news-my-first-projec',
  storageBucket: 'news-my-first-projec.appspot.com',
  messagingSenderId: '356584807543',
  appId: '1:356584807543:web:4b5836cecd17ec95b6ba72',
});

// Initialize Firebase

const auth = getAuth(firebaseApp);
// connentAuthEmulator(auth, 'http://localhost:9099')

// запит повертає користувача у випадку якщо він є в базі
const loginEmailPasword = async evt => {
  evt.preventDefault();
  const loginEmail = textEmail.value;
  const loginPassword = textPassword.value;
  console.log(loginEmail, loginPassword);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};
btnFormLogin.addEventListener('click', loginEmailPasword);

// дія реєстрації акаунту
const createAccount = async evt => {
  evt.preventDefault();
  const loginEmail = textEmail.value;
  const loginPassword = textPassword.value;
  console.log(loginEmail, loginPassword);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

btnRegister.addEventListener('click', createAccount);

// перевірка чи зареєстрований користувач заращ
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('ти увійшов ');
    } else {
      console.log('ти ще не увійшов');
    }
  });
};

monitorAuthState();

// вихід з сайту
const Logout = async () => {
  await signOut(auth);
};

btnLogout.addEventListener('click', Logout);
