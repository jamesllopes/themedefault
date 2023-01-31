import { useState } from 'react'
import { Button } from './styles/components/_Button'
import { Radio } from './components/Radio'
import { Input } from './components/Input'
import { Dialog } from './components/Dialog'
import { ImUserCheck } from "react-icons/im"

function App() {

  return (
    <div className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center"
      }}>
      <Button
        variant='primary'
        bg='blue.20'>ABC</Button>

      <Radio />
      <Dialog>
        <Dialog.HeaderRow>
          Basic dialog title
        </Dialog.HeaderRow>
        <Dialog.Body>
          A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
        </Dialog.Body>
        <Dialog.Footer>
          <>Action 2</>
          <>Action 1</>


        </Dialog.Footer>
      </Dialog>

      <Dialog>
        <Dialog.HeaderColumn>
          <ImUserCheck
            size={20} />
          Dialog with hero icon
        </Dialog.HeaderColumn>
        <Dialog.Body>
          A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
        </Dialog.Body>
        <Dialog.Footer>
          <>Action 2</>
          <>Action 1</>


        </Dialog.Footer>
      </Dialog>


    </div>
  )
}

export default App
