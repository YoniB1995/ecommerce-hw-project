
import { initializeApp } from "firebase/app";

const firebaseConfig ={
  apiKey: "AIzaSyDFPov4djLWjAhCpU31ilmIi4OP0XCkxGs",
  authDomain: "auth-development-b82da.firebaseapp.com",
  projectId:"auth-development-b82da",
  storageBucket: "auth-development-b82da.appspot.com",
  messagingSenderId: "698009473903",
  appId: "1:698009473903:web:0428fed4c73794ddd68e9a"
};

const app = initializeApp(firebaseConfig);

export default app;