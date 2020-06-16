import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import generateMatrix from '../../utils/generateMatrix';
import {
  sum, sub, mult, det,
} from '../../utils/operations';
import Matrix from '../Matrix';
import Result from '../Result';
import './styles.css';
import logo from '../../assets/images/logo.png';

function Operation({
  title, option, history, store, dispatch,
}) {
  const [row1, setRow1] = useState(0);
  const [row2, setRow2] = useState(0);
  const [column1, setColumn1] = useState(0);
  const [column2, setColumn2] = useState(0);
  const [release1, setRelease1] = useState(false);
  const [release2, setRelease2] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [result, setResult] = useState(false);
  const [calc, setCalc] = useState(false);

  function clear() {
    setResult(false);
    setCalc(false);
    setRow1(0);
    setRow2(0);
    setColumn1(0);
    setColumn2(0);
    setRelease1(false);
    setRelease2(false);
    setError1(false);
    setError2(false);
    dispatch({
      type: 'default',
    });
  }


  function calculate() {
    if (option !== 'det') {
      const matrix1 = generateMatrix(store.matrix1);
      const matrix2 = generateMatrix(store.matrix2);

      console.log({ matrix1: store.matrix1, matrix2: store.matrix2 });

      if (matrix1.length && matrix2.length) {
        if (option === 'sum') {
          const resultAll = sum(matrix1, matrix2);
          console.log({ resultAll });
          setCalc(true);
          setResult(resultAll);
        }
        if (option === 'sub') {
          const resultAll = sub(matrix1, matrix2);
          setCalc(true);
          setResult(resultAll);
        }
        if (option === 'multi') {
          const resultAll = mult(matrix1, matrix2);
          setCalc(true);
          setResult(resultAll);
        }
      }
    } else {
      const matrix1 = generateMatrix(store.matrix1);

      if (matrix1.length) {
        const resultAll = det(matrix1);
        setCalc(true);
        setResult(resultAll);
      }
    }
  }
  function getRules() {
    const operations = {
      sum: () => {
        if ((row2 > 0 && row2 <= 5 && column2 > 0 && column2 <= 5)) {
          if (row1 === row2 && column1 === column2) {
            setError2(false);
            setRelease2(true);
          } else {
            setRelease2(false);
            setError2('Para a operação soma, as matrizes devem ser do mesmo tipo!');
          }
        } else {
          setRelease2(false);
          setError2('Matriz inválida!');
        }
      },
      sub: () => {
        if ((row2 > 0 && row2 <= 5 && column2 > 0 && column2 <= 5)) {
          if (row1 === row2 && column1 === column2) {
            setError2(false);
            setRelease2(true);
          } else {
            setRelease2(false);
            setError2('Para a operação soma, as matrizes devem ser do mesmo tipo!');
          }
        } else {
          setRelease2(false);
          setError2('Matriz inválida!');
        }
      },
      multi: () => {
        if ((row2 > 0 && row2 <= 5 && column2 > 0 && column2 <= 5)) {
          if (column1 === row2) {
            setError2(false);
            setRelease2(true);
          } else {
            setRelease2(false);
            setError2('Para a operação multiplicação, o numero de colunas da matriz A deve ser igual ao número de linhas que a matriz B');
          }
        } else {
          setRelease2(false);
          setError2('Matriz inválida!');
        }
      },
      det: () => {
        if ((row2 > 0 && row2 <= 5 && column2 > 0 && column2 <= 5)) {
          setError2(false);
          setRelease2(true);
        } else {
          setRelease2(false);
          setError2('Matriz inválida!');
        }
      },
    };
    return operations[option];
  }

  function renderMatrix1() {
    if (Number(row1) && Number(column1)) {
      if (row1 > 0 && row1 <= 5 && column1 > 0 && column1 <= 5) {
        setError1(false);
        setRelease1(true);
      } else { setError1(true); }
    } else setError1(true);
  }

  function renderMatrix2() {
    if (Number(row2) && Number(column2)) {
      const verify = getRules(option);
      verify();
    } else setError2('matriz deve ser numérica');
  }
  return (
    <div className="container-operation">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        type="button"
        className="back"
        onClick={() => {
          dispatch({
            type: 'default',
          });
          history.goBack();
        }}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} size="1x" />
        {' '}
        Voltar
      </button>
      <div className="title">
        {title}
        {' '}
        de Matrizes
      </div>
      <div className="container-info">
        <div className="info">
          <div className="information">
            Informe a quantidade de linhas e colunas da primeira matriz sendo no máximo do tipo 5x5:
          </div>
          <div className="options-input">
            <input
              type="text"
              className="row"
              placeholder="linhas"
              required
              value={row1}
              onChange={(e) => setRow1(e.target.value)}
            />
            X
            <input
              type="text"
              className="column"
              placeholder="colunas"
              required
              value={column1}
              onChange={(e) => setColumn1(e.target.value)}
            />
          </div>


          <button type="button" className="btn" onClick={renderMatrix1}>gerar matriz A</button>
          {error1 && <div className="error">Matriz inválida</div>}

          {release1 && <Matrix rows={row1} columns={column1} sequence="first" />}
        </div>

        {option !== 'det' && (
          <div className="info">
            <div className="information">
              Informe a quantidade de linhas e colunas da segunda matriz
              sendo no máximo do tipo 5x5:
            </div>
            <div className="options-input">
              <input
                type="text"
                className="row"
                placeholder="linhas"
                required
                value={row2}
                onChange={(e) => setRow2(e.target.value)}
              />
              X
              <input
                type="text"
                className="column"
                placeholder="colunas"
                required
                value={column2}
                onChange={(e) => setColumn2(e.target.value)}
              />

            </div>


            <button type="button" className="btn" onClick={renderMatrix2}>gerar matriz B</button>

            {error2 && <div className="error">{error2}</div>}

            {release2 && <Matrix rows={row2} columns={column2} sequence="second" />}
          </div>
        )}


        <div className="btns">
          <button type="button" className="btn" onClick={calculate}>Calcular</button>
          <button type="button" className="btn" onClick={clear}>Limpar</button>
        </div>
        {calc && (<div> Resultado</div>)}
        { result && (
        <div>
          {option !== 'det' ? (
            <Result matrix={result} />
          ) : (
            <div className="result">
              {result}
            </div>
          )}
        </div>
        ) }

      </div>

    </div>
  );
}


export default connect((state) => ({ store: { ...state } }))(Operation);
