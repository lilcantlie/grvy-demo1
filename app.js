// --- Global Realtime Clock ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('id-ID', optionsDate);
    
    // Status Bar & Lockscreen
    document.getElementById('status-time').innerText = `${hours}:${minutes}`;
    document.getElementById('lock-time').innerText = `${hours}:${minutes}`;
    document.getElementById('lock-date').innerText = dateStr;
    
    // Clock App
    const clockBigTime = document.getElementById('clock-big-time');
    const clockBigDate = document.getElementById('clock-big-date');
    if (clockBigTime) clockBigTime.innerText = `${hours}:${minutes}:${seconds}`;
    if (clockBigDate) clockBigDate.innerText = `${dateStr} ${now.getFullYear()}`;
    
    // Widget Calendar Date
    const widgetDay = document.getElementById('widget-day');
    if (widgetDay) widgetDay.innerText = now.getDate();
}

setInterval(updateClock, 1000);
updateClock();

// --- Lockscreen Swipe to Passcode ---
const swipeBtn = document.getElementById('swipe-up-btn');
swipeBtn.addEventListener('click', () => {
    document.getElementById('lockscreen').classList.remove('active');
    document.getElementById('passcode-screen').classList.add('active');
});

// --- Passcode System (PIN: 7777) ---
let enteredPin = "";
const targetPin = "7777";
const keys = document.querySelectorAll('.key');
const dots = document.querySelectorAll('.passcode-dots .dot');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const val = key.getAttribute('data-key');
        if (enteredPin.length < 4) {
            enteredPin += val;
            updateDots();
        }
        
        if (enteredPin.length === 4) {
            setTimeout(() => {
                if (enteredPin === targetPin) {
                    document.getElementById('passcode-screen').classList.remove('active');
                    document.getElementById('homescreen').classList.add('active');
                } else {
                    alert('Passcode salah! Gunakan: 7777');
                }
                enteredPin = "";
                updateDots();
            }, 200);
        }
    });
});

