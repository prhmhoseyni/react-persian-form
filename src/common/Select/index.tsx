import { type DetailedHTMLProps, type SelectHTMLAttributes } from "react";
import { type Control, useController } from "react-hook-form";
import clsx from "clsx";

/**
 * @name Props for Select component
 */
interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    label: string;
    helperMessage?: string;
    name: string;
    control: Control;
    variant?: "primary" | "secondary";
}

/**
 * @name Select component
 */
export default function Select(props: Props) {
    const { label, helperMessage, name, control, variant = "primary", className = "", children, ...rest } = props;

    const controller = useController({ name, control });

    return (
        <div className="react-persian-form__wrapper">
            <label htmlFor={props.name} className="react-persian-form__label">
                {label}
            </label>

            <select
                ref={controller.field.ref}
                id={name}
                name={name}
                value={controller.field.value}
                onChange={(event) => {
                    controller.field.onChange(event.target.value);
                }}
                className={clsx(
                    "react-persian-form__form-control",
                    { "react-persian-form__form-control--secondary": variant === "secondary" },
                    { "react-persian-form__form-control--error": Boolean(controller.fieldState?.error) },
                    className,
                )}
                {...rest}
            >
                {children}
            </select>

            <div>
                <p className="react-persian-form__helper-message">{helperMessage}</p>
                <p className="react-persian-form__error-message">{controller.fieldState?.error?.message}</p>
            </div>
        </div>
    );
}
