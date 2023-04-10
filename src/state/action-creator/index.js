export const username = (name)=>{
   return (dispatch)=>{
    dispatch({
        type:'user',
        payload:name
    })
  }
}

export const customername = (name)=>{
    return (dispatch)=>{
        dispatch({
            type:'customer',
            payload:name
        })
    }
}