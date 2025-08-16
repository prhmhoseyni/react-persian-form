import * as yup from "yup";
import { toPersianDigits } from "msk-utils";

/**
 * :::: custom validations methods ::::
 */
import "./validations/cellphone.module.ts";
import "./validations/half-space.module.ts";
import "./validations/national-id.module.ts";
import "./validations/only-fa-characters.module.ts";
import "./validations/only-fa-characters-and-digits.module.ts";
import "./validations/postal-code.module.ts";
import "./validations/space.module.ts";

/**
 * :::: custom yup config ::::
 */
yup.setLocale({
    mixed: {
        required: "تکمیل این فیلد اجباری است.",
        notType: "فرمت مقدار وارد شده نامعتبر است.",
    },
    string: {
        email: "آدرس ایمیل وارد شده معتبر نمی‌باشد.",
        min: ({ min }) => "حداقل کارکتر ورودی باید " + toPersianDigits(min) + " باشد.",
        max: ({ max }) => "حداکثر کارکتر ورودی می‌تواند " + toPersianDigits(max) + " باشد.",
        length: ({ length }) => "طول کارکتر ورودی باید " + toPersianDigits(length) + " باشد.",
    },
    number: {
        min: ({ min }) => "حداقل مقدار ورودی باید " + toPersianDigits(min) + " باشد.",
        max: ({ max }) => "حداکثر مقدار ورودی می‌تواند " + toPersianDigits(max) + " باشد.",
        integer: "فقط استفاده از اعداد صحیح (بدون اعشار) معتبر می‌باشد.",
    },
    array: {
        min: ({ min }) => "حداقل باید " + toPersianDigits(min) + " گزینه را انتخاب کنید.",
        max: ({ max }) => "حداکثر می‌توانید " + toPersianDigits(max) + " گزینه را انتخاب کنید.",
    },
});

export default yup;
