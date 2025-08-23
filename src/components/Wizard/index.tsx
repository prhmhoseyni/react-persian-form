import { type ComponentType, createElement, type ReactNode, useRef, useState } from "react";

export interface WizardStepProps<T> {
    data: T;
    dispatch: (data: Partial<T>) => void;
    prevStep: () => void;
}

export enum WizardStepStatus {
    REJECTED = "rejected",
    COMPLETED = "completed",
}

export interface WizardStep {
    label: string;
    status: WizardStepStatus | null;
    component: ComponentType<WizardStepProps<any>>;
    props?: Record<string, any>;
}

export interface WizardProps<T> {
    defaultValues: T;
    steps: WizardStep[];
    onSubmit?: (data: T) => void;
    defaultStep?: number;
    WizardHeader?: (step: number, steps: WizardStep[], jumpToStep: (index: number) => void) => ReactNode;
    onChangeStep?: (step: number) => void;
}

export default function Wizard<T extends object>(props: WizardProps<T>) {
    const steps = useRef([...props.steps]);

    const [currentStep, setCurrentStep] = useState(props.defaultStep ?? 0);

    const [data, setData] = useState<T>(props.defaultValues);

    const dispatch = (values: Partial<T>) => {
        if (values) {
            setData((prevState) => ({ ...prevState, ...values }));
        }

        if (currentStep === props.steps.length - 1) {
            if (props.onSubmit) props.onSubmit({ ...data, ...values });
            return;
        }

        setCurrentStep((prevState) => prevState + 1);
        steps.current[currentStep].status = WizardStepStatus.COMPLETED;
        props.onChangeStep?.(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevState) => prevState - 1);
        props.onChangeStep?.(currentStep - 1);
    };

    const jumpToStep = (index: number) => {
        setCurrentStep(index);
        props.onChangeStep?.(index);
    };

    return (
        <>
            {props.WizardHeader && props.WizardHeader(currentStep, steps.current, jumpToStep)}

            {createElement<WizardStepProps<T>>(props.steps[currentStep].component, {
                data,
                dispatch,
                prevStep,
                ...(props.steps[currentStep].props ?? {}),
            })}
        </>
    );
}
