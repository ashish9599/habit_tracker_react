import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/reducer/habbitReducer";
import { toast } from "react-toastify";
import styles from '../styles/dayview.module.css'
const DayView=({day})=> {
// console.log(day);
const dispatch=useDispatch();

const today=new Date();
const todayday=today.getDay();
const date=new Date(day.yyyy,day.mm,day.dd)
const markToDone=()=>{
  if(day.id>todayday){
    toast.info("You cannot change your next day status")
    return;
  }
  dispatch(habitDone(day.id))
}

const markToUnDone=()=>{
  if(day.id>todayday){
    toast.info("You cannot change your next day status")
    return;
  }
  dispatch(habitUnDone(day.id))
}
const markToNone=()=>{
  if(day.id>todayday){
    toast.info("You cannot change your next day status")
    return;
  }
  dispatch(habitNone(day.id))
}
return (
  <>
      <div className={styles.dayviewIcon}>
      <h5 >{day.day}</h5>
      <p >{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true
        ?`fa-solid fa-circle-check circle-icon active  ${styles.green}` 
        :"fa-solid fa-circle-check circle-icon"}
         onClick={markToDone}></i>
      <i className={day.isDone===false
        ?`fa-solid fa-circle-xmark circle-icon active ${styles.red}`
        :"fa-solid fa-circle-xmark circle-icon"}
         onClick={markToUnDone}></i>
      <i className={day.isDone===""
      ?`fa-solid fa-circle-minus circle-icon  active ${styles.blue}`
      :"fa-solid fa-circle-minus circle-icon"} 
      onClick={markToNone}></i>
    </div>
      </>
    );
  }
  
  export default DayView;
  