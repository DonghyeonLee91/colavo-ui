export type CheckBox = string[];

export interface SelectionProps {
  data: { [key: string]: string | number };
  onChange: (checked: boolean, id: string) => void;
}

export interface SelectionFooterProps {
  onSubmit: () => void;
  description: string;
}

export interface HeaderProps {
  title: string;
}
export interface State {
  items: { [key: string]: any };
  discounts: { [key: string]: any };
  totalPrice: number;
  totalDiscount: number;
  selectionItems: string[];
  selectionDiscounts: string[];
  itemsCounts: { [key: string]: number };
  discountItemsPriceList: { [key: string]: any };
  currency_code: string;
  setDiscountItemsPriceList: (id: string, price: number) => void;
  setItemsCounts: (id: string, count: number) => void;
  setTotalPrice: (payload: number) => void;
  getData: (url: string | undefined) => void;
  setSelectionItems: (payload: string[]) => void;
  setSelectionDiscounts: (payload: string[]) => void;
  setDeleteItem: (id: string) => void;
  setDeleteDiscount: (id: string) => void;
}
export interface ButtonProps {
  name: string;
  onClick?: () => void;
}

interface CartProps {
  id: string;
  name: string;
}
export interface CartItemProps extends CartProps {
  price: number;
  count: number;
}

export interface CartDiscountProps extends CartProps {
  rate: number;
}

export interface ModalProps {
  name: string;
  id: string;
  handleDiscountItem: (id: string) => void;
  closeModal: () => void;
}
