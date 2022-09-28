import React from 'react'

function ShirtSize({ setSize }) {
  return (
    <div>
      <h3 className="font-bold">Your Shirt Size</h3>
      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <fieldset id="radio-form">
            <input
              type="radio"
              name="radio-form"
              value="Small"
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="">Small</label>
            <input
              type="radio"
              name="radio-form"
              value="Medium"
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="">Medium</label>
            <input
              type="radio"
              name="radio-form"
              value="Large"
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="">Large</label>
            <input
              type="radio"
              name="radio-form"
              value="Extra Large"
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="">Extra Large</label>
            <input
              type="radio"
              name="radio-form"
              value="Double XL"
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="">Double XL</label>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default ShirtSize
