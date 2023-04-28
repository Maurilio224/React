import { useState, useEffect } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const counterInterval = setInterval(() => {
            setCounter(counter => counter + 1)
        },1000)
    },[])

    return (
        <>
            <h1>Counter:{counter}</h1>
        </>
    )
}
