import { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import { MdError, MdOutlineCancel } from "react-icons/md";
import { InputContainer, InputContent } from "../styles/components/_Input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error: boolean;
    Icon?: IconType;
    watch: string;
    disabled?: boolean;
    handleCleanInput: () => void;
}

export const Input = ({
    error = false,
    Icon,
    watch,
    disabled,
    handleCleanInput,
    ...rest
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <InputContainer
            htmlFor="xd"
            active={isFocused}
            error={error}
            disabled={disabled}
        >
            {Icon && <Icon />}
            <InputContent
                error={error}
                type="text"
                id="xd"
                name="xd"
                placeholder="Input"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
                {...rest}
            />
            {watch.length > 0 && !error ? (
                <MdOutlineCancel
                    size={24}
                    className="cancel"
                    onClick={handleCleanInput}
                />
            ) : error ? (
                <MdError size={24} color="#E8908C" style={{ zIndex: 99 }} />
            ) : null}
        </InputContainer>
    );
};
