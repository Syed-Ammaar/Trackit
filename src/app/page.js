"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Aircraft from "./Aircraftdetails/page";
import { Button } from "@/components/ui/button";
import WavyBackground from "@/components/ui/wavy-background";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen px-5 z-1">
        <WavyBackground color="purple">
          <div className="py-44 flex gap-24 items-center h-screen">
            <div>
              <h1 className="w-full px-16 font-mono uppercase text-center text-7xl leading-none tracking-tighter font-semibold">
                Explore Aircraft 🛩️,Ships 🚢 Database and Live Radar 📡
                Information.
              </h1>
            </div>
          </div>
        </WavyBackground>

        <hr></hr>

        <div className="w-full h-auto p-10 pb-8 flex gap-52">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Share your feedback 😊</CardTitle>
              <CardDescription>Hey👋, Did you like it ?</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" placeholder="Enter your email " />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Input id="feedback" placeholder="Enter your feedback" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-start">
              <Button>Send Feedback</Button>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-4">
            <h1 className="w-full font-mono uppercase text-left text-5xl leading-none tracking-tighter font-semibold">
              Contact Me 📞
            </h1>

            <div className="flex gap-1 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">Syed Ammaar Farhan</h3>
            </div>
            <h3 className="font-semibold">📧 ammaarfarhan11@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
}
