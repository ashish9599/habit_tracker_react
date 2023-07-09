import { createSlice } from "@reduxjs/toolkit"

const initialState={
    habit:[],
}

const habitSlice=createSlice({
    name:"habit",
    initialState,
    reducers:{
        addHabit:(state,action)=>{
            // const userId=action.payload[0];
            
           const today=new Date();
           const date=today.getUTCDate()-today.getUTCDay();
           const month=today.getUTCMonth()
           const year=today.getUTCFullYear();
           let id=Date.now();
            const newhabit={
                id:id,
                name:action.payload,
            weeklog:[
                {
                  id:0,
                  day:"Sunday",
                  dd:(date+0)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
                },
                {
                  id:1,
                  day:"Monday",
                  dd:(date+1)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
            },
                {
                  id:2,
                  day:"Tuesday",
                  dd:(date+2)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
                },
                {
                    id:3,
                    day:"Wednesday",
                    dd:(date+3)%31,
                    mm:month,
                  yyyy:year,
                  isDone:"",
                },
                {
                    id:4,
                    day:"Thursday",
                  dd:(date+4)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
            },
                {
                  id:5,
                  day:"Friday",
                  dd:(date+5)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
                },
                {
                  id:6,
                  day:"Saturday",
                  dd:(date+6)%31,
                  mm:month,
                  yyyy:year,
                  isDone:"",
            },
        ]}
        state.habit.push(newhabit);
        },
        deleteHabit:(state,action)=>{
            state.habit=state.habit.filter((habit)=>habit.id!==action.payload)
        },
        habitDone:(state,action)=>{
            const habitId=Number(localStorage.getItem('id'))
            state.habit.map((habit)=>{
            if(habit.id===habitId){
                habit.weeklog[action.payload].isDone=true;
            }
            return habit;
        })
    },
    habitUnDone:(state,action)=>{
        const habitId=Number(localStorage.getItem('id'))
        state.habit.map((habit)=>{
        if(habit.id===habitId){
            habit.weeklog[action.payload].isDone=false;
        }
        return habit;
    })
    },
        habitNone:(state,action)=>{
            const habitId=Number(localStorage.getItem('id'))
            
            state.habit.map((habit)=>{
            if(habit.id===habitId){
                habit.weeklog[action.payload].isDone="";
            }
            return habit;
        })
        },
    }
})

export const {addHabit,deleteHabit,habitDone, habitNone, habitUnDone}=habitSlice.actions;
export const habitReducer=habitSlice.reducer;