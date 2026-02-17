import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_WKLEJ_API_KEY",
  authDomain: "TU_WKLEJ_AUTH_DOMAIN",
  projectId: "TU_WKLEJ_PROJECT_ID",
  storageBucket: "TU_WKLEJ_STORAGE",
  messagingSenderId: "TU_WKLEJ_ID",
  appId: "TU_WKLEJ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
