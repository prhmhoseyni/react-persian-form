import PersianForm from "./components/template/PersianForm.tsx";
import yup from "./config/yup.config.ts";

const validation = yup.object({
    text: yup.string().required("Required"),
    cellphone: yup.string().required(),
});

function App() {
    return (
        <div className="h-dvh p-4">
            <PersianForm
                variant="secondary"
                fields={[
                    { type: "text", name: "text", label: "نام", md: 6 },
                    { type: "space", md: 6 },
                    { type: "cellphone", name: "cellphone", label: "شماره تلفن", md: 4 },
                    { type: "numeric", name: "numeric", label: "کدملی", md: 4 },
                    { type: "number", name: "number", label: "طبقه", md: 4 },
                    { type: "amount", name: "amount", label: "مبلغ", md: 6 },
                    {
                        type: "select",
                        name: "select",
                        label: "وضعیت تاهل",
                        options: [
                            { label: "وضعیت تاهل", value: "" },
                            { label: "مجرد", value: "1" },
                            { label: "متاهل", value: "2" },
                            { label: "جدا شده", value: "2" },
                        ],
                        md: 6,
                    },
                    { type: "textarea", name: "textarea", label: "آدرس" },
                ]}
                onSubmit={(data) => console.log(data)}
                validation={validation}
            />
        </div>
    );
}

export default App;
