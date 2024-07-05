import { NextResponse } from "next/server";
import Ticket from "@/models/Ticket";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });
  //return NextResponse.json({ foundTicket }, { status: 200 }); // ovo vraca foundTicket u objektu pa bi se moralo rastavljati da se uzmu properties
  return NextResponse.json(foundTicket, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (err) {
    console.log("Error deleting the ticket:", err);
    return NextResponse.json(
      { message: "Failed to delete the ticket" },
      { status: 500 }
    );
  }
}