function updateDots() {
    dots.forEach((dot, idx) => {
        if (idx < enteredPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

// --- App Navigation System ---
function openApp(appName) {
    if (appName === 'dummy') return; // Logo estetika aja
    
    const appContainer = document.getElementById('app-container');
    const appHeaderTitle = document.getElementById('app-header-title');
    
    // Hide all app views
    document.querySelectorAll('.app-content').forEach(el => el.classList.remove('active'));
    
    const targetApp = document.getElementById(`app-${appName}`);
    if (targetApp) {
        targetApp.classList.add('active');
        appHeaderTitle.innerText = appName.toUpperCase();
        appContainer.classList.add('active');
    }
}

function closeApp() {
    document.getElementById('app-container').classList.remove('active');
}

// --- Telegram Chat Database ---
const tgChatData = {
    baby: [
        { sender: 'baby', text: 'abang gak kangen akuuu 😞😞' },
        { sender: 'out', text: 'Siapa sih sayang pencetus ga kangen di kamus aku?\nNgawor\nSama yang begini cantik mah kangen terus lah\nKangen setiap detik\nKangen setiap menit\nKangen setiap jam\nSayang please menikah kita detik ini juga\nMau aku seruput' },
        { sender: 'baby', text: 'akuuu\nkamu\ngak\nkangen\naku\nriyal apa pakde\nkamu kangen aku gak\np' },
        { sender: 'out', text: 'AKU KANGEN SEKALI SAMA CINTA KU\nSAMA DUNIA KU\nSAMA ISTRI CANTIK SEALAM SEMESTA KU\nKANGENNNN\nBeribu ribu rasa kangen abang buat dede seorang' },
        { sender: 'baby', text: 'AKU JUGAAA KANGEN SEKALI SAMA ABANGG\nSAYANGKU CINTAKU' },
        { sender: 'baby', text: 'baby dah nak berangkat yh\nhati hati ya babyy\ngantengkuuu' },
        { sender: 'out', text: 'Iyaa cantik ku\nSpam chat aja kalo ada apa apa sayangg\nAku usahain stand by\nI love you baby\nBobo jangan malam malam' },
        { sender: 'baby', text: 'iyaa sayanggg\ni love you so much more sayang\nhuum\nsemangat babyyy\ncayabgg dede kayanya bobo swkarang\ndede pusing dan mengantuj\nkalo gak balas dede bobo yh' },
        { sender: 'out', text: 'Babyy\nKenapa pusing baby\nKacian baby ku' },
        { sender: 'baby', text: 'engg tau\npala aku berat' },
        { sender: 'out', text: 'Bobo cayangg' },
        { sender: 'baby', text: 'huum\nmauu' },
        { sender: 'out', text: 'Goodnight sayang\nSleep well\nI love you so much istli ku' },
        { sender: 'baby', text: 'semangat kerjanya babyy\ni love you so much more cuamikk' }
    ],
    maxton: [
        { sender: 'out', text: 'Ayo nonton upi bub' },
        { sender: 'Maxton', text: 'Ga demen\nKedemenan si malik ajg' },
        { sender: 'out', text: 'Aing ge demen kontol\nMemek' },
        { sender: 'Maxton', text: 'Bub\nBub\nAing lmn ga ketemu sia rugi mrn nya\nGa nyesel aing dulu nyoba main mutual diajarin jude\nKalo dulu ga nyoba maen mutual, mungkin kita gaakan ketemu bub\nLopyu bub' },
        { sender: 'out', text: 'Abis ngadahar naon\nUntung aing lebih milih sia daripada malik' },
        { sender: 'Maxton', text: 'Ah kontol\nSia kenal aing duluan deketnya sama malik duluan' },
        { sender: 'out', text: 'Sia ga asik tolol\nSaling rep reply doang tp te basa basi' },
        { sender: 'Maxton', text: 'Lah aing era anjg\nAing ngeri sia cap aing sok asik' },
        { sender: 'out', text: 'Lah jaba rek deket tp sieun di anggep sok asik\nNya ges kan akhirnya kita yg bersama\nCig malik eweh hanya sia yg ada di hati aing' },
        { sender: 'Maxton', text: 'Goblok\nHoak\nAing merasa apaya bub, cuma sia lah yang paling relate sama kehidupan aing kitu asli\nJadi aing nyaah bgt ka sia' },
        { sender: 'out', text: 'Nya karna hampir mirip hirup aing jeng sia\nJd sia bisa relate ka aing\nAing jg ngerasa kitu' },
        { sender: 'Maxton', text: 'Nahhh wkwkwk\nLagi sedih bgt gini meratapi hidup\nLangsung inget na ka sia😭\nSemoga hidup sia selalu diberi kebahagiaan nya bub...' },
        { sender: 'out', text: 'Mewek ye bae tong\nAmin amin\nSemoga nu sia ucapkan berbalik baik ka diri sia...' },
        { sender: 'Maxton', text: 'Kurang hiji deui\nSia boga abang tapi abang sia te peduli?\nLmn hh sarua ajg' },
        { sender: 'out', text: 'Heeh tolol\nHokcuhh' },
        { sender: 'Maxton', text: 'Sarua kontol😭\nGoblok dih\nMirip bgt ajg' },
        { sender: 'out', text: 'Sia saha kontol?\nMerinding gini ajg' },
        { sender: 'Maxton', text: 'Sien dah aing\nJangan" kita kaya kimi no nawa bub\nYang jiwa nya pindah itu bertukar' },
        { sender: 'out', text: 'Sia in another life aing meren ajg' },
        { sender: 'Maxton', text: 'Sumpah bub\nSaking miripnya\nNgeri inimah' },
        { sender: 'out', text: 'Sieun jujur' },
        { sender: 'Maxton', text: 'Yang beda cuma agama bub😭' }
    ],
    keenan: [
        { sender: 'out', text: 'Marah terus' },
        { sender: 'Keenan', text: 'sengaja\nwle' },
        { sender: 'out', text: 'Tidur ra' },
        { sender: 'Keenan', text: 'kok\ntau sih\noh\ncf gua\ngua blm buka tt lagu\napalagi yg lu kirim ajg' },
        { sender: 'out', text: 'Itu gua reupload\nJd lu komen ulang ya' },
        { sender: 'Keenan', text: 'Tuhannn\nmau brp banyak gua komen' },
        { sender: 'out', text: '100' }
    ],
    miyuka: [
        { sender: 'out', text: 'Ayo vd adek' },
        { sender: 'Miyuka', text: 'MALEMAN YUK ABANG' },
        { sender: 'out', text: 'Oke adek' },
        { sender: 'Miyuka', text: 'abang bergadang kan??' },
        { sender: 'out', text: 'Yoi\nInpokan saja\nAyo dedoll' },
        { sender: 'Miyuka', text: 'hari ini yuuk' },
        { sender: 'out', text: 'Mau sekarang?\nCius nih?' },
        { sender: 'Miyuka', text: 'ah nti dulu deh...\nPAS WEEKEND AJADEH AKU IKUT\nily abangz ❤️❤️' }
    ],
    kian: [
        { sender: 'out', text: 'Happy October, my dear nunaa wishing you nothing but good things...' },
        { sender: 'Noona Kian', text: 'Amiin.. thank u so much!!! happy October juga buat adekku sayangg 😆...' },
        { sender: 'out', text: 'How sweet nunaa\nThank you nuna\nAmiin nun udh mulai membaik nun' },
        { sender: 'Noona Kian', text: 'Yeeey Alhamdulillah udah sembuh... Kabar dan kondisi kamu baik kan??' },
        { sender: 'out', text: 'Baik nunaaa udh sembuh ini\nThank you for asking nun\nNuna gimana kabarnya?' },
        { sender: 'Noona Kian', text: 'Gravy sekarang kesibukannya apaa?\nNuna alhamdulillah baik kok...' },
        { sender: 'out', text: 'Kesibukannya menjadi barudak korporat\nTiada libur itu nun\nMaklum jagoan' }
    ],
    akatsudi: [
        { sender: 'Maxton', text: 'Baharrr\nInenned\nPinned\nPinned\nAnjg\nGoblok anjg' },
        { sender: 'EVANDER', text: 'Tot\nPinned' },
        { sender: 'Maxton', text: 'Gakuat' },
        { sender: 'EVANDER', text: 'Anjgg' },
        { sender: 'Maxton', text: 'Ngakakk' },
        { sender: 'out', text: 'ADUH' },
        { sender: 'EVANDER', text: 'WKWKWK' },
        { sender: 'out', text: 'MAKSTON MEMEK' },
        { sender: 'Maxton', text: 'Baharrrr\nGakiat' },
        { sender: 'out', text: 'MEMEK KAU AJG' },
        { sender: 'Maxton', text: 'Lemess' },
        { sender: 'out', text: 'SIAPA SURUH DI PINNED BGST' },
        { sender: 'Maxton', text: 'Gua ampe ngiler' },
        { sender: 'out', text: 'Tolol kau makston' },
        { sender: 'Maxton', text: 'Ngilerr\nSumpah\nNgakak\nGakuatt' },
        { sender: 'EVANDER', text: 'Udah dikasih contoh sama gua di st, tidak mau mengerti' },
        { sender: 'out', text: 'Ga nyadar ajg\nKontol' },
        { sender: 'Maxton', text: 'Nangisss' },
        { sender: 'out', text: 'Masih ada kg\nUdh gua edit' },
        { sender: 'Maxton', text: 'Siapa aja yg udah liat😭😭😭😭' },
        { sender: 'out', text: 'Ke dit kaga\nLangsung 8 orang sama lu' },
        { sender: 'EVANDER', text: 'Udah kaga' },
        { sender: 'out', text: '😁' },
        { sender: 'Maxton', text: 'Dongo banget anjg\nGakiat\nAmpe ngiler' },
        { sender: 'EVANDER', text: 'Ih jijik ih' },
        { sender: 'out', text: 'Tolol ajg\nSiapa yg pin' },
        { sender: 'EVANDER', text: 'Si Maxton, anjir' },
        { sender: 'Eiser', text: 'WKWKWKWKWK\nNGAKAK' },
        { sender: 'out', text: 'Nahkan tolol' },
        { sender: 'Eiser', text: 'IDIOTTT\nsiapa aja yang liat\nWKWKWKWKWK\nLUCUUU\nsuka dah' },
        { sender: 'EVANDER', text: 'Dikasih contoh, tidak mau mengerti' },
        { sender: 'Eiser', text: 'gapapa ege biar di notice lu @Noctiish\nNGAKAK\nWKWKWKWK' },
        { sender: 'out', text: 'Bang' },
        { sender: 'Eiser', text: 'GA KUAT\nDONGO' },
        { sender: 'out', text: 'Gimana bang\nDia ngeliat sebelum 12:05 kg?' },
        { sender: 'Maxton', text: 'Gakuat' },
        { sender: 'out', text: 'Gua kg mau lg ah ss ss ajg\nBabi kau makston' },
        { sender: 'Eiser', text: 'harusnya lu hapus bukan edit' },
        { sender: 'Maxton', text: 'Lemes banget\nSumpah\nBatuk anjg' },
        { sender: 'Eiser', text: 'WKWKWK\nLUCU BANGET' },
        { sender: 'out', text: 'Gua kg mau tanggung jawab\nWKWKKWKW' },
        { sender: 'EVANDER', text: 'Oke, kasih solusi. Saran dari gua kalau emang dia mempertanyakan...' },
        { sender: 'Maxton', text: 'Gakuattt\nTolol anj\nMakanya liat"😭\nAnjg anjg' },
        { sender: 'out', text: 'Babi' }
    ]
};

function openTgChat(chatKey) {
    const listScreen = document.getElementById('telegram-list-screen');
    const detailScreen = document.getElementById('telegram-detail-screen');
    const chatTitle = document.getElementById('tg-chat-title');
    const msgBox = document.getElementById('tg-chat-messages');

    chatTitle.innerText = chatKey.toUpperCase();
    msgBox.innerHTML = '';

    const messages = tgChatData[chatKey] || [];
    messages.forEach(m => {
        const div = document.createElement('div');
        div.classList.add('msg');
        if (m.sender === 'out') {
            div.classList.add('out');
            div.innerText = m.text;
        } else {
            div.classList.add('in');
            div.innerHTML = `<div class="msg-sender">${m.sender}</div>${m.text.replace(/\n/g, '<br>')}`;
        }
        msgBox.appendChild(div);
    });

    listScreen.classList.add('hidden');
    detailScreen.classList.remove('hidden');
}

function closeTgChat() {
    document.getElementById('telegram-list-screen').classList.remove('hidden');
    document.getElementById('telegram-detail-screen').classList.add('hidden');
}

// --- Spotify Player Embedded Switch ---
function loadSpotifyTrack(trackId) {
    const iframe = document.getElementById('spotify-iframe');
    iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
}
