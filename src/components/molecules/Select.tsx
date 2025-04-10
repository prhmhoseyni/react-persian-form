import DefaultSelect from "../atoms/Select.tsx";
import type { FormFieldProps } from "../../types";

interface Props extends FormFieldProps<HTMLSelectElement> {
    options: { label: string; value: string | number | readonly string[] | undefined }[];
}

export default function Select(props: Props) {
    const { name, control, options, ...rest } = props;

    return <DefaultSelect name={name} control={control} options={options} {...rest} />;
}
