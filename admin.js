import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, deleteDoc, doc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 WKLEJ TU SWOJĄ KONFIGURACJĘ
const firebaseConfig = {
  apiKey: "AIzaSyCko-H-P5WdD8u-9JN_h_euea1aHQnUzv8",
  authDomain: "serwiskomlab-80aeb.firebaseapp.com",
  projectId: "serwiskomlab-80aeb",
  storageBucket: "serwiskomlab-80aeb.firebasestorage.app",
  messagingSenderId: "670378709941",
  appId: "1:670378709941:web:5f55cd043bad072c483ffc",
  measurementId: "G-YK88ET8W97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const haslo = document.getElementById("haslo").value;

    try {
        await signInWithEmailAndPassword(auth, email, haslo);
        alert("Zalogowano!");
    } catch (error) {
        alert("Błąd logowania: " + error.message);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        wczytajAdmin();
    }
});

async function wczytajAdmin() {
    const snapshot = await getDocs(collection(db, "opinie"));
    const panel = document.getElementById("adminOpinie");
    panel.innerHTML = "";

    snapshot.forEach(docItem => {
        const op = docItem.data();
        panel.innerHTML += `
        <div class="card">
            <strong>${op.imie}</strong> (${op.gwiazdy}⭐)
            <p>${op.tresc}</p>
            <button onclick="usun('${docItem.id}')">Usuń</button>
        </div>`;
    });
}

window.usun = async function(id) {
    await deleteDoc(doc(db, "opinie", id));
    wczytajAdmin();
};
