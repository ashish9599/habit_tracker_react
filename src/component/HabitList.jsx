import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from 'react-router-dom';
import { deleteHabit } from "../redux/reducer/habbitReducer";
import { toast } from "react-toastify";
import styles from '../styles/habitlist.module.css';
import { habitSelector } from "../redux/store";
const HabitList=({habit,index})=> {
const navigate=useNavigate();
const dispatch=useDispatch();
const newhabit=useSelector(habitSelector);
// console.log(newhabit.length);  
const today=new Date();
  const day=today.getUTCDay();
  let count=0;
for(let i=0;i<habit.weeklog.length;i++){
  if(habit.weeklog[i].isDone===true){
    count++;
  }
}
 
// console.log(count);
// console.log(habit);
const setId=()=>{
localStorage.setItem('id',habit.id);
if(habit.id){

  navigate(`habit/week`);
}
}
const removeHabit=()=>{
  dispatch(deleteHabit(habit.id));
  toast.success('Deleted successfully');
}
return (
          <div className={styles.habitlist}>
          <div  className={styles.habitlistleft}>
          <i className="fa-solid fa-hashtag ">{index+1
          }</i>
        
            <div>
            <h4>{habit.name}</h4>
            <p >{count}/{day} days</p> 
            </div>
         </div>
      <div className={styles.habitlistRight} >
        <div  onClick={()=>setId()} className={styles.habitlistRightCal}>
          <i className="fa-solid fa-calendar-week" ></i>
          week view
        
        </div>
        <i className={`fa-solid fa-trash ${styles.red}`} onClick={()=>removeHabit()} ></i>
      </div>
    
     </div>
    );
  }
  
  export default HabitList;
  