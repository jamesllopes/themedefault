import styled, { css } from "styled-components";

type RadioProps = {
    checked: boolean;
}

export const RadioCircle = styled.div<RadioProps>`
    width: 15px;
    height: 15px;
    border: 2px solid #aeaeae;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    cursor: pointer;

    ${({ checked }) =>
        checked ? css`
        border: 2px solid ${({ theme }) => theme.blue[10]};
          `
            : ``
    }

    transition: all 0.3s;

    div {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        transition: all 0.3s;
        ${({ checked }) =>
        checked ? css`
        background: ${({ theme }) => theme.blue[10]};
          `
            : ``
    }
    }
`;