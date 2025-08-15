import { toEnglishDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string): string {
    value = toEnglishDigits(value ?? "");
    return value;
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string): string {
    value = toEnglishDigits(value ?? "");
    return value;
}

/**
 * @name PersianFieldText component
 */
const PersianFieldText = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="text" dir="rtl" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldText;
