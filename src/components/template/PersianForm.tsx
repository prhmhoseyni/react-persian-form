import { type SubmitHandler, useForm } from "react-hook-form";
import PersianFormFields from "./PersianFormFields.tsx";
import { FormField } from "../../types";

interface Props {
    variant?: "primary" | "secondary";
    fields: FormField[];
    onSubmit: (data: any) => void;
}

export default function PersianForm(props: Props) {
    const formMethods = useForm<any>({});
    const onSubmit: SubmitHandler<any> = (data) => props.onSubmit(data);

    return (
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="h-full flex-1 flex flex-col justify-between gap-4">
            <PersianFormFields variant={props.variant} fields={props.fields} control={formMethods.control} />

            <input type="submit" />
        </form>
    );
}
