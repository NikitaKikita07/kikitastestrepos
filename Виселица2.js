const alphabetContainer = document.getElementById("alphabetContainer");//переменная указатель на блок с будущими буквами в html
const wordcont = document.querySelector(".word");//то же что и сверху только для слова, которое загадали
const body = document.querySelectorAll('[data-game]')//Тут массив с чудиком
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";//строка букв
const words = new Map();//создание пустого словаря
let mapfruit = ['ЯБЛОКО', 'ГРУША', 'КИВИ', 'БАНАН', 'АНАНАС', 'АПЕЛЬСИН', 'МАНДАРИН','ГРЕЙПФРУТ', 'ПОМЕЛО', 'ПЕРСИК', 'АБРИКОС', 'КОКОС', 'ДРАГОНФРУТ', 'ЛАЙМ'];
let mapanimal = ["ПУТИН", 'ЖИРАФ', 'СЛОН', 'КОКОС', 'МЫШЬ', 'ЗАЯЦ','БОБЕР', 'КОТ', 'СОБАКА', 'ЯК', 'БУЙВОЛ', 'ТИГР', 'ПАНДА'];
// массив слов для загадывания
words.set('ФРУКТЫ', mapfruit).set('ЖИВОТНЫЕ', mapanimal);//засовывание слов в словарь
const wordshelp = ["ФРУКТЫ", "ЖИВОТНЫЕ"]//Массив для выбора темы

// for (let i = 0; i < alphabet.length; i++) {
//   const cell = document.createElement("div");
//   cell.className = "cell";
//   cell.textContent = alphabet[i];
//   alphabetContainer.appendChild(cell);
// }
createcells('cell', '', alphabet, alphabetContainer)

let randtag = Math.floor(Math.random() * words.size)//рандомайзер number
let arraywords = words.get(wordshelp[randtag])
console.log(wordshelp[randtag]  )
let randtagarray = Math.floor(Math.random() * arraywords.length)
console.log(randtagarray)
console.log(arraywords[randtagarray])
let word = arraywords[randtagarray];

// for (let i = 0; i < word.length; i++) {
//     const cell = document.createElement("div");
//     cell.className = "letter";
//     cell.classList.add('hide');
//     cell.textContent = word[i];
//     wordcont.appendChild(cell);
// }
createcells('letter', 'hide', word, wordcont)




const cells = document.querySelectorAll('.cell')
let letters = document.querySelectorAll('.letter')

let counter = 0
let mis = -1
cells.forEach((lett)=>{
    lett.addEventListener('click',function(){
        counter = 0
        let value = lett.innerHTML
        if(word.includes(value)){
            lett.classList.add('green')
            for(let i of letters){
                if(i.innerHTML == lett.innerHTML){
                    i.classList.remove('hide')
                }
            }
            letters.forEach((letter)=>{
                if (!letter.classList.contains('hide')){
                    counter++
                    if (counter == word.length){
                        console.log("В случае победы нажми 'F5'")
                        startnewgame()
                    }
                }

            })
        }
        else{
            lett.classList.add('red')
            mis++
            if(mis >= body.length){
                console.log('lose')
                endgame()
            }
            else{
                body[mis].classList.remove('hide')
            }
            if (mis>2) {
                console.log('тут подсказка')
            }
        }
    })
})
console.log(arraywords)
function startnewgame (){
    wordcont.innerHTML = ""
    deleteword()
    clearcolors()
    randtag = Math.floor(Math.random() * words.size)//рандомайзер number
    arraywords = words.get(wordshelp[randtag])
    randtagarray = Math.floor(Math.random() * arraywords.length)
    word = arraywords[randtagarray];
    createcells('letter', 'hide', word, wordcont)
    letters = document.querySelectorAll('.letter')
}
function deleteword(){
    if (arraywords.includes(word)){
        arraywords.splice(arraywords.indexOf(word), 1);
        console.log(words)
    }
}
function clearcolors(){
    cells.forEach((cell)=>{
        cell.classList.remove('green')
        cell.classList.remove('red')
    })
}
function endgame(){
    setTimeout(()=>{location.reload()},1000)
}
function createcells(firstclass, secondclass, pickarray, container){
        for (let i = 0; i < pickarray.length; i++) {

            const cellmain = document.createElement("div");
            cellmain.className = 'maincell';
            container.appendChild(cellmain);
            const cell = document.createElement("div");
            cell.className = secondclass ;
            cell.classList.add(firstclass);
            cell.textContent = pickarray[i];
            cellmain.appendChild(cell);
        }
    }

//svdsfdsfds//

