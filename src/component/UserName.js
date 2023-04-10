import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
import actionCreators from '../state'
const UserName = () => {
  const name = useSelector(state=> state.name)
  const dispatch = useDispatch()
  return (
    <div>
    
    <button className="btn btn-primary m-5" onClick={()=>{dispatch(actionCreators.username("Fawad Aslam"))}}> User Name  </button> <p>{name}</p>
      <button className="btn btn-primary m-5" onClick={()=>{dispatch(actionCreators.customername("Hamza Farooq"))}}> customer Name  </button>
    </div>
  )
}

export default UserName
