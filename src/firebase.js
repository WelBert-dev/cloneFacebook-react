import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDKLEHVkRulheQBE_Qr3HHandoJA4ZMk5I",
    authDomain: "clonefacebook-react.firebaseapp.com",
    projectId: "clonefacebook-react",
    storageBucket: "clonefacebook-react.appspot.com",
    messagingSenderId: "1058779792350",
    appId: "1:1058779792350:web:7a1cf2646323d25baa134f",
    measurementId: "G-14S94J9TT8"
  });

  const db = Firebase.firestore();
  // const auth = auth();
  // const storage = storage();
  // const functions = functions();

  export {db};
