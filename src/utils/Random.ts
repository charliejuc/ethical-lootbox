import { isNumber } from './Math'

export const randomNumber = (minOrMax: number, max?: number): number => {
    const min = isNumber(max) ? minOrMax : 0
    const updatedMax = isNumber(max) ? max : minOrMax

    return (updatedMax - min) * Math.random() + min
}

export const randomInteger = (minOrMax: number, max?: number): number => {
    return Math.floor(randomNumber(minOrMax, max))
}

export type ProbabilitiesList<T> = [number, T]
export const randomByProb = <T>(
    probList: ProbabilitiesList<T>[],
    _randomGenerator = Math.random
) => {
    const accuracy = 100_000_000
    const random = _randomGenerator() * accuracy
    const sortedLists = probList.slice().sort((a, b) => a[0] - b[0])

    let accProb = 0
    for (const element of sortedLists) {
        const [prob, value] = element
        const _prob = prob * accuracy
        accProb += _prob

        if (random < accProb) {
            return value
        }
    }

    return null
}
