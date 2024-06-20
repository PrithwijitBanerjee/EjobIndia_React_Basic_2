import React, { useMemo, useState } from 'react'

const numbers = new Array(30_000_000).fill(0).map((_, index) => {
  return {
    pos: index,
    isMagical: index === 29_000_000
  }
}); // large array ....
const ReactUseMemoEx1 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  // const findMagical = numbers.find(item => item?.isMagical === true); // without using useMemo() hook ...
  const memoizedMagicalRes = useMemo(() => {
    return numbers.find(item => item?.isMagical === true);
  },[count]);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button className='bg-violet-700 text-white py-1 px-5' onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <div>
        <h1>Count: {num}</h1>
        <button className='bg-violet-700 text-white py-1 px-5' onClick={() => setNum(num + 1)}>Increment Number</button>
      </div>
    </div>
  )
}

export default ReactUseMemoEx1