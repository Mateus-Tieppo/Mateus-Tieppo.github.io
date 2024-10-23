const track = document.querySelector('.project-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    track.style.transform = `translateX(-${currentIndex * 320}px)`; // 320px é a largura + margem do item
});

nextBtn.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.project-item').length;
    const visibleItems = Math.floor(track.clientWidth / 320); // Número de itens visíveis no carrossel
    currentIndex = Math.min(currentIndex + 1, totalItems - visibleItems);
    track.style.transform = `translateX(-${currentIndex * 320}px)`;
});

document.querySelector('.scroll-down-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    document.querySelector('#next-section').scrollIntoView({
        behavior: 'smooth' // Rolagem suave
    });
});


