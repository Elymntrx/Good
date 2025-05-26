document.addEventListener('DOMContentLoaded', () => {
    const openQuizBtn = document.getElementById('openQuizBtn');
    const quizModal = document.getElementById('quizModal');
    const closeButton = document.querySelector('.close-button');
    const quizContainer = document.getElementById('quizContainer');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const quizResult = document.getElementById('quizResult');

    // Define your quiz questions and answers
    const quizQuestions = [
        {
            question: "What is the primary human activity contributing to climate change?",
            options: ["Volcanic eruptions", "Burning fossil fuels", "Deforestation for agriculture", "Solar flares"],
            answer: "Burning fossil fuels"
        },
        {
            question: "Which of these is a greenhouse gas?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the term for the long-term increase in Earth's average surface temperature?",
            options: ["Global Warming", "Ice Age", "El Niño", "Monsoon"],
            answer: "Global Warming"
        },
        {
            question: "What is a significant consequence of melting glaciers and ice sheets?",
            options: ["Increased fresh water supply", "Rising sea levels", "Decreased ocean acidity", "More frequent earthquakes"],
            answer: "Rising sea levels"
        },
        {
            question: "Which international agreement aims to limit global warming?",
            options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Geneva Convention"],
            answer: "Paris Agreement"
        }
    ];

    // Function to load questions into the quiz container
    function loadQuiz() {
        quizContainer.innerHTML = ''; // Clear previous questions
        quizQuestions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <div class="options">
                    ${q.options.map(option => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            quizContainer.appendChild(questionBlock);
        });
        quizResult.style.display = 'none'; // Hide result section on quiz load
        submitQuizBtn.style.display = 'block'; // Show submit button
    }

    // Event listener for opening the quiz
    openQuizBtn.addEventListener('click', () => {
        quizModal.style.display = 'flex'; // Use flex to center the modal content
        loadQuiz(); // Load questions every time the quiz is opened
    });

    // Event listener for closing the quiz (X button)
    closeButton.addEventListener('click', () => {
        quizModal.style.display = 'none';
    });

    // Event listener for closing the quiz when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == quizModal) {
            quizModal.style.display = 'none';
        }
    });

    // Event listener for submitting the quiz
    submitQuizBtn.addEventListener('click', () => {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });

        quizResult.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
        quizResult.style.display = 'block';
        submitQuizBtn.style.display = 'none'; // Hide submit button after submission
    });
});