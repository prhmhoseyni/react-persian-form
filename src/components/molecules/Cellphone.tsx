import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function Cellphone(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters

        return (value ?? "").split("").reduce((acc, cur, currentIndex) => {
            // format-cellphone-number
            acc += ([4, 7].includes(currentIndex) ? " " : "") + cur;
            return acc;
        }, "");
    }

    function resetValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters
        return value.slice(0, 11);
    }

    return (
        <Input
            type="text"
            inputMode="tel"
            dir="ltr"
            name={name}
            control={control}
            formatValue={formatValue}
            resetValue={resetValue}
            {...rest}
        />
    );
}

// import type { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from "react";
//
// export default function Numeric(props: InputHTMLAttributes<HTMLInputElement>) {
//     const { onChange, onBlur, ...rest } = props;
//
//     const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
//         const copy = { ...event }
//         const value = event.target.value;
//
//         copy.target.value = value.replace(/[^0-9]+/g, "");
//
//         if (onChange) onChange(copy)
//     }
//
//     const handleBlur: FocusEventHandler<HTMLInputElement> = event => {
//         const copy = { ...event }
//         const value = event.target.value;
//
//         copy.target.value = value.replace(/[^0-9]+/g, "");
//
//         if (onBlur) onBlur(copy)
//     }
//
//     return <input type="text" {...rest} onChange={handleChange} onBlur={handleBlur} />
// }

// import type { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from "react";
//
//
// export default function Cellphone(props: InputHTMLAttributes<HTMLInputElement>) {
//     const { onChange, onBlur, ...rest } = props;
//
//
//     const formatValue = (value: string) => {
//         return value.length > 13
//             ? value.slice(0, 13)
//             : value
//                 .replace(/[^0-9]+/g, "")
//                 .split("")
//                 .reduce((acc, cur, currentIndex) => {
//                     acc += (currentIndex === 4 || currentIndex === 7 ? " " : "") + cur;
//                     return acc;
//                 }, "");
//     };
//
//     const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
//         const copy = { ...event }
//         const value = event.target.value;
//         copy.target.value = formatValue(value);
//         if (onChange) onChange(copy)
//     }
//
//     const handleBlur: FocusEventHandler<HTMLInputElement> = event => {
//         const copy = { ...event }
//         const value = event.target.value;
//         copy.target.value = formatValue(value);
//         if (onBlur) onBlur(copy)
//     }
//
//     return <input type="text" {...rest} onChange={handleChange} onBlur={handleBlur} />
// }
