// Data penjualan bulanan
var dataPenjualan = [500, 700, 800, 550, 600, 750, 900, 850, 950, 1100, 1050, 1200];

// Membuat grafik menggunakan Chart.js
var ctx = document.getElementById('penjualanChart').getContext('2d');
var penjualanChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [{
            label: 'Jumlah Penjualan',
            data: dataPenjualan,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Bulan'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Jumlah Penjualan'
                },
                beginAtZero: true
            }
        }
    }
});