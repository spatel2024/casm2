/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Survey?: PrimitiveOverrideProps<TextProps>;
    Video?: PrimitiveOverrideProps<TextProps>;
    Models?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;