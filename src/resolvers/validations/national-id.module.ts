import * as yup from "yup";
import { checkNationalId } from "msk-utils";

declare module "yup" {
    interface StringSchema {
        nationalId(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "nationalId", function () {
    return this.test({
        test: (value) => checkNationalId(value ?? ""),
        message: "کد ملی وارد شده معتبر نمی‌باشد.",
    });
});
