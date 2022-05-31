

var email_validado = false;
var senha_validada = false;


 function validar_email(){

    var email = input_email.value.toLowerCase().trimStart().trimEnd();
if(email == 'samuel'){
    input_email.style.border = '1px solid red'
    erro_email.innerHTML = `no validado email`
    
}else{
    input_email.style.border = ''
    erro_email.innerHTML = ``
    email_validado = true;
}
 }

 function validar_senha(){

    var senha = input_senha.value.toLowerCase();
    if(senha == 'samuel'){
        input_senha.style.border = '1px solid red'
        erro_senha.innerHTML = `no validado senha`
        
    }else{
        input_senha.style.border = ''
        erro_senha.innerHTML = ``
        senha_validada = true;
    }
 }
function logar(){

    

    if( email_validado == true && senha_validada == true){
       
       setInterval(() => {
        input_email.style.border = '1px solid blue'
        input_senha.style.border = '1px solid blue'
       }, 2000);
        
    }else{
    
    if(email_validado == false){
        input_email.style.border = '1px solid red'
    }if(senha_validada == false){
        input_senha.style.border = '1px solid red'
    }
    
    }
    
    }