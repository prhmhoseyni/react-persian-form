import { formatBankCardNumber, toEnglishDigits, toPersianDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return toPersianDigits(formatBankCardNumber(value ?? ""));
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return value.slice(0, 16);
}

/**
 * @name PersianFieldBankCard component
 */
const PersianFieldBankCard = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="numeric" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldBankCard;
