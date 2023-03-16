function calcularconsumo(){
    var resultado, km, litros
    
    km = document.getElementById('km').value
    litros = document.getElementById('litros').value

    resultado = km / litros

    document.getElementById('resultado').textContent = resultado + "Km/L"
}

