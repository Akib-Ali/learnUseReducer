import { useReducer } from "react"
import reducer from "./reducer"

export const ReducerHook=()=>{
    
const initialState = 0;
     

const [count, dispath] = useReducer(reducer,initialState)


return(
     <div>
        <h2>Count: {count}</h2>
    <div style={{display:"flex" , gap:"20px"}}>
        <button style={{color:"white", backgroundColor:"black"}} onClick={()=> dispath({type:"INC"})}>Increase</button>
        <button style={{color:"white", backgroundColor:"black"}} onClick={(()=> dispath({type:"DEC"}))}>Decrease</button>
    </div>

    </div>
)




}