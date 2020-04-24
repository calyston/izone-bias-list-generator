const newOption = document.getElementById('optionA')

newOption.addEventListener('click', () => {
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

//to display the intitial member for the results array
if (resultsArray.length === 0) {
  const randomIndex = Math.floor(Math.random() * izoneMembers.length)
  const [initialMember] = izoneMembers.splice(randomIndex, 1)
  console.log(initialMember)
  resultsArray.push(initialMember)
  console.log(resultsArray)
}

let [newOptionJS] = izoneMembers.splice(Math.floor(Math.random() * izoneMembers.length), 1)

let sortedOptionJS = resultsArray[0]

newOption.innerHTML = `<p>${newOptionJS.name}</p>`
sortedOption.innerHTML = `<p>${sortedOptionJS.name}</p>`