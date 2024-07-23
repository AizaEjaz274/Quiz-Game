
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const correctAnswers = {
            q1: 'b', // 2 + 2 = 4
            q2: 'a', // 5 x 3 = 15
            q3: 'b', // √16 = 4
            q4: 'b', // 9 ÷ 3 = 3
            q5: 'b'  // 7 - 2 = 5
        };

        const explanations = {
            q1: 'The correct answer is "b" (2 + 2 = 4).',
            q2: 'The correct answer is "a" (5 x 3 = 15).',
            q3: 'The correct answer is "b" (√16 = 4).',
            q4: 'The correct answer is "b" (9 ÷ 3 = 3).',
            q5: 'The correct answer is "b" (7 - 2 = 5).'
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

