import { useEffect, useState } from "react";
import { HabitForm } from "../pages";
import styles from '../styles/navbar.module.css'
import { Link } from "react-router-dom";
const NavBar=()=> {
const [hour ,setHour]=useState(0)
const [showform ,setShowForm]=useState(false)

useEffect(()=>{
const date=new Date();
setHour(date.getUTCHours());
},[])
console.log(hour)
    return (
      <>
     <div className={styles.navbar}>
        <div className="">
            <Link to={`/`}>
            <h3>
            {

                hour<=12
                ?"Morning"
                :hour<=17
                ?"AfterNoon"
                :hour<=21
                ?"Evening"
                :"Night"
            }
            </h3>
            </Link>
            </div>
        <div className={styles.navbarRight}>
             <span>
                Details
                </span>
                <button onClick={()=>setShowForm(!showform)}>
                    <img src="" alt="" />
                    Add Habbit
                </button>
             </div>
     </div>

     {showform&&<HabitForm setShowForm={setShowForm}/>}
      </>
    );
  }
  
  export default NavBar;
  