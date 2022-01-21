//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  //This first few lines are to make the inputs an array, and uniform
  //replace tabs and new spaces in the phrase provided
  const editedPhrase = phrase.replace(/[\n\t]/g, " ");
  //convert to lowercase
  const toLowerCase = editedPhrase.toLowerCase();
  //find certain oddities in string and join them to create substrings accordingly
  let phraseArray = toLowerCase
    .split(",")
    .join("")
    .split('"')
    .join("")
    .split("'")
    .join("")
    .split(":")
    .join("")
    .split(" ");
  //check log of final prodcut before looping through
  throw new Error('Remove this statement and implement this function');
};
