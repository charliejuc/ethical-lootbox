export const isNumber = (num: unknown): num is number =>
    typeof num === 'number' && !Number.isNaN(num)

export const decimalRound = (num: number, decimals?: number): number => {
    const updatedDecimals = isNumber(decimals) ? decimals : 0
    const multiplier = 10 ** updatedDecimals

    return Math.round(num * multiplier + Number.EPSILON) / multiplier
}
