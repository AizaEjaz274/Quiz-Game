
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const correctAnswers = {
            q1: 'a',
            q2: 'a',
            q3: 'a',
            q4: 'a',
            q5: 'a'
        };

        const explanations = {
            q1: 'The correct answer is Jane Austen.',
            q2: 'The correct answer is Jane Austen.',
            q3: 'The correct answer is Jane Austen.',
            q4: 'The correct answer is Jane Austen.',
            q5: 'The correct answer is Jane Austen.'
        };

        let score = 0;
        let feedback = '';
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let question in correctAnswers) {
            const selectedOption = form.elements[question].value;
            if (selectedOption === correctAnswers[question]) {
                score++;
            } else {
                // Add feedback for incorrect answer
                feedback += `<p>Question ${question.slice(1)}: ${explanations[question]}</p>`;
            }
        }

        resultElement.innerHTML = `<p>You got ${score} out of ${totalQuestions} correct.</p>` + feedback;
    });
});

