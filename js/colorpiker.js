import colors from './colors.js';

console.log(colors)


const container = document.querySelector('.colorList');




const createColorItem = ({rgb, label}) => {
    return `<li class="colorItem"> <div class="btn"  data-color="${rgb}" style="background-color: ${rgb}"> ${label}
    </div> </li>`
};

const createColorListMarkup = colors.map(createColorItem).join('');

container.innerHTML = createColorListMarkup;

container.addEventListener('click', onClickBtn)

function onClickBtn(e) {
    if (!e.target.classList.contains( 'btn')) {  // проверка по имени класса
        return
    }
    removeCardActiveClass();

    // ищем ближайшего предка со имени класса - метод  closest('.имя класса')
    const parentCard = e.target.closest('.colorItem');
    addActiveClassParent(parentCard);
    createBodyColor(e.target.dataset.color);

    divText.style.color = e.target.dataset.color
 
}


// убирает активный класс
function removeCardActiveClass() {
     // поиск текущий активный класс - формула
const currentCardActive = document.querySelector('.colorList.is-active');
    //ищем через уточьнение, так как на проэкте может быть много is-active
if (currentCardActive) {
        currentCardActive.classList.remove('is-active')
    }
};


// добавляет активный клас
function addActiveClassParent(card) {
    card.classList.add('is-active')
}

// меняет цвет фона в зависимости от выбраного 
function createBodyColor(color) {
   document.body.style.backgroundColor = color
}

///////////////////////////////////////

const divText = document.querySelector('.add')

