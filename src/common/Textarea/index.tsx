import { useEffect, useState, type DetailedHTMLProps, type TextareaHTMLAttributes } from "react";
import { type Control, useController, useWatch } from "react-hook-form";
import clsx from "clsx";

/**
 * @name Props for Textarea component
 */
interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string;
    helperMessage?: string;
    name: string;
    control: Control;
    formatValue: (value: string) => string;
    resetValue: (value: string) => unknown;
    variant?: "primary" | "secondary";
}

/**
 * @name Textarea component
 */
export default function Textarea(props: Props) {
    const {
        label,
        helperMessage,
        name,
        control,
        formatValue,
        resetValue,
        variant = "primary",
        className = "",
        ...rest
    } = props;

    const [value, setValue] = useState<string>(rest.defaultValue ? formatValue(rest.defaultValue as string) : "");

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch, formatValue]);

    return (
        <div className="react-persian-form__wrapper">
            <label htmlFor={props.name} className="react-persian-form__label">
                {label}
            </label>

            <textarea
                ref={controller.field.ref}
                id={name}
                name={name}
                value={value}
                onChange={(event) => {
                    controller.field.onChange(event.target.value ? resetValue(event.target.value as string) : null);
                }}
                className={clsx(
                    "react-persian-form__form-control",
                    { "react-persian-form__form-control--secondary": variant === "secondary" },
                    { "react-persian-form__form-control--error": Boolean(controller.fieldState?.error) },
                    className,
                )}
                {...rest}
            />

            <div>
                {helperMessage && <p className="react-persian-form__helper-message">{helperMessage}</p>}
                {controller.fieldState?.error?.message && (
                    <p className="react-persian-form__error-message">{controller.fieldState.error.message}</p>
                )}
            </div>
        </div>
    );
}
