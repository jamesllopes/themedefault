import styled, { css } from "styled-components";

type LabelProps = {
    variant?: "";
    active: boolean;
    error: boolean;
    disabled?: boolean;
};

type InputProps = {
    error: boolean;
};

export const InputContainer = styled.label<LabelProps>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid;
    border-color: ${(props) =>
        props.active && !props.error
            ? props.theme.blue[80]
            : props.error
                ? props.theme.red[100]
                : props.theme.background[50]};
    border-radius: 4px;
    /* width: 100%; */
    flex: 1;
    margin: 5rem;
    background: #1c1b1f;

    .cancel {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;
        z-index: 99;
        cursor: pointer;

        ${({ disabled }) =>
        disabled
            ? css`
                      opacity: 0.38;
                      cursor: not-allowed;
                  `
            : null}
    }

    svg {
        color: ${(props) =>
        props.active ? props.theme.gray[100] : props.theme.gray[90]};
    }

    &::before {
        content: "Label";
        position: absolute;
        top: -0.5rem;
        left: 0.75rem;

        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 400;
        letter-spacing: 0.4px;
        color: ${(props) =>
        props.active && !props.error
            ? props.theme.blue[80]
            : props.error
                ? props.theme.red[100]
                : props.theme.gray[100]};
        background: inherit;
        z-index: 9;
        padding: 0 0.25rem;

        ${({ disabled }) =>
        disabled
            ? css`
                      opacity: 0.38;
                      cursor: not-allowed;
                  `
            : null}
    }

    &:disabled {
        opacity: 0.38;
    }
`;

export const InputContent = styled.input<InputProps>`
    width: 100%;
    border: 0;
    outline: 0;
    background: 0;

    font-size: 1rem;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.gray[100]};
    caret-color: ${(props) =>
        props.error ? props.theme.red[100] : props.theme.blue[80]};

    &::placeholder {
        color: ${(props) => props.theme.gray[90]};
    }

    &:disabled {
        opacity: 0.38;
    }
`;
