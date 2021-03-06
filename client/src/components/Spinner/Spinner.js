// Spinner from SpinKit by Tobias Ahlin (slightly modified)
// https://github.com/tobiasahlin/SpinKit/blob/master/css/spinners/8-circle.css

import React from 'react';
import './styles.css';

export default function Spinner({ size = 40, color = `#333` }) {
  const styles = {
    width: size,
    height: size,
    color,
  };
  return (
    <div className="sk-circle" style={styles}>
      <div className="sk-circle1 sk-child" />
      <div className="sk-circle2 sk-child" />
      <div className="sk-circle3 sk-child" />
      <div className="sk-circle4 sk-child" />
      <div className="sk-circle5 sk-child" />
      <div className="sk-circle6 sk-child" />
      <div className="sk-circle7 sk-child" />
      <div className="sk-circle8 sk-child" />
      <div className="sk-circle9 sk-child" />
      <div className="sk-circle10 sk-child" />
      <div className="sk-circle11 sk-child" />
      <div className="sk-circle12 sk-child" />
    </div>
  );
}
