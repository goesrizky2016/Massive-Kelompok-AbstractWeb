import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";
import "./CounterComponent.css";
function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div class="container"> 
      <h2 class="counter">Counter</h2>
      <div>
        <button class="btn1" onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button class="btn2" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div clas="container2">
        <input class="nilai" type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter value" />
        <button class="btn3" onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
}
export default CounterComponent;
