/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/home.png';
import './styles.css';

function Main({ history }) {
  const [view, setView] = useState(false);

  function to(route) {
    const options = {
      sum: () => {
        console.log(logo);
        history.push('/sum');
      },
      subtraction: () => {
        history.push('/subtraction');
      },
      multiplication: () => {
        history.push('/multiplication');
      },
      determinant: () => {
        history.push('/determinant');
      },
    };

    const runTo = options[route];
    runTo();
  }

  function viewOtions() {
    const options = document.querySelector('.options');
    const optionView = document.querySelector('.optionView');

    if (view) {
      options.style.left = '-100%';
      setView(false);
    } else {
      setView(true);
      options.style.left = '0';
      optionView.style.left = '-100%';
    }
  }

  function closeView() {
    const options = document.querySelector('.options');
    const optionView = document.querySelector('.optionView');
    options.style.left = '-100%';
    optionView.style.left = '0';
    setView(false);
  }
  return (
    <div className="container">
      <div className="optionView" onClick={() => viewOtions()}>
        <FontAwesomeIcon icon={faBars} size="3x" />
      </div>
      <div className="options">
        <div className="close" onClick={() => closeView()}>
          <FontAwesomeIcon icon={faWindowClose} size="2x" />
        </div>
        <div className="option" onClick={() => to('sum')}>
          Soma de Matrizes
        </div>
        <div className="option" onClick={() => to('subtraction')}>
          Subtração de Matrizes
        </div>
        <div className="option" onClick={() => to('multiplication')}>
          Multiplicação de Matrizes
        </div>
        <div className="option" onClick={() => to('determinant')}>
          Determinantes
        </div>

      </div>

      <div className="info-app">
        <img src={logo} alt="Logo" className="logo" />
        <div className="text">
          <p>O app Matrix Master, foi feito para fazer cálculos simples de Matrizes.</p>
          <p>
            Para começar usar
            é bem simples, clique sobre a operação desejada no menú ao lado, e será
            redirecionado para fazer as operações.

          </p>


        </div>
      </div>

    </div>
  );
}

export default Main;
