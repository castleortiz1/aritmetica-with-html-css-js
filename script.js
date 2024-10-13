function operacion(tipo) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    switch(tipo) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operación desconocida';
    }

    document.getElementById('resultado').innerText = resultado;
}
