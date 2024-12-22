const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const answerInput = document.getElementById('answer');
const result = document.getElementById('result');
const confettiContainer = document.getElementById('confetti');
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

checkBtn.addEventListener('click', () => {
    const correctAnswer = "power girls"; // Replace with the actual answer
    const userAnswer = answerInput.value.toLowerCase(); 

    if (userAnswer === correctAnswer.toLowerCase()) {
        result.textContent = "Correct!";
        nextBtn.disabled = false;

        // Play correct sound
        correctSound.play(); 

        // Trigger confetti effect
        confettiContainer.style.display = 'block';
        const myConfetti = confetti({
            particleCount: 100, 
            spread: 70,
            origin: { y: 0.6 } 
        });
        myConfetti(); 


    } else {
        // Play incorrect sound
        incorrectSound.play(); 

        result.textContent = "Incorrect. Try again!";
        confettiContainer.style.display = 'none'; // Hide confetti if incorrect

        
    }
});