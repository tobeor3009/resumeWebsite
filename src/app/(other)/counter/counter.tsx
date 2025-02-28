
"use client";

import { useState } from 'react';

export default function CounterPage() {
    const [count, setCount] = useState(0);
    function increment() { setCount(count + 1); }
    function decrement() { setCount(count - 1); }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}