import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkNationalId, toPersianDigits } from "msk-utils";

/**
 * =================================================================
 * :::: CUSTOM VALIDATIONS ::::
 * =================================================================
 * In Yup, we create reusable schemas or refinements instead of extending the base schema.
 */
declare module "yup" {
    interface StringSchema {
        cellphone(): this;
        bankCard(): this;
        sheba(): this;
        halfSpace(count?: number): this;
        nationalId(): this;
        onlyFaCharactersAndDigits(): this;
        onlyFaCharacters(): this;
        postalCode(): this;
        space(count?: number): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "cellphone", function () {
    const regExp = new RegExp(/^09\d{9}$/g);
    return this.matches(regExp, "شماره تلفن همراه وارد شده معتبر نمی‌باشد.");
});

yup.addMethod<yup.StringSchema>(yup.string, "bankCard", function () {
    const regExp = new RegExp(/^\d{16}$/g);
    return this.matches(regExp, "شماره کارت وارد شده معتبر نمی‌باشد.");
});

yup.addMethod<yup.StringSchema>(yup.string, "sheba", function () {
    const regExp = new RegExp(/^\d{24}$/g);
    return this.matches(regExp, "شماره شبا وارد شده معتبر نمی‌باشد.");
});

yup.addMethod<yup.StringSchema>(yup.string, "space", function (count?: number) {
    count = count ?? 1;
    const regExp = new RegExp(`^((?!\\s{${count}}).)*$`);
    return this.matches(regExp, count === 1 ? "وارد کردن اسپیس مجاز نمی باشد." : "از قراردادن اسپیس پشت هم خودداری کنید.");
});

yup.addMethod<yup.StringSchema>(yup.string, "halfSpace", function (count?: number) {
    count = count ?? 1;
    const regExp = new RegExp(`^((?!\\u200C{${count}}).)*$`);
    return this.matches(
        regExp,
        count === 1 ? "وارد کردن نیم اسپیس مجاز نمی باشد." : "از قراردادن نیم اسپیس پشت هم خودداری کنید.",
    );
});

yup.addMethod<yup.StringSchema>(yup.string, "nationalId", function () {
    return this.test({
        test: (value) => checkNationalId(value ?? ""),
        message: "کد ملی وارد شده معتبر نمی‌باشد.",
    });
});

yup.addMethod<yup.StringSchema>(yup.string, "onlyFaCharactersAndDigits", function () {
    const regExp = new RegExp(/^[\u0600-\u06FF\s\d./\-−،()]+$/g);
    return this.matches(regExp, "فقط استفاده از حروف فارسی و اعداد مجاز می‌باشد.");
});

yup.addMethod<yup.StringSchema>(yup.string, "onlyFaCharacters", function () {
    const regExp = new RegExp(/^[\u0600-\u06FF\s./\-−]+$/g);
    return this.matches(regExp, "فقط استفاده از حروف فارسی مجاز می‌باشد.");
});

yup.addMethod<yup.StringSchema>(yup.string, "postalCode", function () {
    const regExp = new RegExp(/^\d{10}$/g);
    return this.matches(regExp, "کدپستی وارد شده معتبر نمی‌باشد.");
});

/**
 * =================================================================
 * :::: CUSTOM CONFIG ::::
 * =================================================================
 * We set a global error map to translate Yup's default error messages into Persian.
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

/**
 * =================================================================
 * :::: REACT HOOK FORM RESOLVER ::::
 * =================================================================
 * The official `@hookform/resolvers/yup` package provides the
 * `yupResolver`. It's highly optimized and the standard way to
 * use Zod with react-hook-form.
 *
 * The original `useYupValidationResolver` hook can be replaced directly by `yupResolver` in your `useForm` call.
 */
const useYupValidationResolver = (validationSchema: yup.ObjectSchema<any>) => yupResolver(validationSchema);

export { useYupValidationResolver };
export default yup;
