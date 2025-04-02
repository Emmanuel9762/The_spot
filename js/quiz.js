const drinkDatabase = {
    adventurous: ['Smoked Chilli Margarita', 'Liquid Nitrogen Daiquiri'],
    classy: ['24K Gold Martini', 'Vintage Manhattan']
};

document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const recommendation = drinkDatabase[btn.dataset.mood][
            Math.floor(Math.random() * drinkDatabase[btn.dataset.mood].length)
        ];
        document.querySelector('.result-card').innerHTML = `
            <h5>${recommendation}</h5>
            <p>${btn.dataset.mood} choice unlocked!</p>
        `;
        document.getElementById('drink-result').classList.remove('hidden');
    });
});