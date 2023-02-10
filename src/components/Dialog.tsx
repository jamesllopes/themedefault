import * as ReactDialog from "@radix-ui/react-dialog";
import {
    DialogBody,
    DialogBox,
    DialogFooter,
    DialogHeaderColumn,
    DialogHeaderRow,
    DialogOverlay,
} from "../styles/components/_Dialog";

type Props = {
    children?: JSX.Element | string | any;
    isOpen?: boolean;
    setIsOpen?: any;
}

export const Dialog = ({ children, isOpen, setIsOpen, ...props }: Props) => {
    return (
        <>
            <ReactDialog.Root
                open={isOpen}>
                {/* <DialogOverlay /> */}
                <ReactDialog.Portal>
                    {/* <DialogContent> */}
                    <DialogBox {...props}>{children}</DialogBox>
                    {/* </DialogContent> */}
                </ReactDialog.Portal>
            </ReactDialog.Root>
        </>
    );
};

Dialog.HeaderRow = function HeaderRow({ children, ...props }: Props) {
    return (
        <>
            <DialogHeaderRow {...props}>{children}</DialogHeaderRow>
        </>
    );
};

Dialog.HeaderColumn = function HeaderColumn({ children, ...props }: Props) {
    return (
        <>
            <DialogHeaderColumn {...props}>{children}</DialogHeaderColumn>
        </>
    );
};

Dialog.Body = function Body({ children, ...props }: Props) {
    return (
        <>
            <DialogBody {...props}>{children}</DialogBody>
        </>
    );
};

Dialog.Footer = function Footer({ children, ...props }: Props) {
    return (
        <>
            <DialogFooter>{children}</DialogFooter>
        </>
    );
};

Dialog.ButtonOpen = function ButtonOpen({ children, ...props }: Props) {
    return (
        <>
            <ReactDialog.Trigger asChild>{children}</ReactDialog.Trigger>
        </>
    );
};

Dialog.Close = function Close({ children, ...props }: Props) {
    return (
        <>
            <ReactDialog.Close asChild>{children}</ReactDialog.Close>
        </>
    );
};
