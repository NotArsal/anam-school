export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  console.log("NEW CONTACT:", req.body);

  return res.status(200).json({ msg: "Message received!" });
}
