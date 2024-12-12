document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        "How would you rate your overall mood lately?",
        "How well do you cope with stress?",
        "Can you recall a recent situation where you felt particularly resilient?",
        "On a scale of 1 to 10, how would you rate your self-esteem?",
        "Do you feel a sense of purpose or meaning in your life?",
        "How well do you handle challenges or setbacks?",
        "How often do you have trouble concentrating or making decisions?",
        "How often do you engage in activities that you find fulfilling?",
        "How would you describe the quality of your relationships with family and friends?",
        "Do you feel supported by the people in your life?",
        "How often do you participate in social activities?",
        "Do you ever feel lonely or isolated?"
    ];

    const questionsDiv = document.getElementById("questions");
    const submitBtn = document.getElementById("submitBtn");
    const resultsDiv = document.getElementById("results");

    // Dynamically generate HTML for questions
    questions.forEach((question, index) => {
        const inputHTML = `<label>${question}</label><br><input type="number" min="1" max="10" id="q${index}"><br>`;
        questionsDiv.innerHTML += inputHTML;
    });

    // Calculate scores and display results
    submitBtn.addEventListener("click", function() {
        let totalScores = 0;
        for (let i = 0; i < questions.length; i++) {
            const score = parseInt(document.getElementById(`q${i}`).value);
            if (isNaN(score) || score < 1 || score > 10) {
                alert("Please enter a valid number between 1 and 10 for all questions.");
                return;
            }
            totalScores += score;
        }

        const averageScore = totalScores / questions.length;
        let interpretation = "";
        if (averageScore >= 7) {
            interpretation = "You seem to have good overall mental health.";
        } else if (averageScore < 4) {
            interpretation = "You may be experiencing challenges with your mental health. Consider seeking support.";
        } else {
            interpretation = "Your mental health is within the moderate range. It's important to monitor and address any concerns.";
        }

        resultsDiv.innerHTML = `<p>Results:</p><p>Average Score: ${averageScore.toFixed(2)}</p><p>${interpretation}</p>`;
    });
});
