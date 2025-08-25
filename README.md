<center>

<img src="https://raw.githubusercontent.com/prhmhoseyni/react-persian-form/main/assets/logo.png" alt="react-persian-form logo" width="120"/>

# React Persian Form

</center>

A comprehensive collection of React components and Yup validation helpers tailored for Persian developers. This package is built on top of **React** and **React Hook Form** to simplify and accelerate the process of building forms with common Persian-specific fields and validation rules.

## ✨ Features

- **Rich Component Library:** A set of pre-built and styled components for common Persian form fields (`Amount`, `Date`, `National ID`, `Sheba`, etc.).

- **Seamless Integration:** Designed to work perfectly with `react-hook-form` for powerful and performant form state management.

- **Custom Validation:** Includes a customized Yup validation resolver with default Persian error messages and useful validation methods for Iranian contexts (`nationalId`, `cellphone`, `postalCode`, etc.).

- **Easy to Use:** Simple setup and a straightforward API to get you up and running in minutes.

## 🚀 Installation

Installing React Persian Form only takes a single command and you're ready to roll.

```bash
npm i react-persian-form
```

## 🔧 Setup

1. For proper styling and right-to-left text direction, ensure your `index.html` file is set up for Persian (`fa`) language and `rtl` direction.

```html
<html lang="fa" dir="rtl">
    ...
</html>
```

2. Import the package styles into your main application file (e.g., `App.tsx` or `main.tsx`).

```tsx
import "react-persian-form/styles";
```

## 💡 Usage

```tsx
import { useForm } from "react-hook-form";
import {
    PersianFieldText,
    PersianFieldCellphone,
    PersianFieldNumeric,
} from "react-persian-form";
import yup, { useYupValidationResolver } from "react-persian-form/resolvers/yup";

// Import styles
import "react-persian-form/styles";

function MyForm() {
    // 1. Define your validation schema using Yup and custom methods
    const schema = yup.object({
        firstName: yup.string().required().space(2).halfSpace().onlyFaCharacters(),
        lastName: yup.string().required().space(2).halfSpace().onlyFaCharacters(),,
        cellphone: yup.string().required().cellphone(),
        nationalId: yup.string().required().nationalId(),
    });

    // 2. Use the custom validation resolver
    const resolver = useYupValidationResolver(schema);

    // 3. Initialize react-hook-form
    const formMethods = useForm({ resolver });

    const onSubmit = formMethods.handleSubmit((data) => {
        console.log("Form Data:", data);
    });

    // 4. Use the components in your form
    return (
        <form onSubmit={onSubmit}>
            <PersianFieldText
                label="نام"
                name="firstName"
                control={formMethods.control}
            />

            <PersianFieldText
                label="نام‌خانوادگی"
                name="lastName"
                control={formMethods.control}
            />

            <PersianFieldCellphone
                label="شماره‌تلفن"
                name="cellphone"
                control={formMethods.control}
            />

            <PersianFieldNumeric
                label="کدملی"
                name="nationalId"
                control={formMethods.control}
            />

            <button type="submit">ثبت فرم</button>
        </form>
    );
}

export default MyForm;
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/prhmhoseyni/react-persian-form/issues).
