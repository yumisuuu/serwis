import { db } from "./firebase.js";
import { collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const opinieRef = collection(db, "opinie");

window.dodajOpinie = async function () {
    const imie = document.getElementById("imie").value;
    const tresc = document.getElementById("tresc").value;
    const gwiazdy = document.getElementById("gwiazdy").value;

    if (!imie || !tresc) return alert("Uzupełnij pola");

    await addDoc(opinieRef, {
        imie,
        tresc,
        gwiazdy: parseInt(gwiazdy),
        data: Date.now()
    });

    wczytajOpinie();
};

async function wczytajOpinie() {
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
}

wczytajOpinie();
