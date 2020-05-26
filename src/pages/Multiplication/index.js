import React from 'react';
import Operations from '../../components/Operation';

export default function Multiplication({ history }) {
  return (
    <div className="container-mult">
      <Operations title="Multiplicação" option="multi" history={history} />
    </div>
  );
}
