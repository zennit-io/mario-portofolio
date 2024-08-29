import {
  field as fieldPrimitive,
  type FieldShape,
  type FieldShapeConfig as FieldShapeConfigPrimitive,
  type FormShapeConfig as FormShapeConfigPrimitive,
  type InferredFieldConfig as InferredFieldConfigPrimitive,
  useInferredForm,
} from "../../form";
import type { z } from "zod";
import type { CheckboxProps } from "../checkbox";
import type { DatePickerProps } from "../date-picker";
import type { InputProps } from "../input";
import type { RadioGroupProps } from "../radio-group";
import type { SelectProps } from "../select";
import type { SliderProps } from "../slider";
import type { SwitchProps } from "../switch";
import type { TextareaProps } from "../textarea";
import type { PhoneInputProps } from "@/components/ui/phone-input";

type FieldPropsMap = {
  text: InputProps;
  textarea: TextareaProps;
  select: SelectProps;
  "radio-group": RadioGroupProps;
  switch: SwitchProps;
  checkbox: CheckboxProps;
  slider: SliderProps;
  date: DatePickerProps;
  "phone-number": PhoneInputProps;
};

export type FormShapeConfig = FormShapeConfigPrimitive<FieldPropsMap>;
export type FieldShapeConfig = FieldShapeConfigPrimitive<FieldPropsMap>;

export type InferredFieldConfig<
  S extends FieldShape,
  T extends z.ZodType,
> = InferredFieldConfigPrimitive<FieldPropsMap, S, T>;

type FieldParams<S extends FieldShape, T extends z.ZodType> = Parameters<
  typeof fieldPrimitive<FieldPropsMap, S, T>
>;

export const field = <S extends FieldShape, T extends z.ZodType>(
  ...params: FieldParams<S, T>
) => {
  return fieldPrimitive<FieldPropsMap, S, T>(...params);
};

export { useInferredForm };
export type {
  FieldConfig,
  FormConfig,
  InferredSchema,
  InferredRawShape,
  UseInferredFormParams,
  FieldShape,
  FieldValues,
} from "../../form";
