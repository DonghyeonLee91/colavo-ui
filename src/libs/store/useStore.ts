import create from "zustand";
import { State } from "../../types";

const useStore = create<State>((set) => ({
  items: {},
  discounts: {},
  currency_code: null,
  getData: async (pond) => {
    if (typeof pond === "string") {
      const response = await fetch(pond);
      const { items, discounts, currency_code } = await response.json();
      set(() => ({
        items,
        discounts,
        currency_code,
      }));
    }
  },
}));

export default useStore;
