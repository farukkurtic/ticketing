"use server";

import { redirect } from "next/navigation";

import Ticket from "@/models/Ticket";

export async function updateTicket(formData) {
  const id = formData.get("id");
  const updateData = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    progress: formData.get("progress"),
    status: formData.get("status"),
    category: formData.get("category"),
  };
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();
    if (!ticket) {
      throw new Error("Ticket not found");
    }
  } catch (err) {
    console.log("Error updating the data:", err);
    throw err;
  }

  redirect("/");
}
