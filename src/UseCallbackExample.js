import React, { useRef, useCallback, useState } from "react";

const s = new Set();

export default () => {
    const [counter, setCounter] = useState(0);

    const add = useCallback(() => {
        setCounter(x => x + 1)
    }, [])

    s.add(add);
    console.log(s.size);

    return (
        <div>
            {counter}
            <button onClick={add}>+</button>
        </div>
    )
}