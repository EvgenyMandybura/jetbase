// Функция Гаусса для подсчета сумы арифметической прогрессии
function gaussSumOfArithmeticProgression(length, firstNumber, lastNumber) {
    return (length * (firstNumber + lastNumber)) / 2
}

// Функция получения суммы массива чисел
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}

export const findMissingNumbers = (numbers) => {
    const gaussSum = gaussSumOfArithmeticProgression(
        numbers.length + 2,
        numbers[0],
        numbers[numbers.length - 1],
    )
    const realSum = sumArray(numbers)
    let low = 0
    let high = numbers.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        let expected = mid + 1

        if (numbers[mid] !== expected) {
            if (mid > 0 && numbers[mid - 1] === mid) {
                let secondElement = gaussSum - realSum - expected
                return [expected, secondElement]
            } else {
                high = mid - 1
            }
        } else if (numbers[mid] === expected) {
            if (mid < numbers.length - 1 && numbers[mid + 1] !== mid + 2) {
                let secondElement = gaussSum - realSum - mid - 2
                return [mid + 2, secondElement]
            } else {
                low = mid + 1
            }
        }
    }

    return [0]
}
