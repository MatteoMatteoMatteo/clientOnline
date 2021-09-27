import React, { useState } from 'react';
import './Choose.css';

export default function Choose({ chooseApproach }) {
  return (
    <div className={'approachHolder'}>
      <div className='chooseHeader'>Delay Compensation</div>
      <div className={'delayCompensationHolder'}>
        <div onClick={() => chooseApproach(1)}>Server-Side</div>
        <div onClick={() => chooseApproach(2)}>Client-Side</div>
      </div>
    </div>
  );
}
