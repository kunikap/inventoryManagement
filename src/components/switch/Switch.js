import React from 'react';
import { useId } from "react-id-generator";
import "./Switch.css"

const Switch = ({ isOn, handleToggle, onColor }) => {
  const [htmlId] = useId();
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={htmlId}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
         htmlFor={htmlId}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;