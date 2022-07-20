import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCqCYr9X6lY_Rcv1OKASqAhrqeWJbzEfqc",
  authDomain: "sahyadri-safar.firebaseapp.com",
  databaseURL: "https://sahyadri-safar-default-rtdb.firebaseio.com",
  projectId: "sahyadri-safar",
  storageBucket: "sahyadri-safar.appspot.com",
  messagingSenderId: "38742511676",
  appId: "1:38742511676:web:c931dcb06f10f983597339",
  measurementId: "G-CFV1G0PVP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };