import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
import actionCreators from '../state'
import { bindActionCreators } from 'redux'
const UserName = () => {
  const name = useSelector(state=> state.name)
  const dispatch = useDispatch()
  // const actions = bindActionCreators(actionCreators , dispatch)
  const {username,customername} = bindActionCreators(actionCreators , dispatch)

  return (
    <div>
    
    {/* <button className="btn btn-primary m-5" onDoubleClick={()=>{dispatch(actionCreators.customername("Hamza Farooq"))}} onClick={()=>{dispatch(actionCreators.username("Fawad Aslam"))}}> User Name  </button> <p>{name}</p>
      <button className="btn btn-primary m-5" onClick={()=>{dispatch(actionCreators.customername("Hamza Farooq"))}}> customer Name  </button>
    </div> */}
     <button className="btn btn-primary m-5" onClick={()=>{username("Hamza Farooq")}}> User Name  </button> <p>{name}</p>
      <button className="btn btn-primary m-5" onClick={()=>{customername("ali Farooq")}}> customer Name  </button>
    </div>
  )
}

export default UserName
