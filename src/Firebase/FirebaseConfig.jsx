import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXmdX3nD0_N4kNgBqT9epyBG8sOfFRheM",
  authDomain: "shop-auth-20292.firebaseapp.com",
  projectId: "shop-auth-20292",
  storageBucket: "shop-auth-20292.appspot.com",
  messagingSenderId: "800843339919",
  appId: "1:800843339919:web:6c16cf73d55ccbd295b8fa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
