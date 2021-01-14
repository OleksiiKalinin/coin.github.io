document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button'),
          coin = document.querySelector('.coin'),
          points = document.querySelector('.coin__front span');

    let randNum = Math.floor(Math.random() * (200 - 150 + 1) + 150);

    points.textContent = randNum;
    
    button.addEventListener('click', () => {
        coin.classList.toggle('coin__active');
        console.log('start');
        points.textContent = '';
        button.disabled = true;
        setTimeout(() => {
            randNum -= (Math.floor(Math.random() * 10) + 1);
            points.textContent = randNum;
        }, 1000);
        setTimeout(() => {
            coin.classList.toggle('coin__active');
            button.disabled = false;
            console.log('stop');
        }, 1900);
    });
});