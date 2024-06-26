import { updateUserCurrentReward } from "~/apis/userCurrentLearning";
import type { BoundStateCreator } from "~/hooks/useBoundStore";
import { createUserReward } from "~/apis/userReward";
export type LingotSlice = {
  lingots: number;
  increaseLingots: (email: string, by?: number) => void;
  setLingots: (value: number) => void;
};

export const createLingotSlice: BoundStateCreator<LingotSlice> = (set) => ({
  lingots: 0,
  setLingots: (value: number) => set({ lingots: value }),
  increaseLingots: (email: string, by = 1) => {
    set((state) => {
      const newLingots = state.lingots + by;
      state.setLingots(newLingots);
      updateUserCurrentReward(email, newLingots).catch((error) => {
        console.error("Failed to update current reward:", error);
      });
      createUserReward(email, newLingots).catch((error) => {
        console.error("Failed to create user reward:", error);
      });
      return { lingots: newLingots };
    });
  },
});
