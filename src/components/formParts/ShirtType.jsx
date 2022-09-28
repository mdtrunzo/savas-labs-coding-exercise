import React from 'react'

function ShirtType({ type, setType }) {
  return (
    <div className="mx-auto">
      <div className="flex ">
        <select
          name=""
          id=""
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border-solid border-[1px] border-black p-1 rounded-md w-full mr-2"
        >
          <option value="Select a shirt type.." disabled>
            Select a shirt type..
          </option>
          <option value="Short Sleeve">Short Sleeve</option>
          <option value="Long Sleeve">Long Sleeve</option>
          <option value="V Neck">V Neck</option>
          <option value="Tank Top">Tank Top</option>
        </select>
      </div>
    </div>
  )
}

export default ShirtType
