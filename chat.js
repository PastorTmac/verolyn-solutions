export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-4.1-mini",
            input: `You are the Veloryn Solutions website assistant. Help visitors understand AI automation, lead generation, websites, and marketing support. Be professional and ask for contact info when appropriate. Visitor says: ${message}`,
        }),
    });

    const data = await response.json();

    res.status(200).json({
        reply: data.output_text || "Sorry, I had trouble responding.",
    });
}