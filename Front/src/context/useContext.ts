import { useContext } from "react";
import { AppContext } from "./Context";

export default function useAppContext() {
  return useContext(AppContext);
}