document.getElementById("startButton") .addEventListener("click", () => {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("intro").style.display = "none";

    document.getElementById("quiz").innerHTML = `<h2>${questions[0].question}</h2>`
    
} )

const questions = [
    {
        question: "Qual é o nome do protagonista de Tokyo Revengers?",
        answers: [
            { text:"Takemichi Hanagaki", correct: true},
            { text: "Mikey", correct: false},
            { text: "Draken", correct: false},
            { text: "Kazutora", correct: false}
        ]
    }
]