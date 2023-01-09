export type CheckBox = string[];

export type SelectionProps = {
  data: { [key: string]: string | number };
  onChange: (checked: boolean, id: string) => void;
};

export type SelectionFooterProps = {
  onSubmit: () => void;
};
export interface State {
  items: { [key: string]: string | number };
  discounts: { [key: string]: string | number };
  selectionItems: string[];
  selectionDiscounts: string[];
  currency_code: string | null;
  getData: (url: string | undefined) => void;
  setSelectionItems: (payload: string[]) => void;
  setSelectionDiscounts: (payload: string[]) => void;
}
export type ButtonProps = {
  name: string;
  onClick?: () => void;
};
