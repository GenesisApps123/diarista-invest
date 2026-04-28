function comprar(link) {
  alert("Você será direcionado para o pagamento via Pix.");
  window.location.href = link;
}

// GRÁFICO
const totalCotas = 50000;
const cotasVendidas = 18750; // valor fictício

const ctx = document.getElementById('graficoCotas').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Vendidas', 'Disponíveis'],
    datasets: [{
      data: [cotasVendidas, totalCotas - cotasVendidas],
      backgroundColor: ['#00c853', '#e0e0e0']
    }]
  }
});
