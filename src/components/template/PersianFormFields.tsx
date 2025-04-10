import type { Control } from "react-hook-form";
import FormFieldWrapper, { Col, LG, MD, XL } from "../organisms/FormFieldWrapper.tsx";
import Amount from "../molecules/Amount.tsx";
import Cellphone from "../molecules/Cellphone.tsx";
import Numeric from "../molecules/Numeric.tsx";
import Text from "../molecules/Text.tsx";
import Textarea from "../molecules/Textarea.tsx";
import Select from "../molecules/Select.tsx";
import Number from "../molecules/Number.tsx";
import { FormField } from "../../types";

interface Props {
    control: Control<any>;
    fields: FormField[];
    variant?: "primary" | "secondary";
}

export default function PersianFormFields(props: Props) {
    return (
        <div className="grid grid-cols-12 gap-x-4">
            {props.fields.map((field, index) => {
                if (field.type === "space") {
                    return (
                        <div
                            key={index}
                            className={[
                                Col(field.col ?? 12),
                                field.md && MD(field.md),
                                field.lg && LG(field.lg),
                                field.xl && XL(field.xl),
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        />
                    );
                }

                const { type, name, label, helperMessage, col, md, lg, xl } = field;

                return (
                    <FormFieldWrapper
                        key={index}
                        name={name}
                        control={props.control}
                        label={label}
                        helperMessage={helperMessage}
                        col={col}
                        md={md}
                        lg={lg}
                        xl={xl}
                    >
                        {type === "text" && <Text name={name} control={props.control} variant={props.variant} />}
                        {type === "numeric" && <Numeric name={name} control={props.control} variant={props.variant} />}
                        {type === "cellphone" && <Cellphone name={name} control={props.control} variant={props.variant} />}
                        {type === "number" && <Number name={name} control={props.control} variant={props.variant} />}
                        {type === "amount" && <Amount name={name} control={props.control} variant={props.variant} />}
                        {type === "textarea" && <Textarea name={name} control={props.control} variant={props.variant} />}

                        {type === "select" && (
                            <Select name={name} control={props.control} options={field.options} variant={props.variant} />
                        )}
                    </FormFieldWrapper>
                );
            })}
        </div>
    );
}
