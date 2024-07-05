"use server";

import TicketCard from "@/components/TicketCard";

const getTickets = async () => {
  try {
    // is the component is server-side full path must be used
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store", // this line is used where it's important to fetch the latest data because it bypasses the caching entirely
    });
    return res.json();
  } catch (err) {
    console.log("Failed to get tickets:", err);
  }
};

export default async function Home() {
  const { allTickets } = await getTickets();

  const categories = [
    {
      categoryName: "Software Problem",
    },
    {
      categoryName: "Hardware Problem",
    },
    {
      categoryName: "Project",
    },
  ];

  return (
    <div className="p-5">
      {categories.map((category) => {
        const filteredCategories = allTickets.filter(
          (ticket) => ticket.category === category.categoryName
        );

        return (
          <div key={category.categoryName}>
            <h2>{category.categoryName}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4 sm:grid-rows-1">
              {filteredCategories.map((ticket) => {
                const dateTime = ticket.createdAt;
                const date = new Date(dateTime);

                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, "0");
                const day = date.getDate().toString().padStart(2, "0");
                const hours = date.getHours().toString().padStart(2, "0");
                const minutes = date.getMinutes().toString().padStart(2, "0");

                const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
                return (
                  <TicketCard
                    key={ticket.title}
                    title={ticket.title}
                    description={ticket.description}
                    status={ticket.status}
                    time={formattedDate}
                    priority={ticket.priority}
                    idd={ticket._id}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
