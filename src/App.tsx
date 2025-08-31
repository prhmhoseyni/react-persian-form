import { useForm } from "react-hook-form";
import PersianFieldText from "./components/PersianField/Text";
import PersianFieldAmount from "./components/PersianField/Amount";
import PersianFieldCellphone from "./components/PersianField/Cellphone";
import PersianFieldEmail from "./components/PersianField/Email";
import PersianFieldNumber from "./components/PersianField/Number";
import PersianFieldNumeric from "./components/PersianField/Numeric";
import PersianFieldSelect from "./components/PersianField/Select";
import PersianFieldTextarea from "./components/PersianField/Textarea";
import PersianFieldDate from "./components/PersianField/Date";
import yup, { useYupValidationResolver } from "./resolvers/yup";
import PersianFieldBankCard from "./components/PersianField/BankCard";
import PersianFieldSheba from "./components/PersianField/Sheba";
import "./normalize.css";
import "./datepicker.css";

function App() {
    const resolver = useYupValidationResolver(
        yup.object({
            amount: yup.string().required(),
            textarea: yup.string().required(),
            sheba: yup.string().required().sheba(),
            bankCard: yup.string().required().bankCard(),
        }),
    );
    const formMethods = useForm({
        defaultValues: {
            number: 125000,
            date: 1754166600000,
        },
        resolver,
    });

    const onSubmit = formMethods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
            <PersianFieldAmount
                variant="secondary"
                label="Amount"
                name="amount"
                placeholder="amount"
                control={formMethods.control}
            />

            <PersianFieldCellphone
                variant="secondary"
                label="Cellphone"
                name="cellphone"
                placeholder="cellphone"
                control={formMethods.control}
            />

            <PersianFieldEmail
                variant="secondary"
                label="Email"
                name="email"
                placeholder="email"
                control={formMethods.control}
            />

            <PersianFieldNumber
                variant="secondary"
                label="Number"
                name="number"
                placeholder="number"
                control={formMethods.control}
            />

            <PersianFieldNumeric
                variant="secondary"
                label="Numeric"
                name="numeric"
                placeholder="numeric"
                control={formMethods.control}
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
            />

            <PersianFieldText
                variant="secondary"
                label="Text"
                name="text"
                placeholder="text"
                control={formMethods.control}
                helperMessage="تست"
            />

            <PersianFieldDate
                variant="secondary"
                label="Start Date"
                name="startDate"
                placeholder="startDate"
                control={formMethods.control}
            />

            <PersianFieldDate
                variant="secondary"
                label="End Date"
                name="endDate"
                placeholder="endDate"
                control={formMethods.control}
            />

            <PersianFieldTextarea
                variant="secondary"
                label="Textarea"
                name="textarea"
                placeholder="textarea"
                control={formMethods.control}
            />

            <PersianFieldBankCard
                variant="secondary"
                label="Bank Card"
                name="bankCard"
                placeholder="Bank Card"
                control={formMethods.control}
            />

            <PersianFieldSheba
                variant="secondary"
                label="Sheba"
                name="sheba"
                placeholder="Sheba"
                control={formMethods.control}
            />

            <button type="submit">Submit Me</button>
        </form>
    );
}

export default App;
