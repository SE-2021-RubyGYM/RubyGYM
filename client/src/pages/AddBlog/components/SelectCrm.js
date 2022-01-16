import React from 'react';
import '../styles.scss';
import 'font-awesome/css/font-awesome.min.css';

const SelectCrm = ({ title }) => {
  return (
    <div className='select__root'>
      <span>{title}</span>
      <i class='fa fa-angle-down' aria-hidden='true'></i>
    </div>
  );
};

export default React.memo(SelectCrm);
