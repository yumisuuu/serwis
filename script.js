import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const db = getFirestore(app);
const opinieRef = collection(db, "opinie");

/* DODAWANIE OPINII */
window.dodajOpinie = async function () {
    const imie = document.getElementById("imie").value.trim();
    const tresc = document.getElementById("tresc").value.trim();
    const gwiazdy = document.getElementById("gwiazdy").value;

    if (!imie || !tresc) {
        alert("Uzupełnij pola");
        return;
    }

    try {
        await addDoc(opinieRef, {
            imie,
            tresc,
            gwiazdy: parseInt(gwiazdy),
            data: Date.now()
        });

        document.getElementById("imie").value = "";
        document.getElementById("tresc").value = "";

        wczytajOpinie();

    } catch (err) {
        alert("Błąd dodawania: " + err.message);
        console.error(err);
    }
};

/* WCZYTYWANIE OPINII */
async function wczytajOpinie() {
    try {
        const snapshot = await getDocs(opinieRef);
        const container = document.getElementById("opinie");
        container.innerHTML = "";

        snapshot.forEach(docItem => {
            const op = docItem.data();
            container.innerHTML += `
            <div class="card">
                <strong>${op.imie}</strong><br>
                ${"⭐".repeat(op.gwiazdy)}<br>
                ${op.tresc}
            </div>`;
        });

    } catch (err) {
        console.error("Błąd wczytywania:", err);
    }
}

wczytajOpinie();
