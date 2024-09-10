let nama = prompt('Masukan Nama:');
let lagi = true;

while (lagi) {
    let nyawa = 4;
    let computer = Math.floor(Math.random() * 10) + 1;

    while (nyawa > 0) {
        let player = prompt('🔢GAME TEBAK ANGKA🔢\nMasukan Angka 1-10 Untuk Menebak!\n\nKesempatan Menebak: ' + nyawa);

        if (player == computer) {
            alert('🗣️Kamu menebak angka: ' + computer + '\n\nKamu Menang!😎🥇');
            break;
        } else if (player > computer) {
            alert('🗣️Kamu menebak angka: ' + player + '\n\nAngka terlalu tinggi, coba lagi!🤔');
        } else if (player < computer) {
            alert('🗣️Kamu menebak angka: ' + player + '\n\nAngka terlalu rendah, coba lagi!🤔');
        } else {
            alert('🗣️Kamu menebak angka: ' + player + '\n\nYang kamu masukan bukan angka, coba lagi!🤬');
        }

        nyawa--;

        if (nyawa === 0) {
            alert('Kesempatan menebak habis!😭\n\nAngka yang dicari adalah: ' + computer);
        }
    }

    lagi = confirm('Mau main lagi?');
}
alert('Terima kasih ' + nama + ' sudah bermain.😁');