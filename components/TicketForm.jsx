"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TicketForm() {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware problem",
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/tickets/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-4 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>

        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="6"
          required
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1 ? true : false}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2 ? true : false}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3 ? true : false}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4 ? true : false}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5 ? true : false}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
}
