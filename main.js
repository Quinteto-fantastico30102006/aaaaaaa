const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a linguagem de programação mais popular em 2024?",
        alternativas: ["JavaScript", "Python", "Java"],
    },
    {
    enunciado: "O que é a inteligência artificial?",
    alternativas: ["Um tipo de hardware", "Um software que simula inteligência humana", "Um sistema operacional", "Uma linguagem de programação"],
    },
    ];
