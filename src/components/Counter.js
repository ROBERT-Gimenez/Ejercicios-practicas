import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { 
    decrement,
    increment,
    incrementByAmount,
    incrementAsync ,
    selectCount,
    resetAmount } from '../store/features/counterSlice'

export default function Counter() {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount , setIncrementAmount] = useState('2');


  return (
    <div>
        <div className='container'>
            <button
             aria-label={"increment"}
             onClick={()=>{dispatch(increment())}}   >
                +
             </button>
             <span>{count}</span>
        </div>
        <div className='container'>
            <button
             aria-label={"Decrement"}
             onClick={()=>{dispatch(decrement())}}   >
                -
             </button>
        </div>
        <div className='container'>
            <input
             aria-label={"Set increment Amount"}
             value={incrementAmount}
             onChange={e => setIncrementAmount(e.target.value)}
             />
             <button
             aria-label={"Decrement"}
             onClick={()=>{dispatch(incrementByAmount(Number(incrementAmount) || 0))
             }}>
                add Amount
             </button>
             <button
             aria-label={"Decrement"}
             onClick={()=>{dispatch(incrementAsync(Number(incrementAmount) || 0))
             }}>
                add Async
             </button>
             <button
             aria-label={"Reset"}
             onClick={()=>{dispatch(resetAmount())
             }}>
                reset
             </button>
           
        </div>
    </div>
  )
}
