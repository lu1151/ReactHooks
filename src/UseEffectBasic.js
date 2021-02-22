import React, { useState, useEffect } from "react";

function useCount(params) {
    const [count, setCount] = useState(0);

    return [count, () => {
        setCount(count + 1);
    }]
}

export default () => {
    const [count, addCount] = useCount(0);

    useEffect(() => {
        console.log(`You clicked count ${count} times.`);
    });

    return (
        <div>
            Your Count: {count}
            <button onClick={() => addCount(count + 1)}>Add</button>
        </div>
    )
}