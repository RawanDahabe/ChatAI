const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "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";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
  <img src="icons/user.jpeg" alt="user icon"> <span>${message}</span>
  </div>`;



const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const params = {
  messages: [{"role": "user", "content": message}],
  model: "gpt-3.5-turbo",
  max_tokens: 10,
  temperature: 0,
};

client
  .post("https://api.openai.com/v1/chat/completions", params)
  .then((result) => {
    const chatbotResponse  = result.data.choices[0].message.content;

    messages.innerHTML += `<div class="message bot-message">
    <img src="icons/robot.jpeg" alt="bot icon"> <span>${chatbotResponse}</span>
    </div>`;
    console.log(result.data.choices[0].message.content);
  })
  .catch((err) => {
    console.log(err);
  });
  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
  <img src="icons/robot.jpeg" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});
