import { RootState } from "@/lib/store";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
