const whatsappButton = document.getElementById("whatsapp-button");
const whatsappForm = document.getElementById("whatsapp-form");

whatsappButton.addEventListener("click", function() {
  whatsappForm.classList.add("show");
});

whatsappForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = whatsappForm.querySelector("input[name='name']").value;
  const phone = whatsappForm.querySelector("input[name='phone']").value;

  // Envia os dados para o WhatsApp
  window.open("https://wa.me/" + phone + "?text=Olá,%20" + name);

  // Oculta o formulário
  whatsappForm.classList.remove("show");
});
