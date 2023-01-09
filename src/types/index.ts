export type CheckBox = string[];
export interface State {
  items: { [key: string]: string | number };
  discounts: { [key: string]: string | number };
  currency_code: string | null;
  getData: (url: string | undefined) => void;
}
export interface ButtonProps {
  name: string;
}
