import { type InputHTMLAttributes, useEffect, useState } from "react";
import { type Control, useController, useWatch } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    /** * field name */
    name: string;
    /** * react hook form control */
    control: Control<any>;
    /** * input color */
    variant?: "primary" | "secondary";
    /** * how to show value to user */
    formatValue: (value: string) => string;
    /** * how to store value on react hook form */
    resetValue: (value: string) => unknown;
}

export default function Textarea(props: Props) {
    const { name, control, variant: inputColor, formatValue, resetValue, ...rest } = props;

    const [value, setValue] = useState<string>(rest.defaultValue ? formatValue(rest.defaultValue as string) : "");

    const controller = useController({ name, control });
    const watch = useWatch({ name, control }) as string;

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <textarea
            id={name}
            name={name}
            ref={controller.field.ref}
            cols={30}
            rows={5}
            value={value}
            onChange={(event) => {
                controller.field.onChange(event.target.value ? resetValue(event.target.value as string) : null);
            }}
            className={["w-full form-control", inputColor === "secondary" ? "form-control-secondary" : ""]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        ></textarea>
    );
}
