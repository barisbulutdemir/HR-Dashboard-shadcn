"use client"

import * as React from "react"
import { Calendar } from '../ui/calendar';
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import axios from 'axios'; 
import { HiOutlinePlus } from "react-icons/hi";
import { Button } from "../ui/button";
import { AddNoteCalender } from "./CalenderITems/addNotes";
import { ScrollArea } from "../ui/scroll-area";

export default function RightMenu() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [notes, setNotes] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false); // Yeni state

  const fetchNotes = async (year: number, month: number, day: number) => {
    setLoading(true);
    try {
      setNotes([]); // Notları temizle
      const response = await axios.get(`http://127.0.0.1:8000/notes/date/${year}/${month}/${day}/`);
      await new Promise(resolve => setTimeout(resolve, 500));
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  

  React.useEffect(() => {
    if (date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      fetchNotes(year, month, day);
    }
  }, [date]);

  return (
    <>
      <div className="flex ">
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      </div>
      <Card className="mt-4 p-3 h-[270px]">
        <div className="flex justify-end h-6">
          <AddNoteCalender />
        </div>
          <div className=" flex justify-center">
             <Label className=" opacity-30 text-md">Daily Things</Label>
          </div>
          <ScrollArea className="h-[200px]">
          <div className="grid space-y-3">
          
            {loading ? (
              <Label>Loading...</Label> // Yükleniyor durumunu göster
            ) : (
              notes.map((note, index) => (
                
                <Label key={index} className="">- {note.body}</Label> 
                
              ))
            )}
           
            
          </div>
          </ScrollArea>
      </Card>
    </>
  )
}
