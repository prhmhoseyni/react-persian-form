import type { InputHTMLAttributes, ReactNode } from "react";
import type { Control } from "react-hook-form";

export interface PersianFormFieldProps<T> extends InputHTMLAttributes<T> {
    label: string;
    helperMessage?: string;
    name: string;
    control: Control<any>;
    variant?: "primary" | "secondary";
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
