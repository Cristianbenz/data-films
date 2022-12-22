import { useField } from "formik";
import React from "react";

function Input({ label, ...rest }: { label: string, type: string, name: string, placeholder: string }) {
    const [field, meta] = useField(rest)
  return (
    <>
      <label htmlFor={label} className='flex flex-col gap-3 w-full'>
        {label}
        <input {...field} {...rest} className={`${Boolean(meta.touched && meta.error) ? 'border-secondary' : 'border-gray-500'} border-solid border-2 p-3 rounded-lg text-fontSecondary w-full `} />
        {Boolean(meta.touched && meta.error) && (
          <span className="text-secondary">{meta.error}</span>
        )}
      </label>
    </>
  );
}

export default Input;
