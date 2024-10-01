// Menunggu sampai tombol diklik oleh pengguna
document.getElementById('interactBtn').addEventListener('click', function() {
    // Meminta pengguna untuk memasukkan pesan yang ingin dikirim
    const message = prompt("Masukkan pesan yang ingin kamu sampaikan:");

    // Jika pengguna memasukkan pesan, tampilkan pesan kepada semua orang
    if (message) {
        alert("Pesan untuk semua orang: " + message);
    } else {
        // Jika pesan kosong, beri tahu pengguna
        alert("Kamu belum memasukkan pesan.");
    }
});
