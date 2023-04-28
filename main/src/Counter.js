import CounterDisplay from './CounterDisplay';
import { useState, useEffect } from "react";

export default function Counter(props) {
    const [counter, setCounter] = useState(props.default)

    useEffect(() => {
        const counterInterval = setInterval(() => {
            setCounter(counter => counter + props.increment)
        },props.interval)
    },[])

    return (
        <CounterDisplay counter = {counter}/>
    )
}
