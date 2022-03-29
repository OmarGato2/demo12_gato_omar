//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCOZe_Ng2zSVVuN_W_HO45GB_l_KOs43-g",
    authDomain: "fir-comp-1800-8feea.firebaseapp.com",
    projectId: "fir-comp-1800-8feea",
    storageBucket: "fir-comp-1800-8feea.appspot.com",
    messagingSenderId: "215046265331",
    appId: "1:215046265331:web:8ed9a8c06c8449c9501a86",
    measurementId: "G-L5303GWLHK"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();