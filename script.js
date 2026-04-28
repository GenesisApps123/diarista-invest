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
    window.open(
      "https://wa.me/5588993082035?text=Acabei de comprar " +
      qtd +
      " cotas no Diarista Online e aguardo confirmação por email!"
    );
  }, 3000);
}

/* =========================
   NOVA LISTA DE INVESTIDORES
========================= */

const investidores = [
{nome:"João Silva", cotas:5},
{nome:"Maria Souza", cotas:12},
{nome:"Carlos Oliveira", cotas:2},
{nome:"Ana Santos", cotas:8},
{nome:"Pedro Costa", cotas:20},
{nome:"Lucas Pereira", cotas:3},
{nome:"Fernanda Lima", cotas:15},
{nome:"Rafael Alves", cotas:1},
{nome:"Juliana Rocha", cotas:6},
{nome:"Bruno Gomes", cotas:10},
{nome:"Amanda Ribeiro", cotas:4},
{nome:"Diego Martins", cotas:25},
{nome:"Paula Fernandes", cotas:7},
{nome:"Rodrigo Barros", cotas:9},
{nome:"Camila Freitas", cotas:2},
{nome:"Felipe Nunes", cotas:30},
{nome:"Larissa Teixeira", cotas:5},
{nome:"Eduardo Carvalho", cotas:14},
{nome:"Bianca Melo", cotas:3},
{nome:"Thiago Moreira", cotas:18},
{nome:"Patrícia Cardoso", cotas:6},
{nome:"Gustavo Duarte", cotas:22},
{nome:"Aline Batista", cotas:4},
{nome:"Renato Pires", cotas:11},
{nome:"Vanessa Moura", cotas:2},
{nome:"Leonardo Araújo", cotas:40},
{nome:"Carla Monteiro", cotas:5},
{nome:"Daniel Castro", cotas:9},
{nome:"Tatiane Lopes", cotas:3},
{nome:"André Vieira", cotas:17},
{nome:"Ricardo Tavares", cotas:6},
{nome:"Priscila Farias", cotas:12},
{nome:"Vinícius Macedo", cotas:1},
{nome:"Sabrina Coelho", cotas:8},
{nome:"Marcos Cunha", cotas:21},
{nome:"Cláudia Peixoto", cotas:7},
{nome:"Igor Santana", cotas:4},
{nome:"Débora Neves", cotas:13},
{nome:"Alexandre Braga", cotas:2},
{nome:"Kelly Matos", cotas:16},
{nome:"Henrique Sales", cotas:3},
{nome:"Simone Rezende", cotas:6},
{nome:"Fábio Campos", cotas:28},
{nome:"Luciana Borges", cotas:5},
{nome:"Roberto Dantas", cotas:19},
{nome:"Márcia Antunes", cotas:2},
{nome:"Sérgio Pacheco", cotas:24},
{nome:"Eliane Torres", cotas:4},
{nome:"Jorge Azevedo", cotas:10},
{nome:"Paulo Fonseca", cotas:35}
];

// RENDER LISTA
const lista = document.getElementById("lista");

investidores.forEach(pessoa => {
  const div = document.createElement("div");
  div.className = "investidor";

  div.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
    <span>${pessoa.nome}</span>
    <div class="cotas">${pessoa.cotas} cotas</div>
  `;

  lista.appendChild(div);
});

/* =========================
   DEPOIMENTOS (mantido)
========================= */

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
  const nomesDepoimentos = [
  "João Silva","Maria Souza","Carlos Oliveira","Ana Santos","Pedro Costa"
];

d.innerHTML = `
  <strong>${nomesDepoimentos[Math.floor(Math.random()*nomesDepoimentos.length)]}</strong><br><br>
  ${depoimentosTexto[Math.floor(Math.random() * depoimentosTexto.length)]}
`;
    depoimentosTexto[Math.floor(Math.random() * depoimentosTexto.length)];
  depoimentosDiv.appendChild(d);
}
