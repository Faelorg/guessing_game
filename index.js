let types = document.querySelectorAll('#type')
let lvls = document.querySelectorAll('#lvl')
let cards

let btnStart = document.querySelector('#btnStart')
let gameArea = document.querySelector('.game__area')

const wordsRus = [
  'Бабочка',
  'Апельсин',
  'Карандаш',
  'Жук',
  'Виноград',
  'Ножницы',
  'Львёнок',
  'Мяч',
  'Зонтик',
  'Утка',
  'Сыр',
  'Яблоко',
  'Одежда',
  'Мышка',
  'Сыр',
  'Цветок',
  'Очки',
  'Хлеб',
  'Флаг',
  'Чайник',
  'Птица',
  'Щётка',
  'Столб',
  'Кот',
  'Петух',
  'Кефир',
  'Лопатка',
  'Кубик',
  'Абрикос',
  'Ботинок',
  'Енот',
  'Звонок',
  'Ель',
  'Лимон',
  'Молоток',
  'Филин',
  'Трубач',
  'Цыплёнок',
  'Яхта',
  'Звонок',
  'Пень',
  'Огурец',
  'Тыква',
  'Изюм',
  'Снеговик',
  'Тигр',
  'Щавель',
  'Болт',
  'Урок',
  'Стакан',
  'Насос',
  'Мел',
  'Репка',
  'Смычок',
  'Пингвин',
  'Жонглёр',
  'Ножовка',
  'Арахис',
  'Месяц',
  'Картон',
  'Балет',
  'Колокол',
  'Долото',
  'Знак',
  'Карапуз',
  'Стручок',
  'Костюм',
  'Ролик',
  'Погон',
  'Ромб',
  'Светильник',
  'Выключатель',
  'Фломастер',
  'Виолончель',
  'Разрез',
  'Волос',
  'Полоса',
  'Долька',
  'Юг',
  'Площадь',
  'Финик',
  'Мелодия',
  'Пакет',
  'Почта',
  'Канат',
  'Магнит',
  'Нектар',
  'Шуруповёрт',
  'Йога',
  'Градус',
  'Рукоятка',
  'Аттракцион',
  'Скейтборд',
  'Монополия',
  'Репертуар',
  'Рычаг',
  'Сенсор',
  'Тик',
  'Погрузчик',
  'Саморез',
  'Камера',
]

const wordsEn = [
  'Boat',
  'Chocolate',
  'Foot',
  'Money',
  'Name',
  'Seed',
  'Table',
  'Bell',
  'Chicken',
  'Eye',
  'Head',
  'Letter',
  'Robin',
  'Street',
  'Window',
  'Ball',
  'Cake',
  'Doll',
  'Goodbye',
  'Horse',
  'Pig',
  'Song',
  'Watch',
  'Baby',
  'Bread',
  'Day',
  'Garden',
  'Hill',
  'Party',
  'Smile',
  'Toy',
  'Bear',
  'Cat',
  'Duck',
  'Ground',
  'Kitty',
  'Rain',
  'Star',
  'Way',
  'Bath',
  'Car',
  'Door',
  'Grass',
  'House',
  'Rabbit',
  'Squirrel',
  'Water',
  'Book',
  'Coat',
  'Fire',
  'Flower',
  'Nest',
  'Sheep',
  'Thing',
  'Birth',
  'Christmas',
  'Father',
  'Milk',
  'Mother',
  'School',
  'Sun',
  'Box',
  'Corn',
  'Fish',
  'Friend',
  'Night',
  'Shoe',
  'Time',
  'Bed',
  'Chair',
  'Egg',
  'Hand',
  'Leg',
  'Ring',
  'Stick',
  'Wind',
  'Apple',
  'Boy',
  'Cow',
  'Floor',
  'Game',
  'Paper',
  'Sister',
  'Top',
  'Back',
  'Brother',
  'Dog',
  'Girl',
  'Home',
  'Picture',
  'Snow',
  'Tree',
  'Bird',
  'Child',
  'Farm',
  'Man',
  'Morning',
  'Story',
  'Wood',
]

