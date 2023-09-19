const count = document.getElementById("countinput");
const sum = document.getElementById("suminput");
const kirim = document.getElementById("kirim");
const hasil = document.getElementById("hasil");
let proses;

kirim.addEventListener("click", () => {
    let inputcount = count.value;
    let inputsum = sum.value;
    let inputstarts = 1;

    customFaktorial(inputcount, inputstarts, inputsum);
    hasil.textContent = proses;
});

function customFaktorial(n, mulai, sum) {
    var hasil = 0;
    var langkah = "";

    for (var i = 1; i <= n; i++) {
        var angka = sum.toString().repeat(i * mulai); // angka berapa yg akan diulang
        langkah += angka;
        hasil += parseInt(angka);

        if (i !== n) {
            langkah += " + ";
        }
    }

    proses = hasil;
}
