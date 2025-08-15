import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string): string {
    return +value ? value : "";
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string): number | string {
    return +value ? +value : "";
}

/**
 * @name PersianFieldNumber component
 */
const PersianFieldNumber = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="number" inputMode="decimal" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldNumber;
