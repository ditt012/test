const responses = {
    "siapa pembuat kamu": "Saya dibuat oleh Aditya Jamil Nurahman untuk membantu Anda dalam bidang teknologi, jaringan, dan TKJ.",
    "apa itu teknologi": "Teknologi adalah penerapan pengetahuan ilmiah untuk tujuan praktis dalam berbagai bidang, termasuk industri.",
    "apa itu jaringan komputer": "Jaringan komputer adalah kumpulan komputer yang saling terhubung dan dapat saling berbagi data serta sumber daya.",
    "apa itu internet": "Internet adalah jaringan global yang menghubungkan jutaan perangkat di seluruh dunia, memungkinkan pertukaran informasi.",
    "apa itu tkj": "TKJ (Teknik Komputer dan Jaringan) adalah bidang keahlian yang mempelajari teknologi komputer dan jaringan.",
    "bahasa pemrograman yang populer": "Beberapa bahasa pemrograman populer saat ini antara lain Python, JavaScript, Java, dan C++.",
    "apa itu keamanan siber": "Keamanan siber adalah praktik melindungi sistem, jaringan, dan program dari serangan digital.",
    "apa itu cloud computing": "Cloud computing adalah layanan komputasi yang disediakan melalui internet, seperti penyimpanan dan pengolahan data.",
    "fungsi dari router": "Router adalah perangkat jaringan yang mengarahkan lalu lintas data antarjaringan, menghubungkan jaringan yang berbeda.",
    "default": "Maaf, saya hanya dapat menjawab pertanyaan seputar teknologi, jaringan, dan hal terkait. Coba tanyakan sesuatu yang spesifik."
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    // Tampilkan pesan pengguna
    displayMessage(userInput, "user");

    // Dapatkan respons chatbot
    const botResponse = getBotResponse(userInput.toLowerCase());
    displayMessage(botResponse, "bot");

    // Bersihkan input pengguna
    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    return responses[input] || responses["default"];
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");

    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content", sender);
    messageContent.textContent = message;

    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);

    // Scroll ke bagian bawah chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Kirim pesan dengan menekan tombol Enter
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});