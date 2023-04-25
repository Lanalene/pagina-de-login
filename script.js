btnlogin = document.getElementById("btnlogin")
nome = document.getElementById("login")
senha = document.getElementById("senha")



btnlogin.addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value == "admin" && senha.value == "admin"){
        mensagem.classList.remove("mensagem-incorreta")
        mensagem.innerHTML = "Bem vindo"        
        mensagem.classList.add("mensagem-sucesso")

    }  else {
        mensagem.innerHTML = "tente de novo ou senha incorreta"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-incorreta")
    }
})