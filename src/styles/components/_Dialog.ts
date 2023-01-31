import styled from "styled-components";

export const DialogBox = styled.div`
    width: 300px;
    padding: 24px;
    background: ${(props) => props.theme.background[90]};
    border-radius: 16px;
    color: ${(props) => props.theme.gray[100]};
`

export const DialogHeaderRow = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`

export const DialogHeaderColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
`

export const DialogBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

export const TextHeader = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.gray[50]};
`

export const TextBody = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.gray[20]};
`

export const DialogFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
`

export const ActionFooter1 = styled.button`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.blue[80]};
    border: none;
    background: none;
    cursor: pointer;
`

export const ActionFooter2 = styled.button`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.gray[100]};
    border: none;
    background: none;
    cursor: pointer;
`

