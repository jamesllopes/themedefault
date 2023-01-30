import styled, { css } from "styled-components";

type ButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "destructive" | "link";
    bg:
    | "blue.20"
    | "blue.80"
    | "green.20"
    | "green.100"
    | "red"
    | "orange"
    | string;
};

export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 4px;
    border-radius: 4px;
    border: 2px solid;
    cursor: pointer;

    &:focus {
        border: 2px solid #5ccbfa;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    ${({ bg }) =>
        bg === "blue.20"
            ? css`
                  background: ${({ theme }) => theme.blue[20]};
              `
            : bg === "blue.80"
                ? css`
                  background: ${({ theme }) => theme.blue[80]};
              `
                : bg === "green.20"
                    ? css`
                  background: ${({ theme }) => theme.green[20]};
              `
                    : bg === "green.100"
                        ? css`
                  background: ${({ theme }) => theme.green[100]};
              `
                        : bg === "red"
                            ? css`
                  background: ${({ theme }) => theme.red[100]};
              `
                            : bg === "orange"
                                ? css`
                  background: ${({ theme }) => theme.orange[100]};
              `
                                : css`
                  background: ${bg};
              `}

    ${({ variant }) =>
        variant === "primary" || variant === "secondary"
            ? css`
                  &:hover {
                      filter: brightness(0.8);
                  }
              `
            : variant === "outline" || variant === "destructive"
                ? css`
                  &:hover {
                      filter: brightness(1.5);
                  }
              `
                : variant === "link"
                    ? css`
                  &:hover {
                      text-decoration: underline;
                  }
              `
                    : null}
`;
