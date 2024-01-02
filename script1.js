let currentGroup = 1;
const totalGroups = 3;

function showNextGroup() {
    let current = document.getElementById('group-' + currentGroup);
    current.style.display = 'none';
    
    currentGroup++;
    let next = document.getElementById('group-' + currentGroup);
    next.style.display = 'block';
    
    // Handle buttons visibility
    document.getElementById('prevButton').style.display = 'block';
    if (currentGroup === totalGroups) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'block';
    }
}

function showPrevGroup() {
    let current = document.getElementById('group-' + currentGroup);
    current.style.display = 'none';
    
    currentGroup--;
    let prev = document.getElementById('group-' + currentGroup);
    prev.style.display = 'block';
    
    // Handle buttons visibility
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('submitButton').style.display = 'none';
    if (currentGroup === 1) {
        document.getElementById('prevButton').style.display = 'none';
    }
}


    document.getElementById('submitButton').addEventListener('click', function(event) {
        event.preventDefault();
    
        let gunaScores = { sattva: 0, rajas: 0, tamas: 0 };
        document.querySelectorAll('.question').forEach(function(question) {
            var guna = question.getAttribute('data-guna');
            var selectedValue = question.querySelector('input[type="radio"]:checked');
            if (selectedValue) {
                gunaScores[guna] += parseInt(selectedValue.value);
            }
        });

        //    //Display the result to the user
        // alert('Guna Scores are as following: ' + dominantGuna.toUpperCase() + 
        //     '\nSattva Score: ' + gunaScores.sattva + 
        //     '\nRajas Score: ' + gunaScores.rajas + 
        //     '\nTamas Score: ' + gunaScores.tamas);
    
        let dominantGuna = Object.keys(gunaScores).reduce((a, b) => gunaScores[a] > gunaScores[b] ? a : b);
    
        // Now redirect to the results page with the dominant guna as a URL parameter
        window.location.href = 'results.html?guna=' + dominantGuna;
    });

