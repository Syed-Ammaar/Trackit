"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Military = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.facha.dev/v1/aircraft/live/military")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching aircraft data:", error);
        // Handle error if needed
      });
  }, []);

  return (
    <>
      <main className="mx-5">
        <div className="w-full pt-28 pb-8">
          <h2 className="scroll-m-20 text-center  text-4xl font-small tracking-tight lg:text-4xl">
            All Military Aircrafts info
          </h2>
        </div>

        <hr className="mx-10" />

        <div className="mx-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-semibold">ICAO</TableHead>
                <TableHead>REG</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>CALLSIGN</TableHead>
                
                <TableHead>LATITUDE</TableHead>
                <TableHead>LONGITUDE</TableHead>
                <TableHead>SPEED</TableHead>
                
                <TableHead className="text-right">POSITION TIME</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.icao}>
                  <TableCell className="font-medium">{item.icao}</TableCell>
                  <TableCell>{item.reg}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.callsign}</TableCell>
                  
                  <TableCell>{item.lat}</TableCell>
                  <TableCell>{item.lon}</TableCell>
                  <TableCell>{item.speed}</TableCell>
                  
                  <TableCell className="text-right">
                    {item.positionTime}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default Military;
