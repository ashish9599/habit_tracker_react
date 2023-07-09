import {  useDispatch, useSelector } from "react-redux";
import { habitSelector } from "../redux/store";
import HabitList from "./HabitList";
import { useEffect } from "react";
import { habitDone } from "../redux/reducer/habbitReducer";
const Home=()=> {
const habit=useSelector(habitSelector);
useEffect(()=>{
const today=new Date();
const day =today.getUTCDay();
// console.log(day);
},[])  

return (
      <>
          <div>
         {habit.map((habit ,i)=><HabitList habit={habit} index={i} key={i}/>)}
          </div>
      </>
    );
  }
  
  export default Home;
  