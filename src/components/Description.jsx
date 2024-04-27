export const TextWithStyle = () => {
    return (
        <div className="container mx-autorounded-md">
            <h2 className="text-gray-900 font-semibold">Анализ вычислительной сложности функции findMissingNumbers</h2>
            <p className="text-gray-900 font-semibold mt-2">Время выполнения:</p>
            <ul className="list-disc pl-6">
                <li className="text-gray-700">Функция findMissingNumbers имеет временную сложность O(n), где n - это длина входного массива numbers.</li>
            </ul>
            <p className="text-gray-900 font-semibold mt-2">Разбивка по этапам:</p>
            <ul className="list-disc pl-6">
                <li className="text-gray-700">Вычисление gaussSum: O(1) - Эта операция включает в себя постоянные арифметические действия (сложение, умножение, деление) и не зависит от размера входных данных.</li>
                <li className="text-gray-700">Вычисление realSum: O(n) - sumArray проходит по всему массиву numbers с помощью reduce, что приводит к линейной сложности.</li>
                <li className="text-gray-700">Цикл while: O(n) - В худшем случае цикл проходит по всем элементам массива (low достигает high).</li>
                <li className="text-gray-700">Операции внутри цикла: O(1) - Сравнения, присваивания и вычисления внутри цикла являются операциями постоянного времени.</li>
            </ul>
        </div>
    );
};
