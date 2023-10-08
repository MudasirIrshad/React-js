


export default function incDec(state,action){
    switch(action){
        case "increment":
            return state+1
        default :
        return state-1
    }
}