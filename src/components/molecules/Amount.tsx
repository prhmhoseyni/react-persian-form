import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function Amount(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()); // to-en-digit
        const removeExtraCharacters = Number(value.replace(/[^0-9]+/g, "")); // remove-characters
        return removeExtraCharacters ? Intl.NumberFormat().format(removeExtraCharacters) : ""; // format-amount
    }

    function resetValue(value: string): number {
        return Number((value ?? "").replace(/[^0-9]+/g, "")); // remove-characters
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
