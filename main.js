const newOption = document.getElementById('optionA')

newOption.addEventListener('click', () => {
  sorter('higher')
})

const sortedOption = document.getElementById('optionB')

sortedOption.addEventListener('click', () => {
  sorter('lower')
})

//Variables for the Options
const izoneMembers = [
  { name: '1', photo: 'assets/images/wonyoung.jpg' },
  { name: '2', photo: 'assets/images/sakura.jpg' },
  { name: '3', photo: 'assets/images/yuri.jpg' },
  { name: '4', photo: 'assets/images/yena.jpg' }
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

//Remove a member from the IZ*One members list
let [newOptionJS] = izoneMembers.splice(Math.floor(Math.random() * izoneMembers.length), 1)

let sortedOptionJS = resultsArray[0]

newOption.innerHTML = `<img src=${newOptionJS.photo}><p>${newOptionJS.name}</p>`
sortedOption.innerHTML = `<img src=${sortedOptionJS.photo}><p>${sortedOptionJS.name}</p>`

//upper bound is 1 as the highest index the initial selection could be spliced at is 1, and the lowest is 0
let highestResultsIndex = 1
let lowestResultsIndex = 0
let comparatorIndex = 0

//Binary Insertion Sorter
const sorter = (decision) => {

  switch (decision) {
    case 'higher':
      console.log('higher')
      if (comparatorIndex === 0) {
        highestResultsIndex = 0
        lowestResultsIndex = 0
      } else {
        highestResultsIndex = comparatorIndex
      }
      break

    case 'lower':
      console.log('lower')
      lowestResultsIndex = comparatorIndex + 1
  }

  //if no more sorting is needed
  if (highestResultsIndex === lowestResultsIndex) {
    resultsArray.splice(highestResultsIndex, 0, newOptionJS)
    highestResultsIndex = resultsArray.length
    lowestResultsIndex = 0
    //finding the average in the current results list
    comparatorIndex = Math.floor((highestResultsIndex + lowestResultsIndex) / 2)

    //if more items are in the members list
    if (izoneMembers.length > 0) {
      [newOptionJS] = izoneMembers.splice(Math.floor(Math.random() * izoneMembers.length), 1)
      sortedOptionJS = resultsArray[comparatorIndex]
    } else {
      //if no more items are in the members list
      console.log('Sorting Complete: ', resultsArray)
    }
  } else {
    //if more sorting is needed
    comparatorIndex = Math.floor((highestResultsIndex + lowestResultsIndex) / 2)
    sortedOptionJS = resultsArray[comparatorIndex]
    console.log('More sorting is needed. New option:', sortedOptionJS)
  }

  newOption.innerHTML = `<img src=${newOptionJS.photo}><p>${newOptionJS.name}</p>`
  sortedOption.innerHTML = `<img src=${sortedOptionJS.photo}><p>${sortedOptionJS.name}</p>`

  console.log(resultsArray)

}