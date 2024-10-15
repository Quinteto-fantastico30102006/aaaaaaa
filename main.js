const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a linguagem de programação mais popular em 2024?",
        alternativas: [
            "JavaScript", 
            "Python"
        ]
    },
    {
        enunciado: "O que é a inteligência artificial?",
        alternativas: ["Um tipo de hardware", "Um software que simula inteligência humana"
        ]
    },
    {
        enunciado: "O que é o ChatGPT?",
        alternativas: ["O ChatGPT é um modelo de linguagem desenvolvido pela OpenAI que utiliza inteligência artificial para gerar texto, responder perguntas e participar de conversas em linguagem natural."
        ]
    },
    {
        enunciado: "O ChatGPT tem sentimentos ou consciência?",
        alternativas: ["Não, o ChatGPT não possui sentimentos, consciência ou emoções. Ele gera respostas baseadas em padrões de linguagem, sem compreensão real ou experiências pessoais.",
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: ["Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro."
        ]
    },
    ];
    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    
    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();