import Input from "../atoms/Input.tsx";
import type { FormFieldProps } from "../../types";

export default function Number(props: FormFieldProps<HTMLInputElement>) {
    const { name, control, ...rest } = props;

    function formatValue(value: string): number | string {
        return +value ? +value : "";
    }

    function resetValue(value: string): number | string {
        return +value ? +value : "";
    }

    return (
        <Input
            type="number"
            inputMode="decimal"
            dir="ltr"
            name={name}
            control={control}
            formatValue={formatValue}
            resetValue={resetValue}
            onFocus={(e) => {
                e.target.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
            }}
            {...rest}
        />
    );
}
