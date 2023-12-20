// Form.js
import React, { useState, useEffect } from 'react';
import useForm from "./UserForm";
import TextField from '@mui/material/TextField';
import "./main.css";

const FORM_ENDPOINT = "http://127.0.0.1:8000/api";

const calculateFuelConsumption = (plane) => {
  // Your logic to calculate fuel consumption based on plane data
  return plane.fuelconsumption;/* calculated value */;
};

const calculateFlyMinutes = (plane) => {
  // Your logic to calculate fly minutes based on plane data
  return plane.flyminutes;/* calculated value */;
};

const Form = () => {
  const additionalData = {};
  const [planes, setPlanes] = useState([
    {
      planeid: 0,
      planename: "",
      passengers: 0,
      tankcapacity: 0,
      fuelconsumption: 0,
      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
        {
	      planeid: 0,
	      planename: "",
	      passengers: 0,
	      tankcapacity: 0,
	      fuelconsumption: 0,
	      flyminutes: 0
    },
  ]);

  const addPlane = event => {
    event.preventDefault();
    setPlanes(prevPlanes => [
      ...prevPlanes,
      {
        planeid: 0,
        planename: "",
        passengers: 0,
        tankcapacity: 0,
        fuelconsumption: 0,
        flyminutes: 0
      },
    ]);
  };

  const removePlane = index => {
    setPlanes(prevPlanes => {
      const updatedPlanes = [...prevPlanes];
      updatedPlanes.splice(index, 1);
      return updatedPlanes;
    });
  };


  const handlePlaneChange = (index, field, value) => {

    setPlanes(prevPlanes => {
      const updatedPlanes = [...prevPlanes];
      updatedPlanes[index] = {
        ...updatedPlanes[index],
        [field]: value,
      };

      // Calculate and update fuelconsumption and flyminutes
      updatedPlanes[index].fuelconsumption = calculateFuelConsumption(updatedPlanes[index]);
      updatedPlanes[index].flyminutes = calculateFlyMinutes(updatedPlanes[index]);



      return updatedPlanes;
    });
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
    setPlanes,
  });

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={(e) => handleSubmit(e, planes)}
      method="POST"
    >
      <div>Plane Fuel Consumption & Fly Minutes</div>
      <div className="parent-div">
        <div className="child-div1">Id</div>
        <div className="child-div2">Name</div>
        <div className="child-div3">Passengers</div>
        <div className="child-div4">Fuel</div>
        <div className="child-div5">Fly Minutes</div>
        <div className="child-div6"></div>

      </div>

      {planes.map((plane, index) => (
        <div className="parent-div" key={index}>
          <div className="child-div1">
            <TextField
              size="small"
              type="number"
              value={plane.planeid}
              onChange={(e) => handlePlaneChange(index, 'planeid', e.target.value)}
              style={{ width: 100, color: '#000', background: '#FFF' }}
            />
          </div>
          <div className="child-div2">
            <input
              type="text"
              name="name"
              value={plane.planename}
              onChange={(e) => handlePlaneChange(index, 'planename', e.target.value)}
              style={{ width: 200, color: '#000', background: '#FFF' }}
            />
          </div>
          <div className="child-div3">
            <TextField
              size="small"
              type="number"
              value={plane.passengers}
              onChange={(e) => handlePlaneChange(index, 'passengers', e.target.value)}
              style={{ width: 100, color: '#000', background: '#FFF' }}
            />
          </div>
          <div className="child-div4" id={`fuelconsumption-${index}`}>
            {plane.fuelconsumption}
          </div>
          <div className="child-div5" id={`flyminutes-${index}`}>
            {plane.flyminutes}
          </div>
          <div className="child-div6">
            <button
              className="active:bg-red-600 hover:shadow-lg focus:outline-none px-2 py-1 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none"
              onClick={() => removePlane(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {status !== 'loading' && (
        <>
          <br />
          <div className="pt-0 mb-3" spacing="2">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
              onClick={addPlane}
            >
              Add Plane
            </button>

            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
              type="submit"
            >
              Calculate Fuel Usage
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;