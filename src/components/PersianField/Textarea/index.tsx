import { toEnglishDigits } from "msk-utils";
import Textarea from "~/common/Textarea";
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
 * @name Textarea component
 */
const PersianFieldTextarea = (props: PersianFormFieldProps<HTMLTextAreaElement>) => {
    return <Textarea cols={30} rows={5} dir="rtl" formatValue={formatValue} resetValue={resetValue} {...props} />;
};

export default PersianFieldTextarea;
