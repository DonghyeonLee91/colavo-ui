export interface State {
  items: { [key: string]: string | number };
  discounts: { [key: string]: string | number };
  currency_code: string | null;
  getData: (url: string | undefined) => void;
}