const colors = [
  'IndianRed',
  'LightCoral',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',
  'Pink',
  'LightPink',
  'HotPink',
  'DeepPink',
  'MediumVioletRed',
  'PaleVioletRed',
  'LightSalmon',
  'Coral',
  'Tomato',
  'OrangeRed',
  'DarkOrange',
  'Orange',
  'Gold',
  'Yellow',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenrodYellow',
  'PapayaWhip',
  'Moccasin',
  'PeachPuff',
  'PaleGoldenrod',
  'Khaki',
  'DarkKhaki',
  'Lavender',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'Fuchsia',
  'Magenta',
  'MediumOrchid',
  'MediumPurple',
  'BlueViolet',
  'DarkViolet',
  'DarkOrchid',
  'DarkMagenta',
  'Purple',
  'Indigo',
  'SlateBlue',
  'DarkSlateBlue',
  'GreenYellow',
  'Chartreuse',
  'LawnGreen',
  'Lime',
  'LimeGreen',
  'PaleGreen',
  'LightGreen',
  'MediumSpringGreen',
  'SpringGreen',
  'MediumSeaGreen',
  'SeaGreen',
  'ForestGreen',
  'Green',
  'DarkGreen',
  'YellowGreen',
  'OliveDrab',
  'Olive',
  'DarkOliveGreen',
  'MediumAquamarine',
  'DarkSeaGreen',
  'LightSeaGreen',
  'DarkCyan',
  'Teal',
  'Aqua',
  'Cyan',
  'LightCyan',
  'PaleTurquoise',
  'Aquamarine',
  'Turquoise',
  'MediumTurquoise',
  'DarkTurquoise',
  'CadetBlue',
  'SteelBlue',
  'LightSteelBlue',
  'PowderBlue',
  'SkyBlue',
  'LightSkyBlue',
  'DeepSkyBlue',
  'DodgerBlue',
  'CornflowerBlue',
  'MediumSlateBlue',
  'RoyalBlue',
  'Blue',
  'MediumBlue',
  'DarkBlue',
  'Navy',
  'MidnightBlue',
]

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
]

let lvl

let clr, wordRu, wordEn, number

btnStart.onclick = () => {
  gameArea.replaceChildren()
  setting()
  if (clr) {
    generation(lvl, 'Colors')
  }

  if (number) {
    generation(lvl, 'numbers')
  }

  if (wordEn) {
    generation(lvl, 'wordsEn')
  }

  if (wordRu) {
    generation(lvl, 'wordsRu')
  }
  all = lvl
}

const setting = () => {
  lvl = 20
  for (let i = 0; i < lvls.length; i++) {
    if (lvls[i].checked) {
      lvl = lvl * (1 + i)
      break
    }
  }

  clr = false
  wordRu = false
  wordEn = false
  number = false

  for (let i = 0; i < types.length; i++) {
    if (types[i].checked) {
      switch (i) {
        case 0:
          number = true
          break
        case 1:
          wordRu = true
          break
        case 2:
          wordEn = true
          break
        case 3:
          clr = true
          break
      }
    }
  }
}
let all

