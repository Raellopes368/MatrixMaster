import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Operations from '../../components/Operation';

function Sum({ history }) {
  return (
    <div className="container-sum">
      <Operations title="Soma" option="sum" history={history} />
    </div>
  );
}

export default connect((state) => ({ store: { ...state } }))(Sum);
