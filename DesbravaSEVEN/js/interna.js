// validaçoes de troca de setor fisico, mental, e espiritual
function trilha() {
    seleçao_trilha.style.display = ""
    seleçao_grafico.style.display = "none"
    seleçao_mestrados.style.display = "none"


}
function grafico() {

    seleçao_trilha.style.display = "none"
    seleçao_grafico.style.display = ""
    seleçao_mestrados.style.display = "none"

    var select = select_grafico.value;

    if (select == 'barra') {
        seleçao_barra.style.display = "";
        seleçao_porcentagem.style.display = "none";
    } else {
        seleçao_barra.style.display = "none"
        seleçao_porcentagem.style.display = ""
    }

}
function mestrado() {
    seleçao_trilha.style.display = "none"
    seleçao_grafico.style.display = "none"
    seleçao_mestrados.style.display = ""

}

function calcular_tempo() {
    var acumulador = 0;
    var mestrado = 0;
    var mestrados = Number(input_mestrado.value);
    var especialidade = Number(input_especialidades_por_mes.value);
    var qtd_esp = 0;
    var parar_contador = false;
    div_for.innerHTML = ``


  
        for (var cont = 1; cont <= 50; cont++) {

            acumulador += especialidade

            if (acumulador >= 7) {
                acumulador = 0
                mestrado++

            }
            qtd_esp += especialidade

            div_for.innerHTML += `
                               ${cont}° Mês <br>
                               ${qtd_esp} Especialidades concluidas<br>
                               ${mestrado}mestrado<br>`

            if (mestrado == mestrados) {
                cont = 51;
            }


        
    }


}

