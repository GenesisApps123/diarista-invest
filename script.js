let totalCotas = 50000;
let cotasVendidas = 21347;

// CONTADOR
function atualizarContador() {
  document.getElementById("contador").innerText = cotasVendidas;
}
atualizarContador();

// ESCASSEZ DINÂMICA
function atualizarEscassez() {
  let restante = Math.floor(Math.random() * 10) + 1;
  document.getElementById("restantes").innerText = restante;
}
setInterval(atualizarEscassez, 5000);

// GRÁFICO
const ctx = document.getElementById('grafico').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Vendidas', 'Disponíveis'],
    datasets: [{
      data: [cotasVendidas, totalCotas - cotasVendidas],
      backgroundColor: ['#00bf63', '#eeeeee']
    }]
  }
});

// WHATSAPP + COMPRA
function comprar(qtd, link) {
  alert("Você será direcionado para o pagamento via Pix.");

  setTimeout(() => {
    window.location.href = link;
  }, 1000);

  setTimeout(() => {
    window.open("https://wa.me/5588996444527?text=Acabei de comprar " + qtd + " cotas no Diarista Online e aguardo confirmação por email!");
  }, 3000);
}

// NOMES FICTÍCIOS (1000)
const nomes = [];
for (let i = 1; i <= 1000; i++) {
  nomes.push("Investidor " + i);
}

// LISTA PÚBLICA
const lista = document.getElementById("lista");
nomes.forEach(nome => {
  let p = document.createElement("p");
  p.innerText = nome;
  lista.appendChild(p);
});

// DEPOIMENTOS
const depoimentosTexto = [
  "Já comprei minhas cotas 🚀",
  "Projeto com muito potencial!",
  "Entrei cedo nesse investimento!",
  "Vale muito a pena 🔥",
  "App incrível!"
];

const depoimentosDiv = document.getElementById("depoimentos");

for (let i = 0; i < 20; i++) {
  let d = document.createElement("div");
  d.className = "depoimento";
  d.innerText = depoimentosTexto[Math.floor(Math.random() * depoimentosTexto.length)];
  depoimentosDiv.appendChild(d);
}
