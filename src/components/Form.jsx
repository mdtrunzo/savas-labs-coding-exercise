import { useState } from 'react'
import React from 'react'
import Name from './formParts/Name'
import ShirtSize from './formParts/ShirtSize'
import ShirtType from './formParts/ShirtType'

function Form() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [size, setSize] = useState('')
  const [type, setType] = useState('')
  const [spanMessage, setSpanMessage] = useState([])
  const [showMessage, setShowMessage] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || quantity === '' || size === '' || type === '') {
      setShowMessage(false)
    }

    setSpanMessage({
      name,
      quantity,
      size,
      type,
    })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Name
          name={name}
          setName={setName}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ShirtSize setSize={setSize} />
        <ShirtType type={type} setType={setType} />
        <div className="flex justify-end my-4 w-full">
          <div className="flex w-2/3">
            <button className="bg-white text-sm border-solid border-[1px] border-black p-2 rounded-md w-1/2 mr-2 cursor-pointer">
              Clear Fields
            </button>
            <button className="bg-buttonBlue text-white text-sm border-solid border-[1px] border-black p-2 rounded-md w-1/2 mr-2 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
      {spanMessage.length !== 0 ? (
        <div className="bg-greenSpan p-4">
          <p className="ml-2 text-sm">
            <span className="font-bold">Hello {spanMessage.name}</span> You want
            {spanMessage.quantity} {spanMessage.size} {spanMessage.type}.{' '}
          </p>
        </div>
      ) : (
        <div className={`${showMessage ? 'hidden' : 'block'}bg-red-400 p-4`}>
          <p className={`${showMessage ? 'hidden' : 'block'} ml-2 text-sm`}>
            Please pick some stuff
          </p>
        </div>
      )}
    </div>
  )
}

export default Form
