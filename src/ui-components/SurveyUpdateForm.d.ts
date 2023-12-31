/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyUpdateFormInputValues = {
    res?: string;
    wetLab?: string;
    sim?: string;
    muscle?: string;
    no?: string;
};
export declare type SurveyUpdateFormValidationValues = {
    res?: ValidationFunction<string>;
    wetLab?: ValidationFunction<string>;
    sim?: ValidationFunction<string>;
    muscle?: ValidationFunction<string>;
    no?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyUpdateFormOverridesProps = {
    SurveyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    res?: PrimitiveOverrideProps<TextFieldProps>;
    wetLab?: PrimitiveOverrideProps<TextFieldProps>;
    sim?: PrimitiveOverrideProps<TextFieldProps>;
    muscle?: PrimitiveOverrideProps<TextFieldProps>;
    no?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyUpdateFormProps = React.PropsWithChildren<{
    overrides?: SurveyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    survey?: any;
    onSubmit?: (fields: SurveyUpdateFormInputValues) => SurveyUpdateFormInputValues;
    onSuccess?: (fields: SurveyUpdateFormInputValues) => void;
    onError?: (fields: SurveyUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SurveyUpdateFormInputValues) => SurveyUpdateFormInputValues;
    onValidate?: SurveyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyUpdateForm(props: SurveyUpdateFormProps): React.ReactElement;
