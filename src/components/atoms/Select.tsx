import type { InputHTMLAttributes } from "react";
import { type Control, useController } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
    /** * field name */
    name: string;
    /** * react hook form control */
    control: Control<any>;
    /** * input color */
    variant?: "primary" | "secondary";
    /** * select options */
    options: { label: string; value: string | number | readonly string[] | undefined }[];
}

export default function Select(props: Props) {
    const { name, control, variant: inputColor, options, ...rest } = props;

    const controller = useController({ name, control });

    return (
        <select
            id={name}
            name={name}
            ref={controller.field.ref}
            value={controller.field.value}
            onChange={controller.field.onChange}
            onBlur={controller.field.onBlur}
            className={["w-full form-control", inputColor === "secondary" ? "form-control-secondary" : ""]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
