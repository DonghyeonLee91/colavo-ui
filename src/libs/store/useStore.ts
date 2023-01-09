import create from "zustand";
import { State } from "../../types";

const useStore = create<State>((set) => ({
  items: {},
  discounts: {},
  selectionItems: [],
  selectionDiscounts: [],
  currency_code: null,
  getData: async (url) => {
    if (typeof url === "string") {
      const response = await fetch(url);
      const { items, discounts, currency_code } = await response.json();
      set(() => ({
        items,
        discounts,
        currency_code,
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
}));

export default useStore;
