import * as yup from "yup";
import { checkNationalId, toPersianDigits } from "msk-utils";

/**
 * :::: custom validations methods ::::
 */
declare module "yup" {
    interface StringSchema {
        cellphone(): this;
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
