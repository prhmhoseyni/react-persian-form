import Select from "~/common/Select";
import type { PersianFormFieldProps } from "../types";

/**
 * @name PersianFieldSelect component
 */
interface Props extends PersianFormFieldProps<HTMLSelectElement> {
    options: { label: string; value: string | number | readonly string[] | undefined }[];
}

const PersianFieldSelect = (props: Props) => {
    const { options, ...rest } = props;

    return (
        <Select {...rest}>
            {options.map((option) => (
                <option key={option.value?.toString()} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default PersianFieldSelect;
