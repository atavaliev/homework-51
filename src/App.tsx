import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle/Circle";

const App = () => {

    const [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0, 0]);

    const generateNumbers = () => {

        //Create collection of values:number
        const randomNumbers: Set<number> = new Set();

        //Generate unique numbers till array size reach 5
        for (let i = 0; randomNumbers.size < 5; i++) {
            const randomNumber: number = Math.floor(Math.random() * 36) + 5;
            randomNumbers.add(randomNumber);
        }

        //Convert Set to Array
        setNumbers(Array.from(randomNumbers));
    }

    //Sorted array to ascendant
    const sortedArray = numbers.sort(function (a, b) {
        return a - b
    });

    return (
        <div className="App">
            <h1>Magic Numbers</h1>

            <button onClick={() => generateNumbers()}>New numbers</button>

            <div className="circle-list">
                {
                    sortedArray.map(n => {
                        return <Circle number={n}/>
                    })
                }
            </div>


        </div>
    );
};

export default App;
