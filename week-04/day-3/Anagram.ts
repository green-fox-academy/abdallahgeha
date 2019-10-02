export function anagram(word1: string, word2: string) {

    let temp1 = word1.split('')
    let temp2 = word2.split('')


    temp1.sort()
    temp2.sort()
    return temp1.join() === temp2.join()
}

anagram('aba', 'baa')

// 1 - aba 
// 2 - a b a 
// 3 - a a b
// 4 - aab

