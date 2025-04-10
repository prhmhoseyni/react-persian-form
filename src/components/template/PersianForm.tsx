import { type SubmitHandler, useForm } from "react-hook-form";
import PersianFormFields from "./PersianFormFields.tsx";
import { FormField } from "../../types";
import { ObjectSchema } from "yup";
import useYupValidationResolver from "../../hooks/useYupValidationResolver.ts";

interface Props {
    variant?: "primary" | "secondary";
    fields: FormField[];
    onSubmit: (data: any) => void;
    validation?: ObjectSchema<any>;
}

export default function PersianForm(props: Props) {
    const resolver = useYupValidationResolver(props.validation);
    const formMethods = useForm<any>({ resolver });
    const onSubmit: SubmitHandler<any> = (data) => props.onSubmit(data);

    return (
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="h-full flex-1 flex flex-col justify-between gap-4">
            <PersianFormFields variant={props.variant} fields={props.fields} control={formMethods.control} />
            <input type="submit" />
        </form>
    );
}
