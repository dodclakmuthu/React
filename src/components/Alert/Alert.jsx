import React, {useState, useEffect} from 'react';

import '../../css/Alert.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Alert = ({ type, message}) => {
  let [visible, setVisible] = useState('block');
  
  let cName,status; 
  switch (type) {
    case 'success':
      status = 'Success!'
      cName = 'success';
      break;
    case 'error' :
      status = 'Failiure!'
      cName = 'fail';
      break;
    case 'warning' :
      status = 'Warning!'
      cName = 'warning';
      break;
    default :
      throw new Error('Unexpected error type');
  }
  useEffect(() => {
    setTimeout(()=>{
      setVisible('none')
    }, 2000)
  }, [])

  return (
    <div className={`alert warning ${cName} ${visible}`} >
      <div className="header">
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <div className="alert-header">{status}</div>
      </div>
      <div className="alert-message">{message}</div>
    </div>
  );
}

export default Alert;
