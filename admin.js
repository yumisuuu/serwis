import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, deleteDoc, doc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.zaloguj = async function () {
    const email = document.getElementById("email").value;
    const haslo = document.getElementById("haslo").value;

    await signInWithEmailAndPassword(auth, email, haslo);
    wczytajAdmin();
};

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
