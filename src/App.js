import { useState } from 'react'
import { MAX_LENGTH, MIN_LENGTH } from './constants/constants'
import { generateSortedArrayWithMissingNumbers } from './services/generateArray'
import { NumberArray } from './components/NumberArray'
import { findMissingNumbers } from './services/findMissingNumber'
import {TextWithStyle} from "./components/Description";

function App() {
    const [length, setLength] = useState(MIN_LENGTH)
    const [numbers, setNumbers] = useState([])
    const [missingNumbers, setMissingNumbers] = useState([])
    const [calculatedMissingNumbers, setCalculatedMissingNumbers] = useState([])

    const handleInputChange = (event) => {
        setLength(event.target.value)
    }

    const handleGenerateArray = () => {
        const { numbers, missingNumbers } =
            generateSortedArrayWithMissingNumbers(Number(length) + 2)
        setNumbers(numbers)
        setMissingNumbers(missingNumbers)
    }

    const handleFindMissingNumber = () => {
        const data = findMissingNumbers(numbers)
        setCalculatedMissingNumbers(data)
    }

    return (
        <div className="App container mx-auto mt-4">
            <h1 className="text-3xl font-bold mb-4">
                Поиск отсутствующих чисел
            </h1>
            <div className='flex flex-row gap-4'>
                <div className="flex flex-col items-start mb-4 w-[45%]">
                    <label htmlFor="length" className="block mb-2 text-gray-700">
                        Введите длину последовательности:
                    </label>
                    <input
                        type="number"
                        id="length"
                        min={MIN_LENGTH}
                        max={MAX_LENGTH}
                        value={length}
                        onChange={handleInputChange}
                        className="inputStyle"
                    />
                    <p className="text">Длина последовательности: {length}</p>
                    <button
                        type="button"
                        onClick={handleGenerateArray}
                        className="buttonStyle mb-4"
                    >
                        Сгенерировать последовательность
                    </button>
                    {numbers.length ? (
                        <>
                            <NumberArray
                                array={numbers}
                                title="Последовательность с пропущенными числами:"
                            />
                            <NumberArray
                                array={missingNumbers}
                                title="Пропущенные числа:"
                            />
                        </>
                    ) : null}

                    <button
                        type="button"
                        onClick={handleFindMissingNumber}
                        className="buttonStyle mb-4"
                    >
                        Подсчитать
                    </button>
                    <NumberArray
                        array={calculatedMissingNumbers}
                        title="Вычисленные пропущенные числа:"
                    />
                </div>
                <TextWithStyle/>
            </div>
        </div>
    )
}

export default App
