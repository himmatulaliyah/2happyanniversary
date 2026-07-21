/* ================= MUSIC ================= */

const musicBtn = document.getElementById("musicBtn");
const musicPopup = document.getElementById("musicPopup");
const closeMusic = document.getElementById("closeMusic");

const audio = document.getElementById("song");       // song.mp3
const bgMusic = document.getElementById("bgMusic");  // song2.mp3
const playBtn = document.getElementById("playBtn");

/* ================= AUTOPLAY BACKGROUND ================= */

window.addEventListener("load", () => {

    bgMusic.volume = 0.35;

    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            document.addEventListener("click", () => {
                bgMusic.play();
            }, { once: true });

        });

    }

});

/* ================= OPEN POPUP ================= */

musicBtn.onclick = () => {

    musicPopup.classList.add("active");

};

/* ================= CLOSE POPUP ================= */

closeMusic.onclick = () => {

    musicPopup.classList.remove("active");

    audio.pause();
    audio.currentTime = 0;

    bgMusic.play();

    playBtn.innerHTML = "▶ Play Music";

};

/* ================= CLICK OUTSIDE ================= */

musicPopup.onclick = (e) => {

    if (e.target === musicPopup) {

        musicPopup.classList.remove("active");

        audio.pause();
        audio.currentTime = 0;

        bgMusic.play();

        playBtn.innerHTML = "▶ Play Music";

    }

};

/* ================= PLAY / PAUSE ================= */

playBtn.onclick = () => {

    if (audio.paused) {

        // Matikan background
        bgMusic.pause();

        // Putar song.mp3
        audio.play();

        playBtn.innerHTML = "⏸ Pause Music";

    } else {

        // Pause song.mp3
        audio.pause();

        // Lanjutkan background
        bgMusic.play();

        playBtn.innerHTML = "▶ Play Music";

    }

};

/* ================= JIKA SONG SELESAI ================= */

audio.addEventListener("ended", () => {

    bgMusic.play();

    playBtn.innerHTML = "▶ Play Music";

});

const planets = [
    document.querySelector(".bouquet"),
    document.querySelector(".message"),
    document.querySelector(".music"),
    document.querySelector(".chat"),
    document.querySelector(".radio")
];

let radiusX = 270;
let radiusY = 150;

// Geser posisi seluruh orbit
let offsetX = 0;   // + ke kanan, - ke kiri
let offsetY = 0;   // + ke bawah, - ke atas

/* MOBILE */
if (window.innerWidth <= 768) {
    radiusX = 200;
    radiusY = 130;

    offsetX = 0;    // contoh: 15 untuk geser kanan
    offsetY = -10;  // contoh: -10 agar sedikit ke atas
}

let angle = 0;
let isPaused = false;

function animate() {

    if (!isPaused) {
        angle += 0.003;
    }

    planets.forEach((planet, index) => {

        const a = angle + index * ((Math.PI * 2) / planets.length);

        const x = Math.cos(a) * radiusX + offsetX;
        const y = Math.sin(a) * radiusY + offsetY;

        planet.style.left = `calc(50% + ${x}px)`;
        planet.style.top = `calc(50% + ${y}px)`;

        if (y < 0) {
            planet.style.zIndex = 2;
            planet.style.filter = "blur(3px)";
            planet.style.opacity = ".45";
            planet.style.transform = "translate(-50%,-50%) scale(.8)";
        } else {
            planet.style.zIndex = 20;
            planet.style.filter = "blur(0)";
            planet.style.opacity = "1";
            planet.style.transform = "translate(-50%,-50%) scale(1)";
        }

    });

    requestAnimationFrame(animate);
}

animate();

const bouquetBtn = document.querySelector(".bouquet");

const bouquetPopup = document.getElementById("bouquetPopup");

const closeBouquet = document.getElementById("closeBouquet");

bouquetBtn.addEventListener("click", () => {

    bouquetPopup.classList.add("active");

});

closeBouquet.addEventListener("click", () => {

    bouquetPopup.classList.remove("active");

});

bouquetPopup.addEventListener("click", (e)=>{

    if(e.target===bouquetPopup){

        bouquetPopup.classList.remove("active");

    }

});

const messageBtn = document.querySelector(".message");
const messagePopup = document.getElementById("messagePopup");
const closeMessage = document.getElementById("closeMessage");
const typingText = document.getElementById("typingText");

