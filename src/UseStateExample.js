import React, { useState } from "react";

function useCount(params) {
    const [count, setCount] = useState(0);

    return [count, () => {
        setCount(count + 1);
    }]

}

export default () => {
    const [count, addCount] = useCount(0);

    return (
        <div>
            Your Count: {count}
            <button onClick={() => addCount(count + 1)}>Add</button>
        </div>
    )
}