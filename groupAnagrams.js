let collectAnagrams = (words) => {
    let anagrams = {}
    let collectedAnagrams = []

    for (let word of words){
        // alphabetize letters
        let letters = word.split('').sort().join('')

        // create hash key-value pair for alphabetized letters of word if it does not exist
        anagrams[letters] = anagrams[letters] || []
        
        // add word to value of the key which matches its letters
        anagrams[letters].push(word)
        }
    
    // iterate through anagrams hash keys and add their values as subarrays of the collectedAnagrams array
    for (let key in anagrams){
        collectedAnagrams.push(anagrams[key])
    }

    // return the array of arrays
    return collectedAnagrams
}

module.exports = collectAnagrams
 
// https://medium.com/@noamsauerutley/group-anagrams-in-javascript-9fa05b9e0879
