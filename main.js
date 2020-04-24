const selectedOption = document.getElementById('optionA')

selectedOption.addEventListener('click', () => {
  console.log("you clicked A")
})

const sortedOption = document.getElementById('optionB')

sortedOption.addEventListener('click', () => {
  console.log("you clicked B")
})

//Variables for the Options
const izoneMembers = [
  { name: '1', photo: 'assets/images/wonyoung.jpeg' },
  { name: '2', photo: 'assets/images/sakura.jpeg' },
  { name: '3', photo: 'assets/images/yuri.jpeg' },
  { name: '4', photo: 'assets/images/yena.jpeg' }
]

const resultsArray = []

Math.floor(Math.random() * izoneMembers.length)
//outputs random index from the array

if (resultsArray.length === 0) {
  const randomIndex = Math.floor(Math.random() * izoneMembers.length)
  const [initialMember] = izoneMembers.splice(randomIndex, 1)
  console.log(initialMember)
  resultsArray.push(initialMember)
  console.log(resultsArray)
}

