/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Employee } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeUpdateFormInputValues = {
    empName?: string;
    empLocation?: string;
};
export declare type EmployeeUpdateFormValidationValues = {
    empName?: ValidationFunction<string>;
    empLocation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeUpdateFormOverridesProps = {
    EmployeeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    empName?: PrimitiveOverrideProps<TextFieldProps>;
    empLocation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employee?: Employee;
    onSubmit?: (fields: EmployeeUpdateFormInputValues) => EmployeeUpdateFormInputValues;
    onSuccess?: (fields: EmployeeUpdateFormInputValues) => void;
    onError?: (fields: EmployeeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeUpdateFormInputValues) => EmployeeUpdateFormInputValues;
    onValidate?: EmployeeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeUpdateForm(props: EmployeeUpdateFormProps): React.ReactElement;
