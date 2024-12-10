const ctx = document.getElementById('myChart');
const data = {
    labels: ['Comer','Tomar agua','Dormir','Jugar','Trabajr','Gym','Correr'],
    datasets: [{
        label:'prueba',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
    }]
};
const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
        line: {
            borderWidth: 3
        }
        }
    },
};
new Chart(ctx,config);