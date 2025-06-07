// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Apakah kamu ingin memutar musik di background ? mau yah ? mau dongg ',
        imageUrl: 'https://i.pinimg.com/736x/67/21/15/6721158b5ba398470892ddbe3aa3b8a4.jpg', // Ganti dengan URL atau path ke gambar kamu
        imageWidth: 100, // Sesuaikan lebar gambar (misalnya, 100px)
        imageHeight: 100, // Sesuaikan tinggi gambar (misalnya, 100px)
        imageAlt: 'Gambar Kustom', // Teks alternatif untuk gambar (penting untuk aksesibilitas)
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Mauu',
        cancelButtonText: 'pilih mau aja wkwk',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();

            // Panggil animationTimeline setelah video metadata dimuat
            const videoElement = document.querySelector('.moment-video');
            if (videoElement) {
                videoElement.addEventListener('loadedmetadata', () => {
                    animationTimeline(videoElement.duration); // Kirim durasi video ke fungsi timeline
                });
                // Jika video sudah terload saat ini (misalnya dari cache), panggil langsung
                if (videoElement.readyState >= 2) { // readyState 2 = HAVE_CURRENT_DATA
                    animationTimeline(videoElement.duration);
                }
            } else {
                animationTimeline(5); // Fallback durasi 5 detik jika video tidak ditemukan
            }

        } else {
            animationTimeline(5); // Fallback durasi 5 detik jika musik tidak diputar
        }
    });
});

// animation timeline
// Sekarang fungsi ini menerima parameter videoDuration
const animationTimeline = (videoDuration = 5) => { // Default 5 detik jika tidak diberikan
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    // Balon
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    }, "-=0.2")
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    // Lingkaran SVG (confetti) mulai muncul setelah foto muncul
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3,
        "-=2" // Mulai sekitar 2 detik sebelum animasi wish-hbd selesai
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    }, "+=3") // Foto dan ucapan hilang
    .to(".eight", 0.5, { // Lingkaran confetti juga hilang
        opacity: 0,
        y: 30,
        zIndex: "-1",
    }, "-=0.2")
    .to(".seven", 0.5, { // Balon juga hilang
        opacity: 0,
        y: 30,
        zIndex: "-1",
    }, "-=0.2")

    // BAGIAN ANIMASI UNTUK HALAMAN VIDEO
    .from(".seven-point-five", 0.7, {
        opacity: 0,
        y: 20,
        visibility: "hidden"
    })
    .to(".seven-point-five", 0.7, {
        opacity: 1,
        visibility: "visible"
    }, "-=0.7")
    .call(function() {
        const videoElement = document.querySelector('.moment-video');
        if (videoElement) {
            videoElement.play().catch(e => console.error("Error playing video:", e));
        }
    }, null, null, "+=0.5")
    // Durasi tampil halaman video akan menyesuaikan durasi video + 0.5 detik (jeda sebelum fade-out)
    .to(".seven-point-five", 0.7, {
        opacity: 0,
        y: -20,
        visibility: "hidden"
    }, `+=${videoDuration + 0.5}`) // MENGGUNAKAN VIDEO DURATION DI SINI!
    .call(function() {
        const videoElement = document.querySelector('.moment-video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    })
    // AKHIR BAGIAN ANIMASI UNTUK HALAMAN VIDEO

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        // Saat restart, pastikan video direset dan metadata diload ulang jika perlu
        const videoElement = document.querySelector('.moment-video');
        if (videoElement) {
            videoElement.load(); // Memuat ulang video untuk mendapatkan durasi terbaru jika ada perubahan
            videoElement.addEventListener('loadedmetadata', () => {
                tl.restart(true, false); // Restart timeline
            }, { once: true }); // Listener hanya sekali pakai
        } else {
             tl.restart(true, false);
        }
    });
}