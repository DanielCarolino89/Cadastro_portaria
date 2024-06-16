document.addEventListener('DOMContentLoaded', function() {
    const carData = JSON.parse(localStorage.getItem('carData'));

    if (carData) {
        document.getElementById('displayTipo').textContent = carData.tipo;
        document.getElementById('displayPlaca').textContent = carData.placa;
        document.getElementById('displayMarca').textContent = carData.marca;
        document.getElementById('displayModelo').textContent = carData.modelo;
        document.getElementById('displayCor').textContent = carData.cor;
        document.getElementById('displayDocumento').textContent = carData.documento;
        document.getElementById('displayExpedicao').textContent = carData.expedicao;
        document.getElementById('displayNome').textContent = carData.nome;
        document.getElementById('displayEmpresa').textContent = carData.empresa;
        document.getElementById('displayFuncao').textContent = carData.funcao;
        document.getElementById('displayCasa').textContent = carData.casa;
    } else {
        alert('Sem registro de pessoas!');
    }
});