import { useState } from "react"
import { RadioCircle } from "../styles/components/_Radio"

export const Radio = () => {
    const [checked, setChecked] = useState(false)
    return (
        <RadioCircle
            onClick={() => setChecked(!checked)}
            checked={checked}>
            <div>

            </div>
        </RadioCircle>
    )
}