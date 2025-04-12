import { type ComponentType, createElement, type ReactNode, useRef, useState } from "react";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: types ::::
 */
export interface FormWizardStepProps<T> {
    data: T;
    dispatch: (data: Partial<T>) => void;
    prevStep: () => void;
}

export interface WizardStep {
    label: string;
    status: "COMPLETED" | "REJECTED" | null;
    component: ComponentType<FormWizardStepProps<any>>;
}

interface Props<T> {
    defaultValues: T;
    steps: WizardStep[];
    onSubmit: (data: T) => void;
    defaultStep?: number;
    WizardHeader?: (step: number, steps: WizardStep[], jumpToStep: (index: number) => void) => ReactNode;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: wizard ::::
 */
export default function Wizard<T extends object>(props: Props<T>) {
    const steps = useRef([...props.steps]);

    const [currentStep, setCurrentStep] = useState(props.defaultStep ?? 0);

    const [data, setData] = useState<T>(props.defaultValues);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const dispatch = (values: Partial<T>) => {
        if (values) {
            setData((prevState) => ({ ...prevState, ...values }));
        }

        if (currentStep === props.steps.length - 1) {
            props.onSubmit({ ...data, ...values });
            return;
        }

        setCurrentStep((prevState) => prevState + 1);
        steps.current[currentStep].status = "COMPLETED";
        scrollToTop();
    };

    const prevStep = () => {
        setCurrentStep((prevState) => prevState - 1);
        scrollToTop();
    };

    const jumpToStep = (index: number) => {
        setCurrentStep(index);
        scrollToTop();
    };

    return (
        <div className="react-persian-form-wizard">
            {props.WizardHeader && props.WizardHeader(currentStep, steps.current, jumpToStep)}

            {createElement<FormWizardStepProps<T>>(props.steps[currentStep].component, {
                data,
                dispatch,
                prevStep,
            })}
        </div>
    );
}
