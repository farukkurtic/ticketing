import DeleteTicket from "./DeleteTicket";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority />
        <div className="ml-auto">
          <DeleteTicket />
        </div>
      </div>
      <h1>Ticket Title</h1>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description. Please push this as soon as you can.
      </p>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/2023 10:43PM</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}
