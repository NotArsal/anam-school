import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async () => {
    const res = await axios.post("/api/contact", form);
    alert(res.data.msg);
  };

  return (
    <section className="p-6 md:p-12 leading-7">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>

      <div className="flex flex-col gap-4 max-w-lg mb-12">
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
        <button
          className="bg-secondary text-white p-3 rounded shadow"
          onClick={submit}
        >
          Submit
        </button>
      </div>

      <h2 className="text-3xl font-bold text-primary mb-4">School Location</h2>

      {/* 👉 Your screenshot instead of Google Maps iframe */}
      <img
        src="/images/school-map.jpg"
        alt="School Location Map"
        className="w-full h-72 rounded shadow object-cover"
      />

      <p className="mt-4 text-gray-700">
        <strong>Address:</strong> Near XYZ Area, Your City, Pin Code
        <br />
        <strong>Phone:</strong> +91 9970995189
        <br />
        <strong>Email:</strong> anamurduprimaryschooljintur239@gmail.com
      </p>
    </section>
  );
}
