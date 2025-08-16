import { type InputHTMLAttributes, type DetailedHTMLProps, type ReactNode, useState, useEffect } from "react";
import { type Control, useController, useWatch } from "react-hook-form";
import clsx from "clsx";

/**
 * @name Props for Input component
 */
interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    helperMessage?: string;
    name: string;
    control: Control;
    formatValue: (value: string) => string;
    resetValue: (value: string) => unknown;
    variant?: "primary" | "secondary";
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}

/**
 * @name Input component
 */
export default function Input(props: Props) {
    const {
        label,
        helperMessage,
        name,
        control,
        formatValue,
        resetValue,
        variant = "primary",
        startAdornment,
        endAdornment,
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
                <input
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
                        { "!ps-8": startAdornment },
                        { "!pe-8": endAdornment },
                        className,
                    )}
                    {...rest}
                />

                {startAdornment && (
                    <div className={clsx("absolute top-1/2 -translate-y-1/2", props.dir === "rtl" ? "start-2" : "end-2")}>
                        {startAdornment}
                    </div>
                )}

                {endAdornment && <div className="absolute top-1/2 -translate-y-1/2 end-2">{endAdornment}</div>}
            </div>

            <div className="flex flex-col">
                <p className="text-prose-hint text-caption2">{helperMessage}</p>
                <p className="text-prose-danger text-caption2">{controller.fieldState?.error?.message}</p>
            </div>
        </div>
    );
}
