"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Aircraftrange = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [radius, setRadius] = useState("");
  const [allaircrafts, setAllAircrafts] = useState([]);
  const [error, setError] = useState(null);

  const handleChangeLatitude = (e) => {
    setLat(e.target.value);
  };

  const handleChangeLongitude = (e) => {
    setLon(e.target.value);
  };

  const handleChangeRadius = (e) => {
    setRadius(e.target.value);
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.facha.dev/v1/aircraft/live/range/${lat}/${lon}/${radius}`
      )
      .then((response) => {
        setAllAircrafts(response.data);
        setError(null);
      })
      .catch((error) => {
        setAllAircrafts(null);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="pt-20 p-10">
        <div>
          <div className="flex flex-col aspect-square gap-2 p-3">
            <h1 className="scroll-m-20 text-center  text-3xl font-medium tracking-tight lg:text-5xl">
              Get all aircraft in a range (up to 500km) of a center point
            </h1>
            <h2 className="mb-5 text-center scroll-m-20 pb-2 text-3xl font-thin tracking-tight transition-colors first:mt-0">
              Search the all Aircrafts using their longitute, latitude and
              radius.(Radius must be below 500)
            </h2>

            <hr />

            <form onSubmit={handleSubmit3} className="m-3">
              <div className="flex items-center justify-center gap-14 space-y-1.5">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="lat">Latitude</Label>
                  <Input
                    id="lat"
                    type="number"
                    value={lat}
                    onChange={handleChangeLatitude}
                    placeholder="Enter latitude ex:37.7749"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="lat">Longitude</Label>
                  <Input
                    id="lon"
                    type="number"
                    value={lon}
                    onChange={handleChangeLongitude}
                    placeholder="Enter longitude ex:-122.4194"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="radius">Radius</Label>
                  <Input
                    id="radius"
                    type="number"
                    value={radius}
                    onChange={handleChangeRadius}
                    placeholder="Enter radius ex:100"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
              <Button className="mt-4 mb-3 w-1/6 text-center" type="submit">
                Get Aircrafts
              </Button>
              </div>
            </form>

            <hr />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-semibold">
                    ICAO
                  </TableHead>
                  <TableHead>REG</TableHead>
                  <TableHead>TYPE</TableHead>
                  <TableHead>CALLSIGN</TableHead>
                  <TableHead>BAROALTITUDE</TableHead>
                  <TableHead>LATITUDE</TableHead>
                  <TableHead>LONGITUDE</TableHead>
                  <TableHead>SPEED</TableHead>
                  <TableHead>SQUAWK</TableHead>
                  <TableHead>POSITION TIME</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                { allaircrafts.map((item) => (
                  <TableRow key={item.icao}>
                    <TableCell className="font-medium">{item.icao}</TableCell>
                    <TableCell>{item.reg}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.callsign}</TableCell>
                    <TableCell>{item.baroAltitude}</TableCell>
                    <TableCell>{item.lat}</TableCell>
                    <TableCell>{item.lon}</TableCell>
                    <TableCell>{item.speed}</TableCell>
                    <TableCell>{item.squawk}</TableCell>
                    <TableCell>{item.positionTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aircraftrange;
