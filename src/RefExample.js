import React, { useRef } from "react";

export default function UseRefExample() {
    const refInput = useRef();
    return <div>
        <input ref={refInput} />
        <button onClick={() => {
            refInput.current.focus();
        }}>Focus</button>
    </div>
}