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
        <div className="flex flex-col text-start gap-2">
            <label htmlFor={props.name} className="text-react-persian-form-prose-primary text-react-persian-form-label">
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
                    "persian-field",
                    { "persian-field--secondary": variant === "secondary" },
                    { "persian-field--error": Boolean(controller.fieldState?.error) },
                    className,
                )}
                {...rest}
            >
                {children}
            </select>

            <div className="flex flex-col">
                <p className="text-react-persian-form-prose-hint text-react-persian-form-caption">{helperMessage}</p>
                <p className="text-react-persian-form-danger text-react-persian-form-caption">
                    {controller.fieldState?.error?.message}
                </p>
            </div>
        </div>
    );
}
