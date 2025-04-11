import type { InputHTMLAttributes } from "react";
import type { Control } from "react-hook-form";

export interface ResponsiveDesign {
    col?: 4 | 6 | 12;
    md?: 4 | 6 | 12;
    lg?: 4 | 6 | 12;
    xl?: 4 | 6 | 12;
}

export interface TextField<T> extends ResponsiveDesign {
    type: T;
    name: string;
    label?: string;
    helperMessage?: string;
}

export interface SelectField<T> extends ResponsiveDesign {
    type: T;
    name: string;
    label?: string;
    helperMessage?: string;
    options: Array<{ label: string; value: string | number | undefined }>;
}

export type FormField =
    | ({ type: "space" } & ResponsiveDesign)
    | TextField<"text">
    | TextField<"numeric">
    | TextField<"cellphone">
    | TextField<"bank-card">
    | TextField<"sheba">
    | TextField<"number">
    | TextField<"amount">
    | TextField<"date">
    | TextField<"textarea">
    | SelectField<"select">
    | SelectField<"bottom-sheet-select">;

export interface FormFieldProps<T> extends InputHTMLAttributes<T> {
    name: string;
    control: Control<any>;
    variant?: "primary" | "secondary";
}