const message = `

Happy anniversary untuk kita, sayang.
Satu tahun ya? mungkin terdengar seperti waktu yang sebentar buat sebagian orang, tapi buat aku, satu tahun ini menyimpan begitu banyak cerita yang nggak akan pernah cukup diceritakan dalam beberapa kalimat saja. Kalau dipikir-pikir, perjalanan kita sebenarnya bahkan dimulai jauh sebelum hari ini. Kita udah saling kenal sejak tahun 2022, waktu kita masih sama-sama kecil dan nggak pernah kepikiran kalau orang asing yang awalnya cuma hadir sebentar itu suatu hari nanti akan menjadi seseorang yang paling berharga dalam hidup. Lalu di tahun 2023 kita memulai hubungan ini. Perjalanannya jelas nggak sempurna. Kita pernah putus, pernah saling menjauh, pernah sama-sama keras kepala, pernah saling melukai, bahkan berkali-kali merasa hubungan ini mungkin nggak akan bertahan. Tapi setiap kali semuanya terasa selesai, entah kenapa kita selalu menemukan jalan untuk kembali. Mungkin memang sejak awal semesta selalu mengarahkan kita untuk pulang ke orang yang sama.

Terima kasih ya, karena setelah semua yang kita lewati, kamu masih memilih untuk tetap ada di sini. Terima kasih karena tetap percaya kalau hubungan ini masih layak diperjuangkan, bahkan di saat kita sama-sama lelah. Aku tahu mencintai aku bukan hal yang mudah. Aku sering terlalu banyak berpikir, sering keras kepala, sering cemburu, kadang sulit mengungkapkan apa yang sebenarnya aku rasakan, dan mungkin tanpa sadar sering membuatmu ikut terluka. Maaf ya, kalau selama ini aku belum bisa menjadi pasangan yang sempurna. Tapi percayalah, di balik semua kekuranganku, aku selalu berusaha mencintaimu dengan seluruh hati yang aku punya. Kalau selama ini aku tetap bertahan, itu bukan karena hubungan kita selalu bahagia, tapi karena aku nggak pernah berhenti percaya kalau orang yang sedang aku perjuangkan adalah orang yang ingin aku ajak berjalan sejauh mungkin.

Aku bersyukur banget dipertemukan sama kamu. Dari sekian banyak orang yang datang dan pergi dalam hidupku, ternyata kamulah yang tetap tinggal. Kamu yang selalu ingin aku ceritakan setiap hal kecil yang terjadi dalam hariku, kamu yang selalu berhasil membuatku merasa tenang hanya dengan mengetahui kalau kamu masih ada. Mungkin terdengar berlebihan, tapi buat aku, rumah bukan lagi tentang sebuah tempat. Rumah adalah seseorang yang selalu ingin aku tuju setelah melewati hari yang panjang, dan rumah itu selalu kamu. Seberapa pun kita bertengkar, seberapa pun kita saling mengecewakan, pada akhirnya yang selalu ingin aku cari tetap kamu.

Ada satu hal yang sampai hari ini masih menjadi harapan terbesarku. Maaf ya, selama perjalanan kita sampai sejauh ini kita belum pernah benar-benar bertemu secara langsung. Kadang aku iri melihat pasangan lain yang bisa berjalan berdampingan, saling menggenggam tangan, atau sekadar duduk berdua tanpa terhalang layar. Sedangkan kita masih harus menyampaikan rindu lewat pesan, masih harus saling menguatkan dari kejauhan, dan masih harus menunggu waktu yang tepat untuk akhirnya benar-benar bertatap muka. Maaf karena selama satu tahun ini aku belum bisa memberikan momen itu untuk kita. Tapi aku ingin kamu tahu kalau aku benar-benar mengusahakannya. Aku berharap tahun depan kita nggak lagi merayakan hari ini dengan saling memandang lewat layar, tapi dengan saling menatap secara langsung, berjalan berdampingan, dan merasakan rasanya menjadi pasangan seperti kebanyakan orang. Aku ingin hari itu benar-benar datang, karena rasanya penantian selama ini akan terasa sangat berarti ketika akhirnya aku bisa melihatmu berdiri di depanku.

Kalau suatu hari nanti Tuhan memberiku kesempatan untuk mengulang semuanya dari awal, aku tetap ingin dipertemukan dengan anak kecil yang aku kenal di tahun 2022. Aku tetap ingin jatuh cinta pada orang yang sama di tahun 2023. Bahkan kalau aku harus mengulang semua air mata, semua pertengkaran, semua perpisahan, dan semua proses yang pernah kita lewati, aku tetap akan memilih jalan yang sama. Karena tanpa semua itu, mungkin aku nggak akan pernah mengenal dirimu sedalam ini. Aku belajar kalau cinta bukan tentang hubungan yang nggak pernah retak, tapi tentang dua orang yang tetap memilih saling menggenggam setelah semua yang mereka lewati. Dan sampai hari ini, setelah semua cerita yang kita punya, pilihanku masih tetap kamu.

Aku nggak tahu masa depan akan membawa kita ke mana. Aku juga nggak bisa janji kalau nanti kita nggak akan bertengkar lagi atau semuanya akan selalu mudah. Tapi aku bisa janji satu hal, selama kamu masih mau berjalan bersamaku, aku akan terus memilih kamu. Bukan karena hubungan kita sempurna, bukan karena kita nggak pernah saling menyakiti, tapi karena setelah semua yang terjadi, aku tetap nggak menemukan alasan untuk berhenti mencintaimu. Terima kasih sudah menjadi rumah, sudah menjadi tempatku pulang, sudah menjadi orang yang tetap bertahan ketika semuanya terasa sulit. Selamat anniversary, sayang. Terima kasih sudah mencintaiku, terima kasih sudah memilihku lagi dan lagi. Semoga ini bukan hanya satu tahun yang kita rayakan, tetapi awal dari banyak tahun berikutnya. Dan semoga tahun depan, kita nggak lagi dipisahkan oleh jarak, melainkan bisa merayakan hari ini sambil saling menggenggam tangan dan saling meyakinkan kalau semua penantian ini benar-benar terbayar. Aku mencintaimu, lebih dari yang bisa dijelaskan oleh kata-kata, dan aku harap, di setiap tahun yang akan datang, aku masih bisa memanggilmu rumah.

`;

