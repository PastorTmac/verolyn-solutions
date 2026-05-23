async function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    const userMessage = input.value.trim();
    if (!userMessage) return;

    messages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = "";

    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    messages.innerHTML += `<p><strong>Veloryn:</strong> ${data.reply}</p>`;
    messages.scrollTop = messages.scrollHeight;
}