function playAudio() {
    const audio1 = document.querySelector('#audio1');
    const audio2 = document.querySelector('#audio2');

    console.log('Starting audio playback');

    // Delay the audio
    setTimeout(function () {
        console.log('Playing audio1');
        audio1.play();

        // Delay audio2 by 1 second
        setTimeout(function () {
            console.log('Playing audio2');
            audio2.play();
        }, audio1.duration * 1000 + 1000);
    }, 5000);
}

window.onload = playAudio;