let i = 0;
let typingInterval;

messageBtn.addEventListener("click",()=>{

    messagePopup.classList.add("active");

    typingText.innerHTML="";

    i=0;

    clearInterval(typingInterval);

    typingInterval=setInterval(()=>{

        if(i<message.length){

            typingText.innerHTML += message.charAt(i);

            typingText.scrollTop=typingText.scrollHeight;

            i++;

        }else{

            clearInterval(typingInterval);

        }

    },35);

});

closeMessage.addEventListener("click",()=>{

    messagePopup.classList.remove("active");

    clearInterval(typingInterval);

});

messagePopup.addEventListener("click",(e)=>{

    if(e.target===messagePopup){

        messagePopup.classList.remove("active");

        clearInterval(typingInterval);

    }

});


/* ================= RADIO ================= */

const radioBtn = document.getElementById("radioBtn");
const radioPopup = document.getElementById("radioPopup");
const closeRadio = document.getElementById("closeRadio");

const scanRadio = document.getElementById("scanRadio");
const radioNumber = document.getElementById("radioNumber");
const radioStatus = document.getElementById("radioStatus");
const radioResult = document.getElementById("radioResult");
const radioIndicator = document.getElementById("radioIndicator");

const loveDay = document.querySelector(".love-day");

let scanning = false;
let randomInterval;
let indicatorInterval;

const SCAN_DURATION = 5000; // durasi scan (5 detik)

/* ================= OPEN POPUP ================= */

radioBtn.addEventListener("click", () => {

    radioPopup.classList.add("active");

    resetRadio();

});

/* ================= CLOSE ================= */

closeRadio.addEventListener("click", () => {

    radioPopup.classList.remove("active");

    stopScanning();

});

radioPopup.addEventListener("click", (e) => {

    if (e.target === radioPopup) {

        radioPopup.classList.remove("active");

        stopScanning();

    }

});

/* ================= RESET ================= */

function resetRadio() {

    stopScanning();

    radioNumber.textContent = "--.--";

    radioStatus.textContent = "FREKUENSINYA MASIH RAHASIA";

    radioResult.textContent = "";

    scanRadio.disabled = false;

    scanRadio.textContent = "Cari Frekuensi Kita";

    radioIndicator.style.left = "50%";

    if (loveDay) {
        loveDay.classList.remove("active");
    }

}

/* ================= SCAN ================= */

