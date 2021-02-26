import React, { useState, useEffect } from "react";

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function getPerson() {
    await sleep(200);
    return ["Adam", "Ben", "Emma"];
}

function usePerson() {
    const [list, setList] = useState(null);

    async function request() {
        const list = await getPerson();
        setList(list)
    }

    useEffect(request, [])
    return list
}

export default () => {
    const list = usePerson()
    if (list === null) {
        return <div>Loading</div>
    } else {
        return (
            <div>{list.map((name, i) => {
                return (
                    <li>{name}</li>
                )
            })}
            </div>
        )
    }

}