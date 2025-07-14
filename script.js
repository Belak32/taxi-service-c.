form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const tariff = document.getElementById("tariff").value;

  let tariffText = "";
  switch (tariff) {
    case "econom":
      tariffText = "Економ";
      break;
    case "comfort":
      tariffText = "Комфорт";
      break;
    case "business":
      tariffText = "Бізнес";
      break;
    default:
      tariffText = "Не вказано";
  }

  if (from && to && phone && tariff) {
    confirmation.classList.remove("hidden");
    confirmation.innerHTML = `
      <h3>Замовлення прийнято!</h3>
      <p>Машина скоро прибуде з <strong>${from}</strong> до <strong>${to}</strong>.</p>
      <p>Ми зателефонуємо вам на номер <strong>${phone}</strong>.</p>
      <p>Обраний тариф: <strong style="color: green;">${tariffText}</strong></p>
    `;
    form.reset();
  } else {
    confirmation.classList.remove("hidden");
    confirmation.innerHTML = `<p style="color:red;">Будь ласка, заповніть всі поля!</p>`;
  }
});
