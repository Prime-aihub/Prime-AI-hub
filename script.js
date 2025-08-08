const productData = {
    education: ["🎓 Personal AI Tutor", "📋 AI Attendance Marker"],
    health: ["🧠 AI Therapist Chatbot", "📊 Mental Health Logbook"],
    legal: ["📄 Legal Doc Explainer", "💰 Income Tax Assistant"],
    productivity: ["📑 Resume Builder", "🗣 Meeting Summarizer"],
    fashion: ["👕 Virtual Outfit Matcher", "📦 AI Wardrobe Organizer"],
    style: ["🎯 Style Suggestion Assistant", "🏠 Build-care Designer"],
    appdev: ["📱 Cross-Platform AI App Development", "⚙ AI Automation Integration in Apps"],
    chatbots: [
        "📅 Appointment Booking Bot",
        "📦 Product Catalog Bot",
        "💬 Simple Enquiry Bot",
        "🛒 Order Placement Bot",
        "⭐ Feedback / Rating Bot",
        "🌐 Multilingual Selector Bot",
        "📋 Service Menu Bot"
    ]
};

function showProducts(category) {
    const container = document.getElementById('products');
    container.innerHTML = "";
    productData[category].forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerText = product;
        container.appendChild(card);
    });
    container.style.display = "flex";
}

function setTheme(theme) {
    document.body.className = theme;
}
