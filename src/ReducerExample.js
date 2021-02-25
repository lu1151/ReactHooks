import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                count: state.count + 1
            }
        case "sub":
            return {
                count: state.count - 1
            }
        default:
            throw "Error"
    }
}

export default function Counter() {

    const [counter, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            Your counter is : {counter.count}
            <button onClick={() => dispatch({ type: "add" })}>+</button>
            <button onClick={() => dispatch({ type: "sub" })}> -</button>
        </div>
    )
}