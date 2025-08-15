import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import PersianFieldText from "./components/PersianField/Text";
import { Trash } from "lucide-react";

function App() {
    const [count, setCount] = useState(0);

    const formMethods = useForm({
        defaultValues: {
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

            <button type="submit">Submit Me</button>
        </form>
    );
}

export default App;
