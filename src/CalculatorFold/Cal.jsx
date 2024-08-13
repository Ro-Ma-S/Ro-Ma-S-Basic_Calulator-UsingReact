import { useState } from 'react';
import './cal.css'
const Cal = () => {
    const [number_res, setNumber_res] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const Addition = () => {
        setNumber_res(parseFloat(number1) + parseFloat(number2));
    }
    const Subtraction = () => {
        setNumber_res(parseFloat(number1) - parseFloat(number2));
    }
    const Multiplication = () => {
        setNumber_res(parseFloat(number1) * parseFloat(number2));
    }
    const Division = () => {
        setNumber_res(parseFloat(number1) / parseFloat(number2));
    }
    const Reset=()=>{
        setNumber_res(0);
        setNumber1(0);
        setNumber2(0);
        }
    return (
        <div>
            <h1>Basic Calculator Application</h1>
            <div>
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} placeholder="Enter first number" required />
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Enter second number" required />
            </div>
            <div>
                <button onClick={Addition}> Addition </button>
                <button onClick={Subtraction}> Subtraction </button>
                <button onClick={Multiplication}> Multiplication </button>
                <button onClick={Division}> Division </button>
            </div>
            <h2>Result: {number_res}</h2>
            <button class="result" onClick={Reset}> Reset </button>
            <h3>Happy it Helped You</h3>
        </div>
    );
}

export default Cal;
