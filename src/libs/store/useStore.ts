import create from "zustand";
import { State } from "../../types";

const useStore = create<State>((set) => ({
  items: {},
  discounts: {},
  selectionItems: [],
  selectionDiscounts: [],
  totalPrice: 0,
  itemsCounts: {},
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
  setDeleteItem: (id) =>
    set((state) => ({
      selectionItems: state.selectionItems.filter((item) => item !== id),
    })),
  setDeleteDiscount: (id) =>
    set((state) => ({
      selectionDiscounts: state.selectionDiscounts.filter(
        (discount) => discount !== id
      ),
    })),
}));

export default useStore;
