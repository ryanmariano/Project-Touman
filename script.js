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
    },

    {
        question: "Quem é o vice-capitão da primeira divisão e braço direito do Baji?",
        options: ["Pah-chin", "Chifuyu Matsuno", "Mitsuya", "Smiley"],
        answer: 1
    },

    {
        question: "Qual é o objeto que o Draken tem tatuado na têmpora?",
        options: ["Um Tigre", "Uma Serpente", "Um Dragão", "Uma Fênix"],
        answer: 2
    },

    {
        question: "Qual o nome da técnica/chute invencível do Mikey?",
        options: ["Chute Atômico", "Chute Nuclear", "Chute Relâmpago", "Chute Giratório"],
        answer: 1
    },
    
    {
        question: "Qual é o lema da Tokyo Manji (Touman)?",
        options: [
            "Um por todos e todos por um", 
            "Força acima de tudo", 
            "O futuro é nosso", 
            "Justiça e Honra"
        ],
        answer: 0
    }
];

function startQuiz() { // Função que inicia o quiz quando o botão é clicado
    document.getElementById("startButton").style.display ="none"; // Esconde o botão de início
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
    const  quizContainer = document.getElementById("quiz");
    
    // Coloca o texto da pergunta na tela
    quizContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`

    // Atualiza o texto dos botões com as opções da pergunta atual
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`button_${i + 1}`);
        btn.innerText =  currentQuestion.options[i];

        // Adiciona a função de clique para verificar a resposta
        btn.onclick = () => CheckAnswer(i);
    }
}

function CheckAnswer(selectIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if(selectIndex === currentQuestion.answer) {
        score++;
        alert("Acertou! A Touman se orgulha.");//muda esse texto depois 
    } else {
        alert ("Errou... O futuro mudou para pior.");
    }

    //Passa pra próxima pergunta
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const quizContainer = document.getElementById("quiz");
    const optionsContainer = document.getElementById("options");

    //Esconde os botões de resposta
    optionsContainer.style.display = "none";

    //Mostra o resultado final
    quizContainer.innerHTML =`
    <h2>Fim da Jornada!</h2>
    <p>Você acertou ${score} de ${questions.length}perguntas.</p>
    <button onclick="location.reload()">Tentar Novamente</button>
    `;
}

document.getElementById("startButton").addEventListener("click", startQuiz);