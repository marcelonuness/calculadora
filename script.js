function calcular(tipo, valor) {
    let texto = document.getElementById("resultado")
    
    if(tipo === 'acao') {
        if(valor === 'c') {
            //limpar o visor
            texto.value = ''
        }

        if( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            texto.value += valor
        }

        if( valor === '=' ) {
            let resultado = eval(texto.value)
            texto.value = resultado
        }
    } else if(tipo === 'valor') {
        texto.value += valor
    }

}