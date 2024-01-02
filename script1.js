document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    let gunaScores = { sattva: 0, rajas: 0, tamas: 0 };
    document.querySelectorAll('.question').forEach(function(question) {
        var guna = question.getAttribute('data-guna');
        var selectedValue = question.querySelector('input[type="radio"]:checked');
        if (selectedValue) {
            gunaScores[guna] += parseInt(selectedValue.value);
        }
    });

    let dominantGuna = Object.keys(gunaScores).reduce((a, b) => gunaScores[a] > gunaScores[b] ? a : b);

    // Now redirect to the results page with the dominant guna as a URL parameter
    window.location.href = 'results.html?guna=' + dominantGuna;
});
