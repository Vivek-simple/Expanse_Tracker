import React from "react";

function Select({
  id,
  label,
  name,
  value,
  onChange,
  error,
  options,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((optionValue, idx) => (
          <option value={optionValue} key={idx}>
            {optionValue}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
