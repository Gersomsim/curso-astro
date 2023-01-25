import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function button(){
  const [ suscribe, setSuscribe ] = useState(false)
  const notify = () => toast('Wow is a notification');

  return  (
    <div>
      <button
        onClick={notify}
      >Notify
      </button>
      <ToastContainer />
    </div>
  )
}

export default button;