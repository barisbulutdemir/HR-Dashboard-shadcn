"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HiOutlinePlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function AddNoteCalender() {
  const { register, handleSubmit, setValue } = useForm();
  const [categories, setCategories] = useState([]);

  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/calendar/notes/", data)
      .then((response) => {
        console.log(response);
        window.location.href = "/"; // Sayfayı yeniden yönlendir
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/calendar/categories/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    register("category"); // category alanını kaydetmek için register işlemini yapın
  }, [register]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setValue("category", selectedCategory);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <HiOutlinePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <div className="col-span-3">
              <RadioGroup
                defaultValue=""
                onChange={handleCategoryChange}
              >
                {categories.map((category, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem
                      value={category.id} // Category ID'sini value olarak kullan
                      id={`category-${index}`}
                    />
                    <Label htmlFor={`category-${index}`}>
                      {category.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="body" className="text-right">
              Note
            </Label>
            <Textarea id="body" {...register("body")} className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
