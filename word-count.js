//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  //This first few lines are to make the inputs an array, and uniform
   //create an empty array to append to
   let wordArray = [];
  //replace tabs and new spaces in the phrase provided
  const editedPhrase = phrase.replace(/[\n\t]/g, " ");
  //convert to lowercase
  const phraseToLowerCase = editedPhrase.toLowerCase();
  //find certain oddities in string and join them to create substrings accordingly
  let phraseArray = phraseToLowerCase
    .split(",")
    .join("")
    .split('"')
    .join("")
    .split("'")
    .join("")
    .split(":")
    .join("")
    .split(" ");
  //check log of final product before looping through

  //loop through array
  for (let i = 0; i < phraseArray.length; i++) {
    //create empty object that will be initialized with key value pair as it loops
    const phraseObj = {};
    //initialize count for each word
    let count = 1;
    //loop again within loop to check if there are multiples of this word
    for (let j = 0; j < phraseArray.length; j++) {
      //change both cases to lower case to uniform each index, 
      //if they are the same only make an object and set the key to the index
      //and increment the count value
      //else just make an object the key the index and set the value to count which is just 1
      if (
        phraseArray[i].toLowerCase() === phraseArray[j].toLowerCase() &&
        i !== j
      ) {
        phraseObj[phraseArray[i]] = count++;
      } else {
        phraseObj[phraseArray[i]] = count;
      }
    }
    //push these objects to the back of the wordArray
    wordArray.push(phraseObj);
  }

  throw new Error('Remove this statement and implement this function');
};
