export function countLetters(word: string) {
    let letters: string[] = word.split('')
    let letter = {}
    for (let i: number = 0; i < letters.length; i++) {
        if (letter.hasOwnProperty(letters[i])) {
            letter[letters[i]] += 1
        } else {
            letter[letters[i]] = 1
        }
    }
    return (letter) 
}

countLetters('ababa');


/*
ababa 
a,b,a,b,a
letter = {} 
letter = { a : 1 }
letter = { a : 1 , b : 1 }
letter = { a : 2 , b : 1 }
letter = { a : 2 , b : 2 }
letter = { a : 3 , b : 1 }


*/