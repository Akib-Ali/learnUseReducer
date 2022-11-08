const reducer=(count, action)=>{

    switch(action.type){
        case "INC":
            return (count = count+1)

        case "DEC":
            let newcount =0
            count >= 1 ? (newcount = count -1) : (newcount =0)
        return newcount

        default:
            return count
    }

}

export default reducer