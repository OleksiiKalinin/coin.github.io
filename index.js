document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button'),
          coin = document.querySelector('.coin'),
          points = document.querySelector('.coin__front span');

    let randNum = Math.floor(Math.random() * (200 - 150 +1) + 150);

    points.textContent = randNum;
    
    button.addEventListener('click', () => {
        coin.classList.toggle('coin__active');
        points.textContent = '';
        button.disabled = true;
        setTimeout(() => {
            randNum -= (Math.floor(Math.random() * 10) + 1);
            points.textContent = randNum;
        }, 400);
        setTimeout(() => {
            coin.classList.toggle('coin__active');
            button.disabled = false;
        }, 950);
    });
});