
function calculer() {
    // Récupérer les valeurs saisies
    let a = document.getElementById("nombre1").value;
    let b = document.getElementById("nombre2").value;

    // Vérifier que les champs sont remplis
    if (a === "" || b === "") {
        document.getElementById("resultat").innerHTML =
            "Veuillez saisir les deux nombres.";
        return;
    }

    // Convertir les valeurs en nombres
    a = Number(a);
    b = Number(b);

    // Récupérer l'opération choisie
    let operation = document.getElementById("operation").value;
    let resultat;

    // Effectuer le calcul
    switch (operation) {
        case "+":
            resultat = a + b;
            break;

        case "-":
            resultat = a - b;
            break;

        case "*":
            resultat = a * b;
            break;

        case "/":
            if (b === 0) {
                document.getElementById("resultat").innerHTML =
                    "Erreur : division par zéro impossible.";
                return;
            }

            resultat = a / b;
            break;
    }

    // Afficher le résultat
    document.getElementById("resultat").innerHTML =
        "Résultat : " + resultat;
}
