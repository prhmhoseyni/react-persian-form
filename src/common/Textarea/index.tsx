import { useEffect, useState, type DetailedHTMLProps, type ReactNode, type TextareaHTMLAttributes } from "react";
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
    startAdornment?: ReactNode;
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
        startAdornment,
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
        <div className="flex flex-col text-start gap-2">
            <label htmlFor={props.name} className="text-prose-primary text-label3">
                {label}
            </label>

            <div className="w-full relative">
                <textarea
                    ref={controller.field.ref}
                    id={name}
                    name={name}
                    value={value}
                    onChange={(event) => {
                        controller.field.onChange(event.target.value ? resetValue(event.target.value as string) : null);
                    }}
                    className={clsx(
                        "persian-field",
                        { "persian-field--secondary": variant === "secondary" },
                        { "persian-field--error": Boolean(controller.fieldState?.error) },
                        { "!ps-9": startAdornment },
                        className,
                    )}
                    {...rest}
                />

                {startAdornment && (
                    <div className={clsx("absolute top-3", props.dir === "rtl" ? "start-3" : "end-3")}>{startAdornment}</div>
                )}
            </div>

            <div className="flex flex-col">
                <p className="text-prose-hint text-caption2">{helperMessage}</p>
                <p className="text-prose-danger text-caption2">{controller.fieldState?.error?.message}</p>
            </div>
        </div>
    );
}
