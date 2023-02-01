import { useState } from 'react'
import { Button } from './styles/components/_Button'
import { Radio } from './components/Radio'
import { Input } from './components/Input'
import { Dialog } from './components/Dialog'
import { ImUserCheck } from "react-icons/im"
import { Switch } from './components/Switch'
import { Checkbox } from './components/Checkbox'

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
      <Switch />

      <Checkbox
        variant={"primary"}>
        Primary
      </Checkbox>
      <Checkbox
        variant={"secondary"}>
        Secondary
      </Checkbox>

      <Checkbox
        variant={"disable"}>
        Disable
      </Checkbox>

      <Checkbox
        variant={"disable"}
        bg={"disable"}>
        Disable
      </Checkbox>


      <Checkbox
        variant={"secondary"}
        bg={"secondary"}>
        Disable
      </Checkbox>

      <Checkbox
        variant={"primary"}
        bg={"primary"}>
        Primary
      </Checkbox>

    </div>
  )
}

export default App
