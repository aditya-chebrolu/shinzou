'use client';
import React from 'react';
import {
  introContainerStyles,
  dotStyles,
  containerStyles,
  designationContainerStyles,
} from './styles';
// testing github desktop
const Name = () => {
  const PRE = "Hi, I'm".split('');
  const NAME = 'Aditya Chebrolu';
  const DESIGNATION = 'SOFTWARE ENGINEER';
  const [fn, ln] = NAME.split(' ');

  return (
    <div className={containerStyles}>
      <div className={introContainerStyles}>
        <div className='intro'>{PRE}</div>
        <div>
          {fn.split('').map((l, idx) => (
            <div
              className='letter'
              style={{ animationDelay: `${idx * 200}ms` }}
              key={idx}
            >
              {l}
            </div>
          ))}
        </div>
        <div>
          {ln.split('').map((l, idx) => (
            <span
              key={idx}
              className='letter'
              style={{
                animationDelay: `${(idx + fn.length) * 200}ms`,
              }}
            >
              {l}
            </span>
          ))}
          <span
            className={dotStyles}
            style={{ animationDelay: `${(NAME.length + 2) * 200}ms` }}
          >
            .
          </span>
        </div>
      </div>
      <div
        className={designationContainerStyles}
        style={{ animationDelay: `${(NAME.length + 2) * 200}ms` }}
      >
        {DESIGNATION.split('').map((l, idx) => (
          <span key={idx}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default Name;
