import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import PersianFieldText from "./components/PersianField/Text";
import PersianFieldAmount from "./components/PersianField/Amount";
import PersianFieldCellphone from "./components/PersianField/Cellphone";
import PersianFieldEmail from "./components/PersianField/Email";
import PersianFieldNumber from "./components/PersianField/Number";
import PersianFieldNumeric from "./components/PersianField/Numeric";
import PersianFieldSelect from "./components/PersianField/Select";
import PersianFieldTextarea from "./components/PersianField/Textarea";
import PersianFieldDate from "./components/PersianField/Date";

function App() {
    const formMethods = useForm({
        defaultValues: {
            amount: 125000,
            date: 1754166600000,
        },
    });

    const onSubmit = formMethods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 p-8 bg-background-primary">
            <PersianFieldAmount
                variant="secondary"
                label="Amount"
                name="amount"
                placeholder="amount"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldCellphone
                variant="secondary"
                label="Cellphone"
                name="cellphone"
                placeholder="cellphone"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldEmail
                variant="secondary"
                label="Email"
                name="email"
                placeholder="email"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldNumber
                variant="secondary"
                label="Number"
                name="number"
                placeholder="number"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldNumeric
                variant="secondary"
                label="Numeric"
                name="numeric"
                placeholder="numeric"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldSelect
                variant="secondary"
                label="Select"
                name="select"
                placeholder="select"
                control={formMethods.control}
                options={[
                    { label: "یک مورد را انتخاب کنید", value: "" },
                    { label: "پرهام حسینی", value: "PRHM" },
                ]}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldText
                variant="secondary"
                label="Text"
                name="text"
                placeholder="text"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldDate
                variant="secondary"
                label="Start Date"
                name="startDate"
                placeholder="startDate"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldDate
                variant="secondary"
                label="End Date"
                name="endDate"
                placeholder="endDate"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldTextarea
                variant="secondary"
                label="Textarea"
                name="textarea"
                placeholder="textarea"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <button type="submit">Submit Me</button>
        </form>
    );
}

export default App;
