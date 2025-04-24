// Formani yuborishdan oldin foydalanuvchi ma'lumotlarini tekshirish
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishni oldini olish
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Foydalanuvchi ma'lumotlari tekshirilmoqda
    if (username === '' || password === '') {
      alert('Пожалуйста, заполните все поля!');
    } else {
      // Ma'lumotlar to'liq bo'lsa, tizimga kirish jarayoni amalga oshiriladi
      alert('Вход успешен!');
      // Bu yerda login funksiyasini amalga oshirish mumkin, masalan API so'rov yuborish
      // login(username, password);
      
      // Kirish tugagandan so'ng boshqa sahifaga o'tish (masalan, index.html)
      window.location.href = 'index.html';
    }
  });
  