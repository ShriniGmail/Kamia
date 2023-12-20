// UserForm.js
import { useState,useEffect } from "react";

function useForm({ additionalData,setPlanes }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e, planes) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const finalFormEndpoint = e.target.action;

    const data = planes.map(plane => ({
        planeid: plane.planeid,
        planename: plane.planename,
        passengers: plane.passengers,
      }));

    //alert(JSON.stringify(data));



    fetch(finalFormEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
      mode: 'cors',
    })
      .then(async(response) => {
        if (response.status !== 201) {
          throw new Error(response.statusText);
        }
        var j=await response.json();
        //alert(JSON.stringify(j));
		//setPlanes(JSON.stringfy(j));
        return j;
      })
      .then((data) => {
		setPlanes(data);
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;