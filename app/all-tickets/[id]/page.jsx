const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ticket");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Ticket({ params }) {
  const { id } = params;
  const fetchedTicket = await getTicketById(id);
  return (
    <>
      <h1>{fetchedTicket.title}</h1>
      <p>{fetchedTicket.description}</p>
    </>
  );
}
