let currentQuestionIndex = 0; // Controla qual pergunta está sendo exibida
let score = 0; // Armazena a pontuação do jogador (quantas acertou)

const questions = [ // Array com todas as perguntas, opções e respostas corretas
    {
        question: "Qual é o nome da gangue liderada por Mikey?",
        options: ["Valhalla", "Moebius", "Toman", "Tenjiku"],
        answer: 2
    },

    {
        question: "Qual é o nome completo do protagonista?",
        options: ["Takemichi Hanagaki", "Mikey Sano", "Draken", "Chifuyu Matsuno"],
        answer: 0
    }
];

function startQuiz() { // Função que inicia o quiz quando o botão é clicado
    document.getElementById("startbutton").style.display ="none"; // Esconde o botão de início
    document.getElementById("intro").style.display = "none"; // Esconde a introdução/texto inicial
    document.getElementById("options").style.display = "flex"; // Mostra os botões de opção de resposta
    document.getElementById("quiz").style.display = "block"; // Mostra a área onde as perguntas aparecerão

    // Isso garante que cada novo jogo comece do zero
    currentQuestionIndex = 0; // Volta para a primeira pergunta
    score = 0; // Zera a pontuação

    showQuestion(); // Chama a função que mostra a primeira pergunta
}

function showQuestion() {
    //verifica se ainda tem perguntas
    if (currentQuestionIndex>= questions.length) {
        showResults();
        return;
    }

    // Pega a pergunta atual
    const currentQuestion = questions[currentQuestionIndex];

    // Atualiza o quiz container com a pergunta
    const quizContainer = document.getElementById("quiz");

      // Atualiza o conteúdo do quiz
      quizContainer.innerHTML 
}

document.getElementById("startbutton").addEventListener("click, startQuiz");