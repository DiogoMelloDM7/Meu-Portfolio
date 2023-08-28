document.addEventListener("DOMContentLoaded", function() {
    const descricaoHabilidade = document.querySelector(".descricao-habilidade");
    const imagensHabilidade = document.querySelectorAll(".imagem-habilidade img");

    const descricoes = {
        css3: "Cascading Style Sheets (CSS) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
        git: "Git é um sistema de controle de versão distribuído usado para rastrear mudanças em arquivos de código-fonte durante o desenvolvimento de software.",
        html: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
        java: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.",
        javascript: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
        postgres: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
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