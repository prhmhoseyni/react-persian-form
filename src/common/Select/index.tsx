import { type DetailedHTMLProps, type ReactNode, type SelectHTMLAttributes } from "react";
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
    startAdornment?: ReactNode;
}

/**
 * @name Select component
 */
export default function Select(props: Props) {
    const {
        label,
        helperMessage,
        name,
        control,
        variant = "primary",
        startAdornment,
        className = "",
        children,
        ...rest
    } = props;

    const controller = useController({ name, control });

    return (
        <div className="flex flex-col text-start gap-2">
            <label htmlFor={props.name} className="text-prose-primary text-label3">
                {label}
            </label>

            <div className="w-full relative">
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
                        { "!ps-8": startAdornment },
                        className,
                    )}
                    {...rest}
                >
                    {children}
                </select>

                {startAdornment && <div className="absolute top-1/2 -translate-y-1/2 start-2">{startAdornment}</div>}

                <div className="absolute top-1/2 -translate-y-1/2 end-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M16 10L12 14L8 10"
                            stroke="rgb(var(--react-persian-form-prose-hint))"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col">
                <p className="text-prose-hint text-caption2">{helperMessage}</p>
                <p className="text-prose-danger text-caption2">{controller.fieldState?.error?.message}</p>
            </div>
        </div>
    );
}
