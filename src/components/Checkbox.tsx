import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text, DivCheckbox } from "../styles/components/_Checkbox"
import { useState } from "react";
import { BsCheck } from "react-icons/bs"

type Props = {
    children: string | JSX.Element;
    variant?: "primary" | "secondary" | "disable";
    bg?:
    | "primary"
    | "disable"
    | "secondary";
}

export const Checkbox = ({ children, variant, bg }: Props) => {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange() {
        setChecked(!checked);
    }

    return (
        <CheckboxContainer
            checked={checked}
            onClick={handleCheckboxChange}
            variant={variant}
            bg={bg}>
            <DivCheckbox
                variant={variant}
                bg={bg}>
                <HiddenCheckbox
                    onChange={handleCheckboxChange}
                    checked={checked}
                    variant={variant}
                    bg={bg}
                />
                <StyledCheckbox
                    checked={checked}
                    variant={variant}
                    bg={bg} >
                    <BsCheck
                        fill="#1C1B1F"
                        className="iconCheck"
                    />

                </StyledCheckbox>
            </DivCheckbox>
            <Text
                variant={variant}
                bg={bg}
                checked={checked}> {children} </Text>
        </CheckboxContainer>
    );
};
