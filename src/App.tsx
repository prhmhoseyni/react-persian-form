import { useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import PersianFieldText from "./components/PersianField/Text";
import PersianFieldAmount from "./components/PersianField/Amount";
import PersianFieldCellphone from "./components/PersianField/Cellphone";
import PersianFieldEmail from "./components/PersianField/Email";
import PersianFieldNumber from "./components/PersianField/Number";

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
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <PersianFieldText
                label="Text"
                name="text"
                placeholder="text"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldAmount
                label="Amount"
                name="amount"
                placeholder="amount"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldCellphone
                label="Cellphone"
                name="cellphone"
                placeholder="cellphone"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldEmail
                label="Email"
                name="email"
                placeholder="email"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <PersianFieldNumber
                label="Number"
                name="number"
                placeholder="number"
                control={formMethods.control}
                startAdornment={<Trash size={15} />}
            />

            <button type="submit">Submit Me</button>
        </form>
    );
}

export default App;
