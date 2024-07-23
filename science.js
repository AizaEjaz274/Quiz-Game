
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const correctAnswers = {
            q1: 'a', // H2O for water
            q2: 'b', // Mars is the Red Planet
            q3: 'a', // Speed of light is 300,000 km/s
            q4: 'b', // Plants absorb Carbon Dioxide
            q5: 'b'  // Mitochondria is the powerhouse of the cell
        };

        const explanations = {
            q1: 'H<sub>2</sub>O is the chemical symbol for water.',
            q2: 'Mars is known as the Red Planet.',
            q3: 'The speed of light is approximately 300,000 km/s.',
            q4: 'Plants absorb Carbon Dioxide from the atmosphere.',
            q5: 'Mitochondria are known as the powerhouse of the cell.'
        };

        let score = 0;
        let feedback = '';
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let question in correctAnswers) {
            const selectedOption = form.elements[question].value;
            if (selectedOption === correctAnswers[question]) {
                score++;
            } else {
                feedback += `<p>Question ${question.slice(1)}: ${explanations[question]}</p>`;
            }
        }

        resultElement.innerHTML = `<p>You got ${score} out of ${totalQuestions} correct.</p>` + feedback;
    });
});

