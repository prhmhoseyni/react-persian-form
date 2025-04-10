import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function Text(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()); // to-en-digit
        return value;
    }

    function resetValue(value: string): string {
        value = (value ?? "").toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()); // to-en-digit
        return value;
    }

    return (
        <Input
            type="text"
            inputMode="text"
            name={name}
            control={control}
            formatValue={formatValue}
            resetValue={resetValue}
            {...rest}
        />
    );
}
