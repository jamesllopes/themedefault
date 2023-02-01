import styled from "styled-components";

export const SwitchContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: fit-content;
`;

export const ToggleSwitch = styled.div`
    position: relative;
    width: 52px;
    height: 32px;
    background: #45484f;
    border: 2px solid #8f9199;
    border-radius: 100px;
    padding: 4px;
    transition: 0.3s all linear;

    &:before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        top: 50%;
        left: 4px;
        background: #c4c7d0;
        transform: translate(0, -50%);
        transition: 0.3s all linear;
    }
`;

export const InputSwitch = styled.input`
    display: none;

    &:checked + ${ToggleSwitch} {
        background: ${(props) => props.theme.blue[80]};
        border-color: ${(props) => props.theme.blue[80]};

        &:before {
            width: 24px;
            height: 24px;
            background: ${(props) => props.theme.blue[20]};
            transform: translate(18px, -50%);
        }

        &:hover {
            &:before {
                filter: brightness(1.2);
            }
        }
    }

    &:not(&:checked) + ${ToggleSwitch} {
        &:hover {
            &:before {
                filter: opacity(0.5);
            }
        }
    }
`;
