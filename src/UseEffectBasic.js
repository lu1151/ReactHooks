import React, { useState, useEffect } from "react";

function useInterval(callback, time) {
    useEffect(() => {
        const I = setInterval(callback, time);
        return () => {
            clearInterval(I);
        }
    }, [])
}

export default () => {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count => count + 1);
    }, 1000);

    return (
        <div>
            Your Count: {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}