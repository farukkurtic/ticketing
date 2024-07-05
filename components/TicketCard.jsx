import Link from "next/link";

import DeleteTicket from "./DeleteTicket";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard({
  idd,
  title,
  description,
  priority,
  status,
  category,
  time,
}) {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority priority={priority} />
        <div className="ml-auto">
          <DeleteTicket id={idd} />
        </div>
      </div>
      <Link key={idd} href={`/all-tickets/${idd}`}>
        <h1>{title}</h1>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{time}</p>
            <ProgressBar />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={`bg-${status}`} />
          </div>
        </div>
      </Link>
    </div>
  );
}
