import DefaultTextarea from "../atoms/Textarea.tsx";
import type { FormFieldProps } from "../../types";

export default function Textarea(props: FormFieldProps<HTMLTextAreaElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): string {
        value = (value ?? "").toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()); // to-en-digit
        return value;
    }

    function resetValue(value: string): string {
        value = (value ?? "").toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()); // to-en-digit
        return value;
    }

    return <DefaultTextarea name={name} control={control} formatValue={formatValue} resetValue={resetValue} {...rest} />;
}
