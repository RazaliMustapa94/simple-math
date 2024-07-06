'use client';
import { useState } from 'react';

export default function TwoSum() {
    const [numbers, setNumbers] = useState<{ number1: string, number2: number }>({ number1: '', number2: 0 });
    const [indices, setIndices] = useState<{ indices1: number, indices2: number }>({ indices1: 0, indices2: 0 });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            [id]: value,
        }));
    }

    const Count = () => {
        const map = new Map<number, number>();
        const userInput = numbers.number1.split(',').map(str => parseInt(str.trim(), 10));
        for (let i = 0; i < userInput.length; i++) {
            const currentNumber = userInput[i];
            const complement = numbers.number2 - currentNumber;
            if (map.has(complement)) {
                setIndices({
                    indices1: map.get(complement)! + 1,
                    indices2: i + 1
                });
                return;
            }
            map.set(currentNumber, i);
        }
    }

    return (
        <><h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-5xl font-bold dark:text-white p-10">Challenge 3</h1><form className="max-w-sm mx-auto">
            
            <div className="mb-5">
                <label htmlFor="number1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Insert Array sorted in non-decreasing order</label>
                <input
                    value={numbers.number1}
                    onChange={handleChange}
                    type="text" id="number1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2,3,4,5" required />
                <small className="float-left"><span style={{ color: 'red' }}>&#65121;</span>split number by coma</small>
            </div>
            <div className="mb-5 mt-10">
                <label htmlFor="number2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Insert Target</label>
                <input
                    value={numbers.number2}
                    onChange={handleChange}
                    type="number" id="number2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="button" onClick={Count} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none float-left focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find</button>
            {indices.indices1 != 0 && (
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-right">
                    Indices : [{indices.indices1}, {indices.indices2}]
                </p>
            )}
        </form></>
    );
}


