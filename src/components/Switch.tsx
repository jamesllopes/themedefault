import { InputSwitch, SwitchContainer, ToggleSwitch } from "../styles/components/_Switch";

export const Switch = () => {
    return (
        <SwitchContainer>
            <InputSwitch type="checkbox" />
            <ToggleSwitch />
        </SwitchContainer>
    );
};
