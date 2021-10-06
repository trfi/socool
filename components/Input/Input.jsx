import React from 'react'

const Input = ({ placeholder, label, register, required, type, children }) => {
  return (
    <div className="w-full relative">
      {
        !placeholder && 
        <label htmlFor="default" className="text-gray select-none font-semibold block mb-2">{ label }</label>
      }
      {children}
      <input
        {...register(label, { required })}
        type={type || 'text'}
        placeholder={placeholder && label}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  )
}

export default Input