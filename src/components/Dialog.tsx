import { ActionFooter2, ActionFooter1, DialogBody, DialogBox, DialogFooter, DialogHeaderRow, DialogHeaderColumn, TextBody, TextHeader } from '../styles/components/_Dialog'

type Props = {
    children?: JSX.Element | string | any;
}

export const Dialog = ({ children, ...props }: Props) => {

    return (
        <>
            <DialogBox
                {...props}>
                {children}
            </DialogBox>
        </>
    )
}

Dialog.HeaderRow = function HeaderRow({ children, ...props }: Props) {

    return (
        <>
            <DialogHeaderRow
                {...props}
            >
                <TextHeader>
                    {children}
                </TextHeader>
            </DialogHeaderRow>
        </>
    )
}

Dialog.HeaderColumn = function HeaderColumn({ children, ...props }: Props) {

    return (
        <>
            <DialogHeaderColumn
                {...props}
            >
                {children[0]}
                <TextHeader>
                    {children[1]}
                </TextHeader>
            </DialogHeaderColumn>
        </>
    )
}

Dialog.Body = function Body({ children, ...props }: Props) {

    return (
        <>
            <DialogBody
                {...props}
            >
                <TextBody>
                    {children}
                </TextBody>
            </DialogBody>
        </>
    )
}

Dialog.Footer = function Footer({ children, ...props }: Props) {

    return (
        <>
            <DialogFooter
                {...props}>
                <ActionFooter2>{children[0]}</ActionFooter2>
                <ActionFooter1>{children[1]}</ActionFooter1>
            </DialogFooter>
        </>
    )
}