import { useCallback } from "react";
import { ObjectSchema, ValidationError } from "yup";
import * as yup from "yup";

const useYupValidationResolver = (validationSchema?: ObjectSchema<any>) =>
    useCallback(
        async (data: unknown) => {
            try {
                const values = await (validationSchema ?? yup.object({})).validate(data, { abortEarly: false });
                return { values, errors: {} };
            } catch (errors) {
                return {
                    values: {},
                    errors: (errors as ValidationError).inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path as string]: { type: currentError.type, message: currentError.message },
                        }),
                        {}
                    ),
                };
            }
        },
        [validationSchema]
    );

export default useYupValidationResolver;
