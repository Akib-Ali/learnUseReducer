import { useReducer } from "react"
import reducer from "./reducer";
 const initialvalue = 0;
export const ReducerHook=()=>{

    const [count , dispatch] = useReducer(reducer,initialvalue)


return(
     <div>
        <h2>Count :{count}</h2>
    <div style={{display:"flex" , gap:"20px"}}>
        <button style={{color:"white", backgroundColor:"black"}} onClick={()=> dispatch({type:"INC"})}>Increase</button>
        <button style={{color:"white", backgroundColor:"black"}} onClick={()=> dispatch({type: "DEC"})}>Decrease</button>
    </div>

    </div>
)




}