import React from 'react'

function Name({ name, setName, quantity, setQuantity }) {
  return (
    <div className="mx-auto my-5 w-full flex justify-between">
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-solid border-[1px] border-black p-1 rounded-md w-1/2 mr-2"
      />
      <input
        type="number"
        placeholder="Quantity of shirts..."
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border-solid border-[1px] border-black rounded-md w-1/2"
      />
    </div>
  )
}

export default Name
