let input = document.querySelector('.search');

function filterCards() {
    let cards = document.querySelectorAll('.cafe_card-col');
    let val = this.value.trim().toLowerCase();
    if (val != '') {
        cards.forEach(element => {
            if (element.querySelector('h2').textContent.trim().toLowerCase().search(val) == -1 && 
            element.querySelector('.price').textContent.trim().toLowerCase().search(val) == -1) {
                element.style.display = 'none'
            }
            else element.style.display = ''
        });
    }

    else {
        cards.forEach(element => element.style.display = '')
    }
}



input.addEventListener('input', filterCards)