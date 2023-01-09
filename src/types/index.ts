export type CheckBox = string[];

export type SelectionProps = {
  data: { [key: string]: string | number };
  onChange: (checked: boolean, id: string) => void;
};

export interface State {
  items: { [key: string]: string | number };
  discounts: { [key: string]: string | number };
  currency_code: string | null;
  getData: (url: string | undefined) => void;
}
export interface ButtonProps {
  name: string;
}
