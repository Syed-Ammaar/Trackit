"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Aircraftstatus = () => {
  const [icaocode, setIcaocode] = useState("");
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  const handleChangeIcao = (e) => {
    setIcaocode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.facha.dev/v1/aircraft/live/icao/${icaocode}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch aircraft details");
      }
      const data = await response.json();
      setDetails(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching aircraft details:", error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-[9%] gap-7">
      <h2 className="scroll-m-20 text-center text-3xl font-medium tracking-tight lg:text-4xl">
        Status and position of an airborne Aircraft for a specific ICAO HEX Code
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

      {details.length!=0 && (
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
              <td className="border px-4 py-2 text-left ">CALLSIGN</td>
              <td className="border px-4 py-2 text-left ">
                {details.callsign}
              </td>
            </tr>

            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">LATITUDE</td>
              <td className="border px-4 py-2 text-left ">{details.lat}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">LONGITUDE</td>
              <td className="border px-4 py-2 text-left ">{details.lon}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">SPEED</td>
              <td className="border px-4 py-2 text-left ">{details.speed}</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">
                IS IT A MILITARY AIRCRAFT
              </td>
              <td className="border px-4 py-2 text-left ">
                {details.isMilitary ? "Yes" : "No"}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">POSITION TIME</td>
              <td className="border px-4 py-2 text-left ">
                {details.positionTime}
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left ">CURRENT POSITION</td>
              <td className="border px-4 py-2 text-left ">
                {details.onGround
                  ? "Aircraft is on the ground"
                  : "Aircraft is in the air"}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Aircraftstatus;
