/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


function Result({ matrix }) {
  function RenderMatrix() {
    return (

      <div className="container-all">
        <form className="container-rows">
          <div className="left" />
          {matrix.map((columns, ind) => (
            <div className="teste">
              <div className="container-columns" key={ind}>
                {columns.map((col, index) => (
                  <input type="text" className="column" readOnly value={col} key={index} />
                ))}
              </div>
            </div>
          ))}

          <div className="right" />

        </form>

      </div>

    );
  }


  return (
    <RenderMatrix />
  );
}


export default connect((state) => ({ store: { ...state } }))(Result);
