/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


function Matrix({
  rows: qntdRows, columns: qntdColumns, dispatch, store, sequence,
}) {
  function getKey(object, key) {
    const allKeys = Object.getOwnPropertyNames(object);
    return allKeys.includes(key);
  }
  function RenderMatrix() {
    if (qntdRows > 0 && qntdColumns > 0) {
      const rows = [];
      const columns = [];
      for (let i = 1; i <= qntdRows; i += 1) {
        rows.push('i');
      }
      for (let j = 1; j <= qntdColumns; j += 1) {
        columns.push('j');
      }
      const matrix = {};
      function dispatchMatrix() {
        if (getKey(matrix, `${rows.length}x${columns.length}`)) {
          if (sequence === 'first') {
            dispatch({
              type: 'matrix1',
              matrix1: matrix,
            });
          } else {
            dispatch({
              type: 'matrix2',
              matrix2: matrix,
            });
          }
        }
      }

      return (

        <div className="container-all">

          <form className="container-rows">
            <div className="left" />
            {rows.map((row, ind) => (
              <div className="container-columns" key={ind}>
                {columns.map((col, index) => (
                  <input
                    type="text"
                    key={index}
                    onBlur={dispatchMatrix}
                    className={`column ${ind + 1}x${index + 1}`}
                    value={
                      sequence === 'first'
                        ? getKey(store.matrix1, `${ind + 1}x${index + 1}`)
                          ? store.matrix1[`${ind + 1}x${index + 1}`]
                          : matrix[`${ind + 1}x${index + 1}`]
                        : getKey(store.matrix2, `${ind + 1}x${index + 1}`)
                          ? store.matrix2[`${ind + 1}x${index + 1}`]
                          : matrix[`${ind + 1}x${index + 1}`]
}

                    onChange={(e) => {
                      matrix[`${ind + 1}x${index + 1}`] = Number(e.target.value);
                    }}

                  />
                ))}
              </div>
            ))}
            <div className="right" />
          </form>

        </div>

      );
    }
    return (<div>Informe uma matriz válida</div>);
  }


  return (
    <RenderMatrix />
  );
}


export default connect((state) => ({ store: { ...state } }))(Matrix);
