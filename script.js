function expandChat() {
    document.getElementById("chat-widget").classList.remove("collapsed");
}

function toggleChat() {
    document.getElementById("chat-widget").classList.toggle("collapsed");
}

function sendMessage() {
    expandChat();
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    const userMessage = input.value.trim();
    if (!userMessage) return;

    messages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    const reply = getBotReply(userMessage);

    setTimeout(() => {
        messages.innerHTML += `<p><strong>Veloryn:</strong> ${reply}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("price") || msg.includes("pricing") || msg.includes("cost")) {
        return "Our starter solutions are built around each business’s needs. Most basic setups can start around a few hundred dollars depending on the project.";
    }

    if (msg.includes("website")) {
        return "We help build modern websites designed to look professional, explain your services clearly, and capture leads.";
    }

    if (msg.includes("lead") || msg.includes("customer")) {
        return "Veloryn Solutions can help create systems that capture leads, qualify them, and send them directly to you by email, Discord, or CRM.";
    }

    if (msg.includes("ai") || msg.includes("assistant") || msg.includes("bot")) {
        return "We build AI-style assistants that can answer common questions, guide visitors, collect lead details, and support business workflows.";
    }

    if (msg.includes("automation")) {
        return "Automation helps reduce repetitive work by connecting tools, forms, notifications, and customer workflows together.";
    }

    if (msg.includes("contact") || msg.includes("call") || msg.includes("email")) {
        return "You can use the contact form on this page to reach out. Include what you need, your timeline, and the best way to contact you.";
    }

    return "I can help with websites, AI assistants, automation, lead generation, and marketing support. What kind of project are you thinking about?";
}