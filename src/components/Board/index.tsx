"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { messageAtom } from "@/store/atom";
import { useInitialMessage } from "@/libs/client";

export default function Board() {
  const { data, isLoading, error } = useInitialMessage();
  const [message, setMessage] = useRecoilState(messageAtom);
  // 初期値の設定
  React.useEffect(() => {
    if (data?.message) setMessage(data.message);
  }, [data?.message]);

  return (
    <div className="border-2 border-indigo-600 rounded-lg px-5 py-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Echo Board
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Messages from Echo Form will appear here.
      </p>
      <p className="h-5 font-bold">{isLoading ? "..." : message}</p>
    </div>
  );
}
