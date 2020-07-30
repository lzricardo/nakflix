import React from "react";

function FormField({label, name, value, type, onChange}) {
  return(
    <div>
      <label>
        {label}:
        {
          (type === 'textarea') ?
            <textarea
              name={name}
              value={value}
              onChange={onChange}
            /> :
            <input
              name={name}
              value={value}
              type={type}
              onChange={onChange}
            />
        }

      </label>
    </div>
  );
}

export default FormField;