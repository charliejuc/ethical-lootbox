import { ProbabilitiesList, randomByProb } from './utils/Random'

export type EnsuredLoot<T> = {
    item: T
    every: number
}
export class LootBox<T> {
    private readonly probList: ProbabilitiesList<T>[]
    private readonly ensuredLoots: EnsuredLoot<T>[]

    constructor(probList: ProbabilitiesList<T>[], ensuredLoots: EnsuredLoot<T>[]) {
        this.probList = probList
        this.ensuredLoots = ensuredLoots.slice().sort((a, b) => b.every - a.every)
    }

    try(tries: number = 0): T | null {
        const ensuredLoot = this.ensuredLoots.find((value) => tries % value.every === 0)

        if (ensuredLoot) {
            return ensuredLoot.item
        }

        return randomByProb(this.probList)
    }
}
