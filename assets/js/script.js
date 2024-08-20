const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


async function getApiGithub(){
    try{
        
        const dadosPerfil = await fetch(`https://api.github.com/users/vinicius-zanchetta`)
        const perfil = await dadosPerfil.json();

        let conteudo =

        `<!-- Foto do Perfil do Github -->
        <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}" width="450px">

        <!-- Texto Sobre você -->
        <article id="sobre_texto" >

            <h1>Sobre mim</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam odit voluptates incidunt inventore rem error harum
                blanditiis accusamus vitae, minus fugit consequatur?
                Dolorum maiores magni deleniti modi sit laudantium totam!
            </p>

            <!-- Informações do Github -->
            <div id="sobre_github" class="flex sobre_github">

                <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
                <p>${perfil.followers} Seguidores</p>
                <p>${perfil.public_repos} Repositorios</p>

            </div>

        </article>

    </section>`

    sobre.innerHTML = conteudo;

    }catch(error){
        console.log(error);
       }
}


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

        if(!campoEmail.value.match(emailRegex)){
            txtEmail.innerHTML = "Digite um e-mail valido!";
            campoEmail.focus();
            return;
        }else{
            txtEmail.innerHTML = '';
        }
        formulario.submit();
})
getApiGithub();