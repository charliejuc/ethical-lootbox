import { LootBox } from './LootBox'
import { ProbabilitiesList } from './utils/Random'

const probs: ProbabilitiesList<number[]>[] = [
    [1, [7, 8, 9]],
    [0.001, [1, 2, 3]],
    [0.0006, [99]],
    [0.00008, [100]]
]

const lootBox = new LootBox<number[]>(probs, [
    {
        item: probs[1][1],
        every: 250
    },
    {
        item: probs[2][1],
        every: 500
    }
])

const initial = 1000
let i = initial
while (i--) {
    const tryNumber = initial - i
    const result = lootBox.try(tryNumber)

    if (result != null && result[0] !== 7) {
        console.log(tryNumber, result)
    }
}

// const probs: ProbabilitiesList<number[]>[] = [
//     [0.2, [4, 5]],
//     [0.1, [1, 2, 3]],
//     [0.69999, [7, 8, 9, 10]],
//     [0.00001, [100]]
// ]

// const initial = 100000
// let i = initial
// while (i--) {
//     const result = randomListByProb(probs)

//     if (result != null && result[0] === 100) {
//         console.log(initial - i, result)
//     }
// }

// const probs1: ProbabilitiesList<() => number>[] = [
//     [0.2, () => randomInteger(40, 60)],
//     [0.699, () => randomInteger(60, 70)],
//     [0.1, () => randomInteger(70, 80)],
//     [0.001, () => randomInteger(80, 110)]
// ]

// const initial = 10000
// let i = initial
// while (i--) {
//     const result = randomListByProb(probs1)?.()

//     if (result != null && result >= 109) {
//         console.log(initial - i, result)
//     }
// }
