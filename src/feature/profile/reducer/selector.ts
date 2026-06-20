import { RootState } from "@/src/store/store";

export const ProfileSelector = (state: RootState) =>
  state.profile.data;

export const ProfileLoadingSelector = (state: RootState) =>
  state.profile.loading;