import styled, { css } from 'styled-components';

type ButtonProps = {
    variant?: "primary" | "secondary" | "disable";
    bg?:
    | "primary"
    | "disable"
    | "secondary"
    checked?: boolean
};

export const CheckboxContainer = styled.div<ButtonProps>`
width: auto;
height: 35px;
padding-left: 5px;
margin: 0px 4px;
border-radius: 5px;
gap: 0.2rem;
display: flex;
align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' }) <ButtonProps>`
overflow: hidden;
white-space: nowrap;
width: 1px;
height: 1px;
padding: 0;
`;

export const Text = styled.label<ButtonProps>`
`;
export const DivCheckbox = styled.div<ButtonProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ bg }) =>
        bg === "primary"
            ? css<ButtonProps>`
        background-color: rgba(208, 188, 255, 0.08);
          `
            :
            ``}

    ${({ bg }) =>
        bg === "disable"
            ? css<ButtonProps>`
        background-color: rgba(230, 225, 229, 0.08);
      `
            :
            ``
    }

${({ bg }) =>
        bg === "secondary"
            ? css<ButtonProps>`
            background-color: rgba(242, 184, 181, 0.08);
  `
            :
            ``
    }

`
export const StyledCheckbox = styled.label<ButtonProps>`
width: 18px;
height: 18px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;

${({ variant }) =>
        variant === "primary"
            ? css<ButtonProps>`
            border: 1px solid ${(props) => props.checked ? "none" : ({ theme }) => theme.gray[20]};
            background-color: ${props => props.checked ? ({ theme }) => theme.blue[80] : 'none'};
              `
            :
            ``
    }

    ${({ variant }) =>
        variant === "secondary"
            ? css<ButtonProps>`
            border: 1px solid ${(props) => props.checked ? "none" : ({ theme }) => theme.red[100]};
            background-color: ${props => props.checked ? ({ theme }) => theme.red[100] : 'none'};
              `
            :
            ``
    }

    ${({ variant }) =>
        variant === "disable"
            ? css<ButtonProps>`
        border: 1px solid ${(props) => props.checked ? "none" : ({ theme }) => theme.gray[30]};
        background-color: ${props => props.checked ? ({ theme }) => theme.gray[30] : 'none'};
          `
            :
            ``
    }

.iconCheck {
    display: ${props => props.checked ? 'flex' : 'none'};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
}
    `;