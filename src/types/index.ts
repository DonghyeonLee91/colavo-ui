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
  totalPrice: number;
  selectionItems: string[];
  selectionDiscounts: string[];
  itemsCounts: { [key: string]: number };
  currency_code: string | null;
  setItemsCounts: (id: string, count: number) => void;
  setTotalPrice: (payload: number) => void;
  getData: (url: string | undefined) => void;
  setSelectionItems: (payload: string[]) => void;
  setSelectionDiscounts: (payload: string[]) => void;
  setDeleteItem: (id: string) => void;
}
export interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  count: number;
}
