export type CheckBox = string[];

export interface SelectionProps {
  data: { [key: string]: string | number };
  onChange: (checked: boolean, id: string) => void;
}

export interface SelectionFooterProps {
  onSubmit: () => void;
}
export interface State {
  items: any;
  discounts: { [key: string]: string | number };
  selectionItems: string[];
  selectionDiscounts: string[];
  currency_code: string | null;
  getData: (url: string | undefined) => void;
  setSelectionItems: (payload: string[]) => void;
  setSelectionDiscounts: (payload: string[]) => void;
}
export interface ButtonProps {
  name: string;
  onClick?: () => void;
}
