import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async () => {
    const res = await axios.post("/api/contact", form);
    alert(res.data.msg);
  };

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <div className="flex flex-col gap-4 max-w-lg">
        <input
          className="p-3 border rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="p-3 border rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="p-3 border rounded h-32"
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="bg-secondary text-white p-3 rounded" onClick={submit}>
          Submit
        </button>
      </div>
    </section>
  );
}
