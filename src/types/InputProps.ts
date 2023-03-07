import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: ((value: any) => string | undefined)[];
  options?: { key: number; value: string }[];
}
