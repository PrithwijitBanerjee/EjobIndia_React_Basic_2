// useMemo hooks returns a memoized value ...
// useMemo hooks accepts second parameter to declare dependencies...
// the functions will only run when its dependencies have changed ...
// useMemo hooks is mainly used in performance optimization in react ...

import { useMemo, useState } from "react"

const ReactUseMemoEx2 = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    // const expensiveCalRes = expensiveCal(count); // without using useMemo();
    const expensiveCalRes = useMemo(() => expensiveCal(count), [count]);
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div className="my-5">
                <h1 className="text-center my-2">Count: {count}</h1>
                <button
                    className="py-1 px-5 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
                    onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
            <div>
                {
                    todos.length !== 0 && todos?.map((todo, index) => (
                        <div key={index} className="my-3">
                            {todo}
                        </div>
                    ))
                }
                <button
                    onClick={() => setTodos(prevTodos => [...prevTodos,'Todo Added'])}
                    className="py-1 px-5 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                    Add Todo
                </button>
            </div>
            <div className="mt-8">
                    <h1>Expensive Calculation Res: {expensiveCalRes}</h1>
            </div>
        </div>
    )
}

const expensiveCal = count => {
    console.log('calculating expensive operation');
    for(let i = 0; i < 100000000; i++)
    {
        count++;
    }
    return count;
}
export default ReactUseMemoEx2