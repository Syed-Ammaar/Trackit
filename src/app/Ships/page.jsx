"use client";
import React, { useState } from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Ships = () => {
  const [mmsi, setMmsi] = useState("");
  const [shipDetails, setShipDetails] = useState(null);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [radius, setRadius] = useState("");
  const [allships, setAllShips] = useState([]);

  const handleChange = (e) => {
    setMmsi(e.target.value);
  };

  const handleChangeLAT = (e) => {
    setLat(e.target.value);

  };

  const handleChangeLON = (e) => {
    
    setLon(e.target.value);
    
  };

  const handleChangeRAD = (e) => {
    
    setRadius(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.facha.dev/v1/ship/${mmsi}`)
      .then((response) => {
        setShipDetails(response.data[0]);
        setError(null);
      })
      .catch((error) => {
        setShipDetails(null);
        setError(error.message);
      });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.facha.dev/v1/ship/radius/${lat}/${lon}/${radius}`)
      .then((response) => {
        setAllShips(response.data);
        setError(null);
      })
      .catch((error) => {
        setAllShips(null);
        setError(error.message);
      });
  };

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center pt-20">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent className='h-screen'>
            <CarouselItem>
              <div className="p-1">
                <Card className='h-[80vh]'>
                  <CardContent className="flex flex-col aspect-square gap-5 p-6">
                    <CardTitle>Get information of a ship by MMSI</CardTitle>
                    <CardDescription>
                      Search the ships using their mmsi (The MMSI is a unique
                      nine-digit number assigned to maritime mobile stations,
                      including ships and shore stations)
                    </CardDescription>

                    <div className="flex flex-col gap-2 space-y-1.5">
                      <form onSubmit={handleSubmit}>
                        <Label htmlFor="mmsi">MMSI Number</Label>
                        <Input
                          id="mmsi"
                          type="number"
                          value={mmsi}
                          onChange={handleChange}
                          placeholder="Enter the ship mmsi number"
                          required
                        />
                        <Button className="w-full mt-3" type="submit">
                          Get Ship Details
                        </Button>
                      </form>
                      {shipDetails && (
                        <div className="w-full flex flex-col gap-5 ">
                          <h2 className="font-semibold text-center text-xl">
                            Ship Details
                          </h2>
                          <div className="w-full h-full">
                            <table className="border-collapse border border-white">
                              <tbody>
                                <tr>
                                  <td className="border border-white p-2">
                                    Name
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.name}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    CallSign
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.callSign}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    MMSI
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.mmsi}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Time
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.timestamp}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Longitude
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.longitude}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Latitude
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.latitude}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Destination
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.destination}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Arrival Time
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.estimatedTimeOfArrival}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Navigational Status
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.navigationalStatus}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Rate of return
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.rateOfTurn}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-white p-2">
                                    Course over Ground
                                  </td>
                                  <td className="border border-white p-2 text-white">
                                    {shipDetails.courseOverGround}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card className='h-[80vh]'>
                  <CardContent className="flex flex-col aspect-square gap-5 p-3">
                    <CardTitle>
                      Get information of all ships in a radius of a center point
                    </CardTitle>
                    <CardDescription>
                      Search the ships using their longitute, latitude and
                      radius.(Radius must be below 30)
                    </CardDescription>

                    <form onSubmit={handleSubmit2}>
                      <div className="flex gap-1 items-center justify-between space-y-1.5">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="lat">Latitude</Label>
                          <Input
                            id="lat"
                            type="number"
                            value={lat}
                            onChange={handleChangeLAT}
                            placeholder="Enter latitude ex:36.94464"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <Label htmlFor="lat">Longitude</Label>
                          <Input
                            id="lon"
                            type="number"
                            value={lon}
                            onChange={handleChangeLON}
                            placeholder="Enter longitude ex:-25.14729"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <Label htmlFor="radius">Radius</Label>
                          <Input
                            id="radius"
                            type="number"
                            value={radius}
                            onChange={handleChangeRAD}
                            placeholder="Enter radius ex:25"
                          />
                        </div>
                      </div>
                      <Button className="w-full mt-3" type="submit">
                        Get Ship Details
                      </Button>
                    </form>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px] font-semibold">
                            MMSI
                          </TableHead>
                          <TableHead>NAME</TableHead>
                          
                          <TableHead>CALLSIGN</TableHead>
                          <TableHead>TYPE</TableHead>
                          <TableHead>DESTINATION</TableHead>
                          <TableHead>LATITUDE</TableHead>
                          <TableHead>LONGITUDE</TableHead>
                          <TableHead>ARRIVAL TIME</TableHead>
                          <TableHead>COURSE OVER GROUND</TableHead>
                          <TableHead className="text-right">
                            SPEED
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {allships.map((item) => (
                          <TableRow key={item.mmsi}>
                            <TableCell className="font-medium">
                              {item.mmsi}
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.callSign}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.destination}</TableCell>
                            <TableCell>{item.latitude}</TableCell>
                            <TableCell>{item.longitude}</TableCell>
                            <TableCell>{item.estimatedTimeOfArrival}</TableCell>
                            <TableCell>{item.courseOverGround}</TableCell>
                            <TableCell className="text-right">
                              {item.speedOverGround}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Ships;
