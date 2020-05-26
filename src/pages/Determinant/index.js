import React from 'react';
import Operations from '../../components/Operation';

export default function Determinant({ history }) {
  return (
    <div className="container-det">
      <Operations title="Determinante" option="det" history={history} />
    </div>
  );
}
