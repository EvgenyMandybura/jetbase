import {MIN_LENGTH} from "../constants/constants";

export const generateSortedArrayWithMissingNumbers = (length) => {
    if (length < MIN_LENGTH) {
        throw new Error(`Длина массива должна быть больше 1.`);
    }

    const numbers = Array.from({ length }, (_, i) => i + 1);

    const missingNumbersIndices = new Set();
    while (missingNumbersIndices.size < 2) {
        let randomIndex1, randomIndex2;
        do {
            randomIndex1 = Math.floor(Math.random() * length);
            randomIndex2 = Math.floor(Math.random() * length);
        } while (randomIndex1 === randomIndex2 || missingNumbersIndices.has(randomIndex1) || missingNumbersIndices.has(randomIndex2));

        missingNumbersIndices.add(randomIndex1);
        missingNumbersIndices.add(randomIndex2);
    }

    numbers.sort((a, b) => a - b);

    const arrayWithoutMissingNumbers = [];
    for (let i = 0; i < length; i++) {
        if (!missingNumbersIndices.has(i)) {
            arrayWithoutMissingNumbers.push(numbers[i]);
        }
    }

    const result = {
        numbers: arrayWithoutMissingNumbers,
        missingNumbers: [...missingNumbersIndices].map((index) => index + 1),
    };

    return result;
};
