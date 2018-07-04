// function makeIterator (arr) {
//     let nextIndex = 0
//     return {
//         next: () => {
//             if(nextIndex < arr.length) {
//                 return {
//                     value: arr[nextIndex++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
// const it = makeIterator(['此番', '费觉', '打豆豆'])
// console.log(1, it.next().value)
// console.log(2, it.next().value)
// console.log(3, it.next().value)
// console.log(4, it.next().done)


function *makeIterator (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}
const gen = makeIterator(['此番', '费觉', '打豆豆'])
console.log(1, gen.next().value)
console.log(2, gen.next().value)
console.log(3, gen.next().value)
console.log(4, gen.next().done)