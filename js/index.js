// const toggle = document.getElementById('darkmode')
// const bgTop = document.getElementsByClassName('bg-top')[0]
// const body = document.body
// const title = document.getElementsByClassName('header-title')[0]
// const totalFollowers = document.getElementsByClassName('header-title__resume')[0]
// const card = document.getElementsByClassName('card')
// const cardTotal = document.getElementsByClassName('card-total')
// const person = document.getElementsByClassName('person')
// const followerText = document.getElementsByClassName('card-followers')

// console.log(person)

// const handleToggle = (event) => {

//   if(event.target.checked){ // dark mode

//     bgTop.style.backgroundColor = "hsl(232, 19%, 15%)"
//     body.style.backgroundColor = "hsl(230, 17%, 14%)"
//     title.style.color = "white"
//     totalFollowers.style.color = "hsl(228, 34%, 66%)"

//     for(let cardNum = 0; cardNum < card.length; cardNum++){
//       card[cardNum].style.backgroundColor = "hsl(228, 28%, 20%)"
//       cardTotal[cardNum].style.color = "white"
//       person[cardNum].style.color = "hsl(228, 34%, 66%)"
//       followerText[cardNum].style.color = "hsl(228, 34%, 66%)"
//     }

//   } else { // light mode

//     bgTop.style.backgroundColor = "hsl(225, 100%, 98%)"
//     body.style.backgroundColor = "hsl(0, 0%, 100%)"
//     title.style.color = "black"
//     totalFollowers.style.color = "hsl(228, 12%, 44%)"

//     for(let cardNum = 0; cardNum < card.length; cardNum++){
//       card[cardNum].style.backgroundColor = "hsl(227, 47%, 96%)"
//       cardTotal[cardNum].style.color = "black"
//       person[cardNum].style.color = "hsl(228, 12%, 44%)"
//       followerText[cardNum].style.color = "hsl(228, 12%, 44%)"
//     }

//   }
// }

// toggle.onclick = handleToggle


const toggle = document.getElementById('darkmode')
const body = document.body

const handleDarkMode = () => {
  body.classList.toggle('dark')
}

toggle.onclick = handleDarkMode