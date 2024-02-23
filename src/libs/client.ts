import Axios from "axios";
import { EchoType } from "@/schema/echo";
import useSWR from "swr";

export const apiClient = Axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export function useInitialMessage() {
  const { data, isLoading, error } = useSWR("init", fetchInitialMessage);
  return { data, isLoading, error };
}

export const fetchInitialMessage = async () => {
  const { data } = await apiClient.get<EchoType>("/api/echo");
  return data;
};
