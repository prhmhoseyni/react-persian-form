import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function Sheba(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters

        return (value ?? "").split("").reduce((acc, cur, currentIndex) => {
            // format-sheba
            acc += ([2, 6, 10, 14, 18, 22].includes(currentIndex) ? " " : "") + cur;
            return acc;
        }, "");
    }

    function resetValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters
        return value.slice(0, 24);
    }

    return (
        <Input
            type="text"
            inputMode="numeric"
            dir="ltr"
            name={name}
            control={control}
            formatValue={formatValue}
            resetValue={resetValue}
            {...rest}
        />
    );
}
