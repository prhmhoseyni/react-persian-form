import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function BankCard(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters

        return (value ?? "").split("").reduce((acc, cur, currentIndex) => {
            // format-bank-card
            acc += ([4, 8, 12].includes(currentIndex) ? " " : "") + cur;
            return acc;
        }, "");
    }

    function resetValue(value: string): string {
        value = (value ?? "").replace(/[^0-9]+/g, ""); // remove-characters
        return value.slice(0, 16);
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
