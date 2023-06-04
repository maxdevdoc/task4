import React, { useEffect, useState } from 'react';
import module from './UsersStr.module.css'

function UsersStr(props) {
  const[arr, set_arr] = useState(false) 

  useEffect(() => {
    set_arr(props.bool_arr);
  }, [props.bool_arr]);
  
  let a = arr


  
  return (
    <>
        <table className={module.table}>
          <tr>
            <td>
              <input type="checkbox" name={props.id} State={a}/>
            </td>
            <td className={module.t}>{props.id}</td>
            <td className={module.t}>{props.name}</td>
            <td className={module.t}>{props.email}</td>
            <td className={module.t}>{props.data_registr}</td>
            <td className={module.t}>{props.data_last_login}</td>
            <td className={module.t}>{props.status}</td>
          </tr>  
      </table>

    </>
  );
}

export default UsersStr;