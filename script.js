document.addEventListener("DOMContentLoaded", function() {
    const descricaoHabilidade = document.querySelector(".descricao-habilidade");
    const imagensHabilidade = document.querySelectorAll(".imagem-habilidade img");

    const descricoes = {
        css3: "Cascading Style Sheets (CSS) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
        git: "Git é um sistema de controle de versão distribuído usado para rastrear mudanças em arquivos de código-fonte durante o desenvolvimento de software.",
        html: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
        fluig: "O Fluig é uma plataforma da TOTVS para gestão de processos, documentos e colaboração, permitindo automação via JavaScript e integração com outros sistemas.",
        javascript: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
        postgres: "O SQL Server é um sistema de gerenciamento de banco de dados relacional (SGBD) desenvolvido pela Microsoft, usado para armazenar e manipular dados de forma segura e escalável.",
        python:"Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
        django: "Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view."
        
    };

    imagensHabilidade.forEach(imagem => {
        imagem.addEventListener("mouseenter", function() {
            const idImagem = imagem.id;
            const descricao = descricoes[idImagem];
            if (descricao) {
                descricaoHabilidade.textContent = descricao;
            }
        });

        imagem.addEventListener("mouseleave", function() {
            descricaoHabilidade.textContent = "Passe o mouse sobre alguma habilidade para obter mais informações sobre a mesma";
        });
    });
});

function mostrarGitDeployAnimesBrainBuster(){
    let div = document.getElementById("git-deploy-animesbrainbuster");
    div.style.display="flex";
    setTimeout(function(){
        div.style.display="none";
    }, 5000);
}

function mostrarGitDeployMercaLife(){
    let div = document.getElementById("git-deploy-mercalife");
    div.style.display="flex";
    setTimeout(function(){
        div.style.display="none";
    }, 5000);
}

function mostrarGitDeploySempreSeguro(){
    let div = document.getElementById("git-deploy-sempreseguro");
    div.style.display="flex";
    setTimeout(function(){
        div.style.display="none";
    }, 5000);
}
function mostrarGitDeployTodoListJS(){
    let div = document.getElementById("git-deploy-todolistjs");
    div.style.display="flex";
    setTimeout(function(){
        div.style.display="none";
    }, 5000);
}

function voltar(){
    let div = document.getElementById("git-deploy-mercalife");
    let div2 = document.getElementById("git-deploy-sempreseguro");
    let div3 = document.getElementById("git-deploy-todolistjs");
    let div4 = document.getElementById("git-deploy-animesbrainbuster")
    div.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
    div4.style.display="none";
}