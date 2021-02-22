import React, { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            Your Count: {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}