import { type RefObject } from "react";
import { useController } from "react-hook-form";
import DatePicker, { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import { toEnglishDigits } from "msk-utils";
import moment from "jalali-moment";
import Input from "~/common/Input";
import type { PersianFormFieldProps } from "../types";

/**
 * @description helpers methods
 */
function convertTimestamp2DayValue(value: number) {
    return {
        day: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { day: "numeric" }))),
        month: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { month: "numeric" }))),
        year: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { year: "numeric" }))),
    };
}

function convertDayValue2Timestamp(value: DayValue) {
    const convertedDateFromSolarToGregorian = moment
        .from(`${value?.year}/${value?.month}/${value?.day}`, "fa", "YYYY/MM/DD")
        .format("YYYY/MM/DD");

    return new Date(convertedDateFromSolarToGregorian).getTime();
}

/**
 * @name PersianFieldDate component
 */
interface Props extends PersianFormFieldProps<HTMLInputElement> {
    minDate?: number;
    maxDate?: number;
}

const PersianFieldDate = (props: Props) => {
    const { minDate, maxDate, ...rest } = props;

    const controller = useController({ name: rest.name, control: rest.control });

    const render = ({ ref }: { ref: RefObject<HTMLElement> }) => (
        <div className="relative w-full">
            <Input
                dir="rtl"
                ref={ref as RefObject<HTMLInputElement>}
                formatValue={() => ""}
                resetValue={() => null}
                readOnly
                value={
                    controller.field.value
                        ? new Date(controller.field.value).toLocaleDateString("fa", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                          })
                        : undefined
                }
                {...rest}
            />
        </div>
    );

    return (
        <DatePicker
            locale="fa"
            value={controller.field.value ? convertTimestamp2DayValue(controller.field.value) : null}
            shouldHighlightWeekends
            renderInput={render}
            maximumDate={maxDate ? convertTimestamp2DayValue(maxDate) : undefined}
            minimumDate={minDate ? convertTimestamp2DayValue(minDate) : undefined}
            colorPrimary="rgb(var(--react-persian-form-color-primary))"
            onChange={(value) => {
                if (value) {
                    controller.field.onChange(convertDayValue2Timestamp(value));
                }
            }}
        />
    );
};

export default PersianFieldDate;
