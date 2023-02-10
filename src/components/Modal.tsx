import { useState } from "react"
import { Dialog } from "./Dialog"

export const Modal = ({ isOpen, setIsOpen }: { isOpen?: boolean; setIsOpen?: any; }) => {

    return (
        <Dialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <Dialog.HeaderRow>
                <h1>aaaa</h1>
            </Dialog.HeaderRow>
            <Dialog.Body>
                <h1>aaaa</h1>
            </Dialog.Body>

            <Dialog.Footer>
                <h2>aaaa</h2>
            </Dialog.Footer>

        </Dialog>
    )
}