console.log(lvl)
const generation = (lv, type) => {
  let newArray
  let newArray2
  switch (type) {
    case 'numbers':
      newArray = numbers.concat()
      const count = newArray.length - lv + lv / 2
      for (let i = 0; i < count; i++) {
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)
      }

      console.log(newArray)
      newArray2 = newArray.concat()

      for (let i = 0; i < lv / 2; i++) {
        let card = document.createElement('div')
        let cardMask = document.createElement('div')
        cardMask.className = 'card'
        let cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'
        cardMask.addEventListener('click', e => logic(e))

        let x = Math.floor(Math.random() * newArray.length)
        cardDesc.appendChild(document.createTextNode(newArray[x]))
        newArray.splice(x, 1)
        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)

        cardDesc = null

        card = document.createElement('div')
        cardMask = document.createElement('div')
        cardMask.className = 'card'
        cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'

        x = Math.floor(Math.random() * newArray2.length)
        cardDesc.appendChild(document.createTextNode(newArray2[x]))
        cardMask.addEventListener('click', e => logic(e))
        newArray2.splice(x, 1)

        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)
      }
      break

    case 'wordsRu':
      newArray = wordsRus.concat()
      const count2 = newArray.length - lv + lv / 2
      for (let i = 0; i < count2; i++) {
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)
      }

      console.log(newArray)
      newArray2 = newArray.concat()

      for (let i = 0; i < lv / 2; i++) {
        let card = document.createElement('div')
        let cardMask = document.createElement('div')
        cardMask.className = 'card'
        let cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'
        cardMask.addEventListener('click', e => logic(e))

        let x = Math.floor(Math.random() * newArray.length)
        cardDesc.appendChild(document.createTextNode(newArray[x]))
        newArray.splice(x, 1)
        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)

        cardDesc = null

        card = document.createElement('div')
        cardMask = document.createElement('div')
        cardMask.className = 'card'
        cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'

        x = Math.floor(Math.random() * newArray2.length)
        cardDesc.appendChild(document.createTextNode(newArray2[x]))
        cardMask.addEventListener('click', e => logic(e))
        newArray2.splice(x, 1)

        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)
      }
      break

    case 'wordsEn':
      newArray = wordsEn.concat()
      const count3 = newArray.length - lv + lv / 2
      for (let i = 0; i < count3; i++) {
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)
      }

      console.log(newArray)
      newArray2 = newArray.concat()

      for (let i = 0; i < lv / 2; i++) {
        let card = document.createElement('div')
        let cardMask = document.createElement('div')
        cardMask.className = 'card'
        let cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'
        cardMask.addEventListener('click', e => logic(e))

        let x = Math.floor(Math.random() * newArray.length)
        cardDesc.appendChild(document.createTextNode(newArray[x]))
        newArray.splice(x, 1)
        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)

        cardDesc = null

        card = document.createElement('div')
        cardMask = document.createElement('div')
        cardMask.className = 'card'
        cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'

        x = Math.floor(Math.random() * newArray2.length)
        cardDesc.appendChild(document.createTextNode(newArray2[x]))
        cardMask.addEventListener('click', e => logic(e))
        newArray2.splice(x, 1)

        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)
      }
      break

    case 'Colors':
      newArray = colors.concat()
      const count4 = newArray.length - lv + lv / 2
      for (let i = 0; i < count4; i++) {
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)
      }

      console.log(newArray)
      newArray2 = newArray.concat()

      for (let i = 0; i < lv / 2; i++) {
        let card = document.createElement('div')
        let cardMask = document.createElement('div')
        cardMask.className = 'card'
        let cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'
        cardDesc.style.color = 'rgba(84, 83, 82, 0)'
        cardMask.addEventListener('click', e => logic(e))

        let x = Math.floor(Math.random() * newArray.length)
        cardDesc.style.backgroundColor = newArray[x] + ''
        cardDesc.appendChild(document.createTextNode(newArray[x]))
        newArray.splice(x, 1)
        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)

        cardDesc = null

        card = document.createElement('div')
        cardMask = document.createElement('div')
        cardMask.className = 'card'
        cardDesc = document.createElement('div')
        cardDesc.style.display = 'none'

        x = Math.floor(Math.random() * newArray2.length)
        cardDesc.style.backgroundColor = newArray2[x] + ''
        cardDesc.style.color = 'rgba(84, 83, 82, 0)'
        cardDesc.appendChild(document.createTextNode(newArray2[x]))
        cardMask.addEventListener('click', e => logic(e))
        newArray2.splice(x, 1)

        cardMask.appendChild(cardDesc)
        card.appendChild(cardMask)
        gameArea.appendChild(card)
      }
      break
  }
}

let s1, s2
let p1, p2
let par = null
let start = false
const logic = parent => {
  if (s1 != null) {
    s2 = parent.target.firstChild.textContent
    p2 = parent.target
    parent.target.firstChild.style.display = 'flex'
  }
  if (s1 == null) {
    s1 = parent.target.firstChild.textContent
    p1 = parent.target
    parent.target.firstChild.style.display = 'flex'
    start = true
  } else {
  }

  if (s1 == s2 && start && p1 != p2) {
    s1 = null
    s2 = null
    p1.style.display = 'none'
    p2.style.display = 'none'
    start = false
    all -= 2
    console.log(all)
  }
  if (s1 != null && s2 != null && s1 != s2) {
    p1.firstChild.style.display = 'none'
    p2.firstChild.style.display = 'none'
    p1 = null
    p2 = null
    s1 = null
    s2 = null
    start = false
  }
  if (all == 0) {
    document.querySelector('.game__area').replaceChildren()
    alert('Ты победил!')
  }
}
