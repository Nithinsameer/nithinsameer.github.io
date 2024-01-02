document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    let gunaScores = { sattva: 0, rajas: 0, tamas: 0 };

    document.querySelectorAll('.question').forEach(function(question) {
        var guna = question.getAttribute('data-guna');
        var selectedValue = question.querySelector('input[type="radio"]:checked');

        if (selectedValue) {
            gunaScores[guna] += parseInt(selectedValue.value);
        }
    });

    function findSecondHighestScore(gunaScores) {      
        let highestScoreKey = null;
        let secondHighestScoreKey = null;
      
        Object.keys(gunaScores).reduce((acc, key) => {
          const score = gunaScores[key];
      
          if (score > gunaScores[highestScoreKey]) {
            secondHighestScoreKey = highestScoreKey;
            highestScoreKey = key;
          } else if (!secondHighestScoreKey || score > gunaScores[secondHighestScoreKey]) {
            secondHighestScoreKey = key;
          }
      
          return acc;
        }, null);
      
        return secondHighestScoreKey;
      }

    let dominantGuna = Object.keys(gunaScores).reduce((a, b) => gunaScores[a] > gunaScores[b] ? a : b);
    let seconddominantGuna = findSecondHighestScore(gunaScores)

    //Display the result to the user
    alert('Your dominant guna is: ' + dominantGuna.toUpperCase() + 
         '\nSattva Score: ' + gunaScores.sattva + 
         '\nRajas Score: ' + gunaScores.rajas + 
         '\nTamas Score: ' + gunaScores.tamas);

    // Add descriptions or additional information here
    let descriptions = {
        sattva: "Description of Sattva: Sattva is characterized by balance, harmony, and purity. People dominant in Sattva are often calm, altruistic, and possess a strong sense of empathy and mindfulness.",
        rajas: "Description of Rajas: Rajas is marked by passion, activity, and motion. Rajas dominant individuals tend to be energetic, ambitious, and driven, but can also be overly attached to outcomes and prone to stress.",
        tamas: "Description of Tamas: Tamas involves inertia, darkness, and confusion. Those with a Tamas dominant nature may exhibit traits such as lethargy, ignorance, and a tendency towards chaos and disorder."
    };

    // Include in the alert or display on the webpage
    alert('Your dominant guna is: ' + dominantGuna.toUpperCase() +
    '\nDescription: ' + descriptions[dominantGuna] +
    '\nSecond Most Dominant Guna is: ' + seconddominantGuna.toUpperCase());
});

