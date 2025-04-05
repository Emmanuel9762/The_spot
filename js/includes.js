// Load HTML partials
document.addEventListener('DOMContentLoaded', () => {
    const includes = document.querySelectorAll('[data-include]');
    
    includes.forEach(element => {
        const file = element.dataset.include;
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            });
    });
});