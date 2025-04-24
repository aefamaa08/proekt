document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Sahifa qayta yuklanishining oldini olamiz
  
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username === "" || email === "" || password === "") {
        alert("Пожалуйста, заполните все поля!");
      } else {
        // Agar hammasi to'g'ri bo'lsa, boshqa sahifaga o'tamiz
        window.location.href = "index.html"; // Bu sahifani o'zing yarat
      }
    });
  });
  