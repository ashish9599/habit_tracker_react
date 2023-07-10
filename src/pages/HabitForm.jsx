import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addHabit } from "../redux/reducer/habbitReducer";
import styles from "../styles/habitform.module.css"
const HabitForm=({setShowForm})=> {
const inputRef=useRef(null);
useEffect(()=>{
  inputRef.current.focus();
},[])


  const [newHabit,setHabit]=useState('');
const dispatch=useDispatch();
 const handleSave=()=>{
  if(newHabit===''){
    toast.info("pleas write Habbit ")
    return ;
  }
 dispatch(addHabit(newHabit));
  // add habbit
  // di
 toast.success("Habbi added successfully");
  setHabit('');
  setShowForm(false);
}
 return (
      <><div  className={styles.habitform}>
        <h3>New Habit</h3>
        <div className={styles.habitformInput}>

            <label htmlFor="name">Name</label>
            <input
            ref={inputRef}
            value={newHabit}
            onChange={(e)=>setHabit(e.target.value)}
            type="text" placeholder="Enter habit" required />
          
          </div>
        <div className={styles.habitformButton}>
          <button className={styles.red} onClick={()=>setShowForm(false)}>Cancel</button>
          <button className={styles.green} onClick={()=>handleSave()}>Save</button>
        </div>
      </div>
      </>
    );
  }
  
  export default HabitForm;
  