scanRadio.addEventListener("click", () => {

    if (scanning) return;

    scanning = true;

    scanRadio.disabled = true;

    scanRadio.textContent = "Mencari...";

    radioStatus.textContent = "MENCARI FREKUENSI...";

    if (loveDay) {
        loveDay.classList.remove("active");
    }

    /* angka random */

    randomInterval = setInterval(() => {

        const random = (Math.random() * 99).toFixed(2);

        radioNumber.textContent = random;

    }, 70);

    /* slider bergerak */

    let direction = 1;
    let position = 50;

    indicatorInterval = setInterval(() => {

        position += direction * 3;

        if (position >= 95) direction = -1;
        if (position <= 5) direction = 1;

        radioIndicator.style.left = position + "%";

    }, 40);

    /* selesai */

    setTimeout(() => {

        stopScanning();

        radioNumber.textContent = "20.07";

        radioStatus.textContent = "TANGGAL JADIAN KITA";

        radioResult.innerHTML = "Ketemu! 20 Juli Kita Memulai";

        radioIndicator.style.left = "10%";

        scanRadio.textContent = "Frekuensi Ditemukan";

// Nyalakan tanggal 20 setelah frekuensi ditemukan
setTimeout(() => {

    loveDay.classList.add("active");

}, 400);

    }, SCAN_DURATION);

});

/* ================= STOP ================= */

function stopScanning() {

    scanning = false;

    clearInterval(randomInterval);

    clearInterval(indicatorInterval);

}

/* ================= CHAT ================= */

const chatBtn = document.getElementById("chatBtn");
const chatPopup = document.getElementById("chatPopup");
const closeChat = document.getElementById("closeChat");

const chatBody = document.querySelector(".chat-body");

let step = 0;


/* ================= OPEN POPUP ================= */

chatBtn.addEventListener("click",()=>{

    chatPopup.classList.add("active");

    resetChat();

});



/* ================= CLOSE ================= */

closeChat.addEventListener("click",()=>{

    chatPopup.classList.remove("active");

    resetChat();

});



chatPopup.addEventListener("click",(e)=>{

    if(e.target === chatPopup){

        chatPopup.classList.remove("active");

        resetChat();

    }

});



/* ================= RESET ================= */

function resetChat(){

    step = 0;


    chatBody.innerHTML = `

    <div class="chat-message">

        <div class="chat-bubble">

            <div class="chat-name">
                Dari Aku
            </div>

            <div class="chat-text">
                Naik kapal menuju pulau, lihat camar terbang melaju.
            </div>

            <span class="chat-time">
                16.54 ✓✓
            </span>

        </div>

    </div>


    <div class="hold-area">

        <button class="hold-btn">
            Cakep
        </button>

    </div>

    `;


    activateButton();

}



/* ================= BUTTON ================= */

function activateButton(){

    const btn = document.querySelector(".hold-btn");


    if(!btn) return;


    btn.onclick = ()=>{


        btn.parentElement.remove();


        nextChat();


    };


}



/* ================= CHAT FLOW ================= */

function nextChat(){


    step++;



    // klik Cakep pertama

    if(step === 1){


        addRight(`
            Cakep
        `);



        setTimeout(()=>{


            addLeft(`
                Beda agama, beda pulau, menyala bosku.
            `);



            addButton("Lanjut Pantun");



        },700);



    }




    // klik lanjut pantun

    else if(step === 2){


        addLeft(`
            Pergi ke pasar beli pepaya, sekalian beli buah naga.
        `);



        addButton("Cakep");



    }




    // klik cakep terakhir

    else if(step === 3){


        addRight(`
            Cakep
        `);



        setTimeout(()=>{


            addLeft(`
                Dari 2023 udah berharap, 2026 masih sama aja. Jadi sayang kapan montok? 
            `);



        },700);



    }



}



/* ================= ADD LEFT ================= */

function addLeft(text){


    chatBody.insertAdjacentHTML(

    "beforeend",

`
<div class="chat-message">

    <div class="chat-bubble">

        <div class="chat-name">
            Dari Aku
        </div>

        <div class="chat-text">
            ${text}
        </div>

        <span class="chat-time">
            16.57 ✓✓
        </span>

    </div>

</div>
`

    );


}



/* ================= ADD RIGHT ================= */

function addRight(text){


    chatBody.insertAdjacentHTML(

    "beforeend",

`
<div class="reply-message show">

    <div class="reply-bubble">

        ${text}

    </div>

</div>
`

    );


}



/* ================= ADD BUTTON ================= */

function addButton(text){


    chatBody.insertAdjacentHTML(

    "beforeend",

`
<div class="hold-area">

    <button class="hold-btn">

        ${text}

    </button>

</div>
`

    );


    activateButton();


}