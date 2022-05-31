

var nome_validado = false;
var email_validado = false;
var senha_validada = false;
var confirmar_senha_validada = false;

function validar_nome(){

    var nome = input_username.value.toLowerCase().trimStart().trimEnd();
    
    
    
    // Validaçoes do nome
    if(nome.length < 5 ){
       input_username.style.border = '1px solid red'
        erro_nome.innerHTML = `Tamanho minimo "5" `
    } else if(
       nome.indexOf(0) > -1 
    || nome.indexOf(1) > -1 
    || nome.indexOf(2) > -1 
    || nome.indexOf(3) > -1 
    || nome.indexOf(4) > -1 
    || nome.indexOf(5) > -1 
    || nome.indexOf(6) > -1 
    || nome.indexOf(7) > -1
    || nome.indexOf(8) > -1
    || nome.indexOf(9) > -1){
       input_username.style.border = '1px solid red'
       erro_nome.innerHTML = `Nome não deve conter numeros `
    } else if( nome.indexOf(',') > -1 ||  nome.indexOf('.') > -1){
        input_username.style.border = '1px solid red'
        erro_nome.innerHTML = `Nome não deve conter "." ou "," `
    }
    else{
       input_username.style.border = ''
        erro_nome.innerHTML = ``
        nome_validado = true
    }
}

    function validar_email(){

        var email = input_email.value.toLowerCase().trimStart().trimEnd();

    // Validaçoes email
    if(email.indexOf('@')  == -1 ){
        input_email.style.border = '1px solid red'
        erro_email.innerHTML = `Email deve ter "@" `
    } else if(email.indexOf('.com')  == -1 ){
        input_email.style.border = '1px solid red'
        erro_email.innerHTML = `Email deve ter ".com"`
    }else if(email.length < 12){
        input_email.style.border = '1px solid red'
        erro_email.innerHTML = `tamanho minimo "12"`
    }else{
        input_email.style.border = ''
        erro_email.innerHTML = ``
        email_validado = true;
    }
}
    
    function validar_senha(){

    var senha = input_senha.value.toLowerCase();

    // Validaçoes senha
    if(senha.length < 8){
        input_senha.style.border = '1px solid red'
        erro_senha.innerHTML = `Minimo de 8 caracters`
    }else if(senha.startsWith (" ") || senha.endsWith(" ")){
        input_senha.style.border = '1px solid red'
        erro_senha.innerHTML = `Caracters a mais`
    } else if( 
       senha.indexOf(0) == -1 
    && senha.indexOf(1) == -1 
    && senha.indexOf(2) == -1 
    && senha.indexOf(3) == -1 
    && senha.indexOf(4) == -1 
    && senha.indexOf(5) == -1 
    && senha.indexOf(6) == -1 
    && senha.indexOf(7) == -1
    && senha.indexOf(8) == -1
    && senha.indexOf(9) == -1){
       input_senha.style.border = '1px solid red'
       erro_senha.innerHTML = `Senha deve conter números `
    } else{
        input_senha.style.border = ''
        erro_senha.innerHTML = ``
        senha_validada = true;
    }
    }

function validar_confirmar_senha(){
    
    var confirmaçao = input_confirmar_senha.value.toLowerCase()
    var senha = input_senha.value.toLowerCase();

    if(confirmaçao.startsWith (" ") ||confirmaçao.endsWith(" ")){
        input_confirmar_senha.style.border = '1px solid red'
        erro_confirmar_senha.innerHTML = `Caracters a mais`
    } else if ( confirmaçao == senha ){
        input_confirmar_senha.style.border = ''
        erro_confirmar_senha.innerHTML = ``
        confirmar_senha_validada = true;
    } else{
        input_confirmar_senha.style.border = '1px solid red'
        erro_confirmar_senha.innerHTML = `Senhas divergentes`
    }
}

function cadastrar(){

    

if(nome_validado == true && email_validado == true && senha_validada == true && confirmar_senha_validada == true){
   
   




    
    
}else{

if(nome_validado == false){
    input_username.style.border = '1px solid red'
}if(email_validado == false){
    input_email.style.border = '1px solid red'
}if(senha_validada == false){
    input_senha.style.border = '1px solid red'
}if(confirmar_senha_validada == false){
    input_confirmar_senha.style.border = '1px solid red'
}

}

}

