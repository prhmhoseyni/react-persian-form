import { formatCellphoneNumber, toEnglishDigits, toPersianDigits } from "msk-utils";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @name formatValue
 * @description how to show value for user
 */
function formatValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return toPersianDigits(formatCellphoneNumber(value ?? ""));
}

/**
 * @name resetValue
 * @description how to store value on react hook form
 */
function resetValue(value: string) {
    value = toEnglishDigits(value ?? "").replace(/[^0-9]+/g, "");
    return value.slice(0, 11);
}

/**
 * @name PersianFieldCellphone component
 */
const PersianFieldCellphone = (props: PersianFormFieldProps<HTMLInputElement>) => {
    return <Input type="text" inputMode="tel" dir="ltr" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldCellphone;
