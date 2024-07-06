'use client';

import React, { useState } from 'react';

export default function Addition() {
    const [numbers, setNumbers] = useState<{ number1: string, number2: string }>({ number1: '', number2: '' });
    const [total, setTotal] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTotal(0)
        const { id, value } = event.target;
        setNumbers(prevNumbers => ({
            ...prevNumbers,
            [id]: value
        }));
    };

    const calculate = () => {
        const { number1, number2 } = numbers;
        setTotal((parseFloat(number1) || 0) + (parseFloat(number2) || 0));
    };

    return (
        <>
            <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-5xl font-bold dark:text-white p-10">Challenge 1</h1>

            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="number1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Input First Number</label>
                    <input
                        value={numbers.number1}
                        onChange={handleChange}
                        type="number"
                        id="number1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input first number"
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="number2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left">Input Second Number</label>
                    <input
                        value={numbers.number2}
                        onChange={handleChange}
                        type="number"
                        id="number2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input second number"
                        required />
                </div>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-left"
                    onClick={calculate}
                >Calculate
                </button>
                {total > 0 && (
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-right">TOTAL : {total}</p>
                )}
            </form></>
    );
}
