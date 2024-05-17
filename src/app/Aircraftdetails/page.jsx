"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { handler } from "tailwindcss-animate";

const Aircraft = () => {
  const [icaocode, setIcaocode] = useState("");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeIcao = (e) => {
    setIcaocode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.facha.dev/v1/aircraft/detail/icao/${icaocode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch aircraft details');
      }
      const data = await response.json();
      setDetails(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching aircraft details:', error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-[9%] gap-7">
      <h2 className="scroll-m-20 text-center  text-4xl font-medium tracking-tight lg:text-4xl">
        Get Aircraft details for a specific ICAO HEX Code
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-full items-center space-x-2">
          <Input
            value={icaocode}
            onChange={handleChangeIcao}
            type="string"
            placeholder="Enter Aircraft ICAO HEX"
          />
          <Button type="submit">Get Details</Button>
        </div>
      </form>

      {/* <h2 className="scroll-m-20 border-b pb-2 text-3xl font-thin tracking-tight first:mt-0">
        Aircraft Details
      </h2> */}
      {error && <p>Error: {error}</p>}
      {details && details.type && (
        <table className="w-1/2">
          <thead>
            <tr className="border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold ">Context</th>
              <th className="border px-4 py-2 text-left font-bold ">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">ICAO CODE</td>
              <td className="border px-4 py-2 text-left">{details.icao}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">REGISTRATION</td>
              <td className="border px-4 py-2 text-left ">
                {details.registration}
              </td>
            </tr>

            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">MANUFACTURER</td>
              <td className="border px-4 py-2 text-left ">
                {details.type && details.type.manufacturer}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">BUILT IN YEAR</td>
              <td className="border px-4 py-2 text-left ">
                {details.type && details.type.yearBuilt}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">COUNTRY</td>
              <td className="border px-4 py-2 text-left ">{details.country}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">
                IS IT A MILITARY AIRCRAFT
              </td>
              <td className="border px-4 py-2 text-left ">
                {details.military ? "Yes" : "No"}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">DESCRIPTION</td>
              <td className="border px-4 py-2 text-left ">
                {details.type && details.type.description}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">OPERATOR</td>
              <td className="border px-4 py-2 text-left ">
                {details.operator && details.operator.name}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Aircraft;
