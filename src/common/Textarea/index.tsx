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
                        "w-full resize-none min-h-12 text-label2 text-prose-primary border border-gray-400 outline-0 p-2 rounded-lg placeholder:text-prose-hint transition-all ease-in-out duration-300",
                        "disabled:cursor-not-allowed disabled:opacity-40",
                        "focus:border-brand focus:shadow-focus-brand",
                        { "bg-background-secondary": variant === "primary" },
                        { "bg-background-primary": variant === "secondary" },
                        {
                            "!border-danger focus:!border-danger focus:!shadow-focus-danger": Boolean(
                                controller.fieldState?.error,
                            ),
                        },
                        { "!ps-8": startAdornment },
                        className,
                    )}
                    {...rest}
                />

                {startAdornment && <div className="absolute top-3 start-2">{startAdornment}</div>}
            </div>

            <div className="flex flex-col">
                <p className="text-prose-hint text-caption2">{helperMessage}</p>
                <p className="text-prose-danger text-caption2">{controller.fieldState?.error?.message}</p>
            </div>
        </div>
    );
}
