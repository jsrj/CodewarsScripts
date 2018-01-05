/* Write a function that will return the count of distinct case-insensitive alphabetic characters
    and numeric digits that occur more than once in the input string.
    The input string can be assumed to contain only alphabets (both uppercase and lowercase)
    and numeric digits.
*/

function duplicateCount(text){
    text      = text.toLowerCase();
    textArray = text.split('');

    let characters    = {};
    let duplicates    = 0;

    textArray.forEach((character) => {
        if(characters[character] == undefined){
        characters[character]  = 0;
        } else {
        characters[character] += 1;
        }
        duplicates += (characters[character] == 1)? 1 : 0
    });

    return duplicates;
}