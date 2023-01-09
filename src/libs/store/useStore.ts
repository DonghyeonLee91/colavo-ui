import create from "zustand";
import { State } from "../../types";

const useStore = create<State>((set) => ({
  items: {},
  discounts: {},
  selectionItems: [],
  selectionDiscounts: [],
  totalPrice: 0,
  totalDiscount: 0,
  itemsCounts: {},
  discountItemsPriceList: {},
  exchangeRate: 0,
  currencyCode: "",
  getData: async (url) => {
    if (typeof url === "string") {
      const response = await fetch(url);
      const { items, discounts, currency_code } = await response.json();
      set(() => ({
        items,
        discounts,
        currencyCode: currency_code,
      }));
    }
  },
  getExchangeRate: async (url) => {
    if (typeof url === "string") {
      const response = await fetch(url);
      const data = await response.json();
      const { basePrice } = data[0];
      set(() => ({
        exchangeRate: basePrice,
      }));
    }
  },
  setSelectionItems: (payload) =>
    set(() => ({
      selectionItems: payload,
    })),
  setSelectionDiscounts: (payload) =>
    set(() => ({
      selectionDiscounts: payload,
    })),
  setTotalPrice: (payload) =>
    set(() => ({
      totalPrice: payload,
    })),
  setItemsCounts: (id, count) =>
    set((state) => ({
      itemsCounts: {
        ...state.itemsCounts,
        [id]: count,
      },
    })),
  setDiscountItemsPriceList: (id, price) =>
    set((state) => ({
      discountItemsPriceList: {
        ...state.discountItemsPriceList,
        [id]: price,
      },
    })),
  setDeleteItem: (id) =>
    set((state) => ({
      selectionItems: state.selectionItems.filter((item) => item !== id),
    })),
  setDeleteDiscount: (id) =>
    set((state) => ({
      selectionDiscounts: state.selectionDiscounts.filter(
        (discount) => discount !== id
      ),
      discountItemsPriceList: {
        ...state.discountItemsPriceList,
        [id]: 0,
      },
    })),
}));

export default useStore;
