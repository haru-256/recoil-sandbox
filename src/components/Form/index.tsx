"use client";
import { apiClient } from "@/libs/client";
import { useSetRecoilState } from "recoil";
import { messageAtom } from "@/store/atom";
import { EchoType } from "@/schema/echo";
import Axios from "axios";

export default function Form() {
  const setMessage = useSetRecoilState(messageAtom);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    try {
      const response = await apiClient.post<EchoType>(
        "/api/echo",
        JSON.stringify(formData)
      );
      console.log("response from /api/echo", response, response.data);
      setMessage(response.data.message);
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        console.error(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Echo Form
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Type something and click submit.
      </p>
      <div className="mt-3">
        <label
          htmlFor="message"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Input for echo board
        </label>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="text"
            name="message"
            id="message"
            autoComplete="on"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Type something"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-3">
        <button
          type="reset"
          className="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
