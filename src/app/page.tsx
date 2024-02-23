import Board from "@/components/Board";
import Form from "@/components/Form";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center items-center h-svh">
        <div className="flex flex-col gap-10 w-[28rem]">
          <h1 className="text-4xl p-2 border-b">Recoil Sandbox</h1>
          <div>
            <Board />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
