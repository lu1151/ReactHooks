import React, { useState, useRef } from "react";

export default function UseRefExample() {

    const [counter, setCounter] = useState(0);
    const prev = useRef(null);

    return (
        <div>
            <p>Current:{counter}</p>
            <p>Before:{prev.current}</p>
            <button onClick={() => {
                prev.current = counter;
                setCounter(x => x + 1)
            }}>+</button>
            <button onClick={() => {
                prev.current = counter;
                setCounter(x => x - 1)
            }}>-</button>
        </div>
    )
}