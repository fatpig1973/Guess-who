console.log('Guess Who?')

function toggleEliminated(img) {
    img.classList.toggle("eliminated");
 }
//  classList.toggle toggles the class 'eliminate' on the 'img' element

// let allNames = document.querySelectorAll('span')
// for (let i = 0; i < allNames.length; i++) {
//     console.log(allNames[i].innerHTML)
// }

// let allImages = document.querySelectorAll('src')
// for (let i = 0; i < allImages.length; i++) {
//     console.log(allImages[i].innerHTML)
// }


cards = [
    {
        name:'Sakura',
        image: 'characters_01.jpg'
    },
    {
        name: 'Kaede',
        image: 'characters_02.jpg'
    },
    {
        name: 'Aya',
        image: 'characters_03.jpg'
    },
    {
        name: 'Yuuki',
        image: 'characters_04.jpg'
    },
    {
        name: 'Mikoto',
        image: 'characters_05.jpg'
    },
    {
        name: 'Ren',
        image: 'characters_06.jpg'
    },
    {
        name: 'Ryo',
        image: 'characters_07.jpg'
    },
    {
        name: 'Yori',
        image: 'characters_08.jpg'
    },
    {
        name: 'Hana',
        image: 'characters_09.jpg'
    },
    {
        name: 'Tatsuya',
        image: 'characters_10.jpg'
    },
    {
        name: 'Taro',
        image: 'characters_11.jpg'
    },
    {
        name: 'Mai',
        image: 'characters_12.jpg'
    },
    {
        name: 'Emiko',
        image: 'characters_13.jpg'
    },
    {
        name: 'Ayumi',
        image: 'characters_14.jpg'
    },
    {
        name: 'Hotaru',
        image: 'characters_15.jpg'
    },
    {
        name: 'Haru',
        image: 'characters_16.jpg'
    },
    {
        name: 'Kazuya',
        image: 'characters_17.jpg'
    },
    {
        name: 'Akira',
        image: 'characters_18.jpg'
    },
    {
        name: 'Saki',
        image: 'characters_19.jpg'
    },
    {
        name: 'Kazuo',
        image: 'characters_20.jpg'
    }
]

// function selectRandomCard() {
//     let randomIndex = Math.floor(Math.random() * 20)
//     let randomCard = cards[randomIndex]
//     let mysteryImg = document.querySelector('.mystery')
//     let imagePath = 'images/charachters_01.jpg' 
//     mysteryImg.src = imagePath 
//     let mysteryName = document.querySelector('.mystery-card span')
//     mysteryName.textContent = randomCard.name
// }
// selectRandomCard()

// function selectRandomCard() {
//     let randomIndex = Math.floor(Math.random() * 20)
//     let randomCard = cards[randomIndex]
//     let mysteryImg = document.querySelector('img.mystery')
//     let imagePath
//     if (randomIndex < 10) {
//         let imagePath = 'images/characters_0' + (randomIndex + 1) + '.jpg'
//     }
//     else {
//         let imagePath = 'images/characters_' + (randomIndex + 1) + '.jpg'
//     }
//     mysteryImg.src = imagePath
//     let mysteryName = document.querySelector('.mystery-card span');
//     mysteryName.textContent = randomCard.name
//   }
  
//   selectRandomCard()
  

function selectRandomCard() {
    let randomIndex = Math.floor(Math.random() * 20)
    let randomCard = cards[randomIndex]
    let mysteryImg = document.querySelector('img.mystery')
    let imagePath
    if (randomIndex < 10) {
      imagePath = 'images/characters_0' + (randomIndex + 1) + '.jpg'
    }
    else {
      imagePath = 'images/characters_' + (randomIndex + 1) + '.jpg'
    }
    mysteryImg.src = imagePath
    let mysteryName = document.querySelector('.mystery-card span')
    mysteryName.textContent = randomCard.name
  }
  
  selectRandomCard()
  