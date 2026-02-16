
document.addEventListener("DOMContentLoaded", wczytajOpinie);

function dodajOpinie() {
    const imie = document.getElementById("imie").value;
    const tresc = document.getElementById("tresc").value;

    if (imie === "" || tresc === "") {
        alert("Uzupełnij wszystkie pola!");
        return;
    }

    const opinia = {
        imie: imie,
        tresc: tresc
    };

    let opinie = JSON.parse(localStorage.getItem("opinie")) || [];
    opinie.push(opinia);
    localStorage.setItem("opinie", JSON.stringify(opinie));

    document.getElementById("imie").value = "";
    document.getElementById("tresc").value = "";

    wyswietlOpinie();
}

function wczytajOpinie() {
    wyswietlOpinie();
}

function wyswietlOpinie() {
    const lista = document.getElementById("opinie-lista");
    lista.innerHTML = "";

    let opinie = JSON.parse(localStorage.getItem("opinie")) || [];

    opinie.forEach(opinia => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${opinia.imie}</h3><p>${opinia.tresc}</p>`;
        lista.appendChild(div);
    });
}
