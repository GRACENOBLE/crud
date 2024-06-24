import Container from "@/components/Container";
import React from "react";

export default function page() {
  return (
    <div>
      <Container>
        
        <div className="flex justify-center items-center h-screen">
          <form
            action="submit"
            className="flex flex-col justify-center items-center gap-8 border rounded w-96 hover:shadow-lg"
          ><h1 className="font-bold text-4xl uppercase mt-4">Students form</h1>
            <div className="grid place-items-center gap-4">
              <input
                type="text"
                placeholder={"SNo"}
                className="border rounded p-1 w-60"
              />
              <input
                type="text"
                placeholder={"Names"}
                className="border rounded p-1 w-60"
              />
              <input
                type="text"
                placeholder={"Address"}
                className="border rounded p-1 w-60"
              />
              <input
                type="text"
                placeholder={"Date"}
                className="border rounded p-1 w-60"
              />
            </div>
            <div className="flex justify-end w-full mb-4">
              <button className="rounded-md px-4 py-2 me-4 bg-blue-500 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
