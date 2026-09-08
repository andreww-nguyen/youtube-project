console.log('hello');


// create an array
const arr1 = [];

for (let i = 0; i < 100; i++)
{
  arr1[i] = Math.floor(Math.random() * 100);
}
console.log(`Array 1: 
  ${arr1}`);

// shuffle the array
shuffleArray(arr1);

console.log(`shuffled array: 
  ${arr1}`)


function shuffleArray(array)
{
  let remainingElements = array.length;
  let storedElem;
  let i;

  while (remainingElements)
  {
    // random element
    i = Math.floor(Math.random() * remainingElements);
  
    // decrease the number of remaining elements
    remainingElements--;
  
    // store the last element
    storedElem = array[remainingElements];
  
    // swap the random element to the end
    array[remainingElements] = array[i];
  
    // store the last element in the position we replaced
    array[i] = storedElem;
  }

  return array;
}