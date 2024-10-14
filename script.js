// Pastikan form telah diambil dari DOM
const registrationForm = document.getElementById('registrationForm'); // Ganti dengan ID form Anda jika berbeda

// Menangani pengiriman form
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mendapatkan nilai dari input
    const firstName = document.querySelector('input[name="first-name"]').value.trim();
    const lastName = document.querySelector('input[name="last-name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const termsChecked = document.getElementById('terms').checked;

    // Validasi form
    if (!firstName || !lastName || !email || !pass || !confirmPass) {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }

    // Validasi panjang kata sandi minimal 6 karakter
    if (pass.length < 6) {
        alert('Kata sandi harus minimal 6 karakter!');
        return;
    }

    if (pass !== confirmPass) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
        return;
    }

    if (!termsChecked) {
        alert('Anda harus setuju dengan syarat & ketentuan!');
        return;
    }

    // Menyimpan data pengguna ke localStorage (Pastikan tidak menyimpan password mentah!)
    const user = {
        firstName,
        lastName,
        email,
        // WARNING: Jangan simpan kata sandi di localStorage tanpa enkripsi!
        password: pass // Anda seharusnya menggunakan hash/enkripsi di sini untuk keamanan
    };

    // Mengambil data pengguna yang sudah ada di localStorage atau membuat array baru
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(user);

    // Menyimpan kembali data pengguna ke localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Melakukan pengalihan ke halaman login.html setelah form diisi dengan benar
    window.location.href = "login.html";
});

document.getElementById("sendBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
    
    if (userMessage) {
        // Tampilkan pesan pengguna
        addMessage(userMessage, 'user');
        userInput.value = ''; // Kosongkan input
        
        // Simulasi respons AI
        setTimeout(() => {
            const aiResponse = generateAIResponse(userMessage);
            addMessage(aiResponse, 'ai');
        }, 1000); // Simulasi penundaan 1 detik
    }
});

