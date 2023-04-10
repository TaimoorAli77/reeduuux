const reducer =  (state="Who?", action)=>{
    if (action.type==='user'){
        return action.payload
    }
    else if (action.type==='customer'){
        return action.payload
    }
    else {
        return state;
    }
}
export default reducer;