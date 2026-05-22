const imagem1 = document.getElementById("imagem1");
const nome1 = document.getElementById("nome1");
const poder1 = document.getElementById("poder1");
const recompensa1 = document.getElementById("recompensa1");

const imagem2 = document.getElementById("imagem2");
const nome2 = document.getElementById("nome2");
const poder2 = document.getElementById("poder2");
const recompensa2 = document.getElementById("recompensa2");

const vencedor = document.getElementById("vencedor");
const jogar = document.getElementById("jogar");

const carta01 = document.querySelector(".carta01");
const carta02 = document.querySelector(".carta02");

let carta1 = {}, carta2 = {};

// Funçao das cartas
function obterCarta(numero, elementoCarta) {
    if (numero <= 45) {
        elementoCarta.style.backgroundColor = "#634734";
        return { nome: "Zoro", poder: 300, imagem: "../img/zoro.png", recompensa: "1.111.000.000" };
    } else if (numero <= 70) {
        elementoCarta.style.backgroundColor = "rgb(136, 62, 255)";
        return { nome: "Kaido", poder: 750, imagem: "../img/kaido.png", recompensa: "4.611.100.000" };
    } else if (numero <= 85) {
        elementoCarta.style.backgroundColor = "rgb(255, 255, 64)";
        return { nome: "Luffy", poder: 1100, imagem: "../img/luffy.png", recompensa: "3.000.000.000" };
    } else if (numero < 95) {
        elementoCarta.style.backgroundColor = "rgb(160, 17, 17)";
        return { nome: "Shanks", poder: 2000, imagem: "../img/shanks.png", recompensa: "5.000.000.000" };
    } else {
        elementoCarta.style.backgroundColor = "rgb(34, 34, 34)";
        return { nome: "Imu-Sama", poder: 5000, imagem: "../img/imu.png", recompensa: "Não definida." };
    }
}

jogar.addEventListener("click", function() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    // Definir as cartas sorteadas
    carta1 = obterCarta(num1, carta01);
    carta2 = obterCarta(num2, carta02);

    // Definir vencedor
    if (carta1.poder < carta2.poder) {
        vencedor.innerText = " Direita!";
    } else if (carta1.poder === carta2.poder) {
        vencedor.innerText = " Nenhum.";
    } else {
        vencedor.innerText = " Esquerda!";
    }

    // Exibir carta 1
    imagem1.src = carta1.imagem;
    nome1.innerText = carta1.nome;
    poder1.innerText = carta1.poder;
    recompensa1.innerText = carta1.recompensa;

    // Exibir carta 2
    imagem2.src = carta2.imagem;
    nome2.innerText = carta2.nome;
    poder2.innerText = carta2.poder;
    recompensa2.innerText = carta2.recompensa;
});