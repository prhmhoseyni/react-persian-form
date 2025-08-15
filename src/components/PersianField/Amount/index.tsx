import { formatAmount, toEnglishDigits, toPersianDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string): string {
    value = toEnglishDigits(value ?? "");
    const removeExtraCharacters = Number(value.replace(/[^0-9]+/g, "")); // remove-characters
    return removeExtraCharacters ? toPersianDigits(formatAmount(removeExtraCharacters)) : ""; // format-amount
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string): number {
    return +toEnglishDigits(value ?? "").replace(/[^0-9]+/g, ""); // remove-characters
}

/**
 * @name PersianFieldAmount component
 */
const PersianFieldAmount = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="numeric" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldAmount;
