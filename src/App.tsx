import { useState } from 'react'
import { Button } from './styles/components/_Button'
import { Radio } from './components/Radio'

function App() {

  return (
    <div className="App"
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center"
      }}>
      <Button
        variant='primary'
        bg='blue.20'>ABC</Button>

      <Radio />
    </div>
  )
}

export default App
