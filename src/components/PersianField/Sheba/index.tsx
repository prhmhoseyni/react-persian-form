import { formatShebaNumber, toEnglishDigits, toPersianDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return toPersianDigits(formatShebaNumber(value ?? ""));
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return value.slice(0, 24);
}

/**
 * @name PersianFieldSheba component
 */
const PersianFieldSheba = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="numeric" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldSheba;
