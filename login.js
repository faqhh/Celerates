// Menangani pengiriman form
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mendapatkan nilai dari input
    const email = document.querySelector('input[placeholder="Masukan email anda"]').value;
    const pass = loginPassword.value;

    // Mendapatkan data dari localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Mencari pengguna yang cocok
    const user = storedUsers.find(user => user.email === email && user.password === pass);

    if (user) {
        alert('Login berhasil!');
        // Redirect ke halaman utama atau dashboard
        window.location.href = "index.html"; // Ganti dengan halaman yang sesuai
    } else {
        alert('Email atau kata sandi salah!');
    }
});
