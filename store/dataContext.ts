import { create } from "zustand";

const useDataStore = create((set) => ({
  data: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: (data: any) => set({ data }),
}));

export default useDataStore;
