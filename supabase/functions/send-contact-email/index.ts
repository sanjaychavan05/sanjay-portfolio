import React, { useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("https://sanjaypraka-sanjay-cont-90-am0bh9z9gt18.deno.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-background text-foreground text-center">
      <h1 className="text-4xl font-bold mb-4">Sanjay Prakash Chavan</h1>
      <p className="mb-8 text-gray-400">
        Full Stack Developer & Machine Learning Enthusiast 🚀
      </p>

      <form onSubmit={handleContact} className="flex flex-col gap-3 w-80">
        <input
          name="name"
          placeholder="Your Name"
          className="border rounded p-2 text-black"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="border rounded p-2 text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border rounded p-2 text-black"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-500" : "bg-primary hover:bg-primary/80"
          } text-primary-foreground px-4 py-2 rounded`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
};

export default Index;
