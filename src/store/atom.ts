import { atom } from "recoil";

export const messageAtom = atom<string | null>({
  key: "messageAtom",
  default: null,
});
