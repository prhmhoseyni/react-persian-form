import { toEnglishDigits, toPersianDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string): string {
    value = toEnglishDigits(value ?? "");
    const removeExtraCharacters = value.replace(/[^0-9]+/g, ""); // remove-characters
    return removeExtraCharacters ? toPersianDigits(removeExtraCharacters) : "";
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string): string {
    return toEnglishDigits(value ?? "").replace(/[^0-9]+/g, ""); // remove-characters
}

/**
 * @name PersianFieldNumeric component
 */
const PersianFieldNumeric = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="text" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldNumeric;
