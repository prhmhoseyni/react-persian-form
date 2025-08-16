import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        cellphone(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "cellphone", function () {
    const regExp = new RegExp(/^09\d{9}$/g);
    return this.matches(regExp, "شماره تلفن همراه وارد شده معتبر نمی‌باشد.");
});
