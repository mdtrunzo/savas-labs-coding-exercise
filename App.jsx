import React from 'react'
import Header from './src/components/Header'
import Form from './src/components/Form'

function App() {
  return (
    <div className="mx-auto container p-8">
      <div className="flex flex-col bg-backgroundBlue p-4">
        <Header />
        <hr />
        <Form />
        <hr />
      </div>
    </div>
  )
}

export default App
