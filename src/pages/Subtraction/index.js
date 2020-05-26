import React from 'react';
import Operations from '../../components/Operation';

export default function Subtraction({ history }) {
  return (
    <div className="container-sub">
      <Operations title="Subtração" option="sub" history={history} />
    </div>
  );
}
