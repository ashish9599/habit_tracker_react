import { useSelector } from "react-redux";
import { habitSelector } from "../redux/store";
import { Link } from "react-router-dom";
import { DayView} from "./index";
import styles from '../styles/weekview.module.css'
const WeekView=()=> {
  const habit=useSelector(habitSelector);
  const habitid=Number(localStorage.getItem('id'))
  const newHabit=habit.filter((habit)=>habit.id===habitid);

// console.log("new",newHabit[0].weeklog);
// console.log("new",newHabit);
  
  return (
      <>
      <div className={styles.weekView}>
             <h1>{newHabit.length>0&&newHabit[0].name}</h1>
           <div className={styles.weekViewDay} >
           {newHabit.length>0&&newHabit[0].weeklog.map((day,index)=><DayView day={day} key={index}/>)}
            </div>
         <div className={styles.weekViewButton}>
              <Link to="/">
            <button>
                Back to Detail View
            </button>
                </Link>
          </div>
      </div>
      </>
    );
  }
  
  export default WeekView;
  