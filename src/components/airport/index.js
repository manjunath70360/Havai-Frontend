import React from 'react';
import { TiArrowDown } from 'react-icons/ti';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoPencilSharp } from 'react-icons/io5';

import './index.css';

const AirportTable = (props) => {
  const { airports, onClickEdit } = props

  const onClickEditor = (id)=>{
    onClickEdit(id)
  }

  return (
    <div className='airport-table-container'>
      <div className='table-header'>
        <h1 className='title'>
          Airports 
          <button className='add-btn'>+ Add new</button>
        </h1>
        <div className='header-row'>
          <div className='header-checkbox'>
            <input type='checkbox' className='checkbox' />
            <h2>All Airports <TiArrowDown /></h2>
          </div>
          <div className='header-details'>
            <h2>Country</h2>
            <h2>Code</h2>
            <h2 className='last-space'>Terminals</h2>
          </div>
        </div>
      </div>
      {airports.map((airport) => (
        <div key={airport.code} className='table-row'>
          <div className='row-checkbox'>
            <input type='checkbox' className='checkbox' />
            <h2>{airport.airport}</h2>
          </div>
          <div className='row-details'>
            <h2>{airport.country}</h2>
            <h2>{airport.code}</h2>
            <h2>{airport.terminals}</h2>
          </div>
          <div className='row-actions'>
            <button className='edit-btn' onClick={() => onClickEditor(airport.code)}>
              <IoPencilSharp size={20} />
            </button>
            <button className='delete-btn'>
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirportTable;
