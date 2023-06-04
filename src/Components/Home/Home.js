import React, { useState } from 'react';
import module from './Home.module.css'
import UsersStr from '../UserStr/UsersStr';





function Home() {
    const[bool_arr, set_bool_arr] = useState(false)

    let ar = [ {id:1, name:'Max', email:'mail@gmail.com',
          data_registr: '01.01.01', data_last_login: '02.02.02', status:'status max'},
              {id:2, name:'Natali', email:'mail@gmail.com',
          data_registr: '11.11.11', data_last_login: '12.12.12', status:'i like dick'}, 
              {id:3, name:'Den', email:'mail@gmail.com',
          data_registr: '21.21.21', data_last_login: '22.22.22', status:'fuck'}]

    let ArrData = ar.map(el => <UsersStr id={el.id}
            name={el.name} email={el.email} data_registr={el.data_registr} data_last_login={el.data_last_login}
            status={el.status} bool_arr={bool_arr}/>)   
            console.log({bool_arr})   
  return (
  <>
  <div className={module.tool}>
  <h2>Users</h2>
  <button>Delete</button>
  <button>Button</button>
  <button>unblock</button>
  </div>

<table className={module.table}>
        <tr>
        <td>
        <input type="checkbox" name='id' onClick={()=>{set_bool_arr(!bool_arr)}}/></td>
            
            <td className={module.t}>ID</td>
            <td className={module.t}>Name</td>
            <td className={module.t}>Email</td>
            <td className={module.t}>Registration</td>
            <td className={module.t}>Last login</td>
            <td className={module.t}>Status</td>
        </tr>
        </table>
        <hr></hr>
    {ArrData}


  </>
  )
}

export default Home;
