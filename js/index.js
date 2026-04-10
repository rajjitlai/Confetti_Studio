/**
 * Confetti Studio Logic
 * Author: Rajjit Laishram
 * License: MIT
 * Powered by: Canvas-Confetti (https://github.com/catdad/canvas-confetti)
 */

// Ice Burst Effect
const fireIce = () => {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#ffffff', '#74ebd5']
    });
};

// Classic Party Effect
const fireClassic = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

// Side Cannons Effect
const fireCannons = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#f1c40f', '#e67e22']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#f1c40f', '#e67e22']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

// Realistic Physics Effect
const fireRealistic = () => {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
};

// Fireworks Animation
let fireworksInterval = null;
const toggleFireworks = (btn) => {
    if (fireworksInterval) {
        clearInterval(fireworksInterval);
        fireworksInterval = null;
        btn.innerText = "Start";
    } else {
        btn.innerText = "Stop";
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        fireworksInterval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return toggleFireworks(btn);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }
};

// School Pride Effect
const firePride = () => {
    const end = Date.now() + (2 * 1000);
    const colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

// Event Listeners
document.getElementById('btn-ice').addEventListener('click', fireIce);
document.getElementById('btn-classic').addEventListener('click', fireClassic);
document.getElementById('btn-cannons').addEventListener('click', fireCannons);
document.getElementById('btn-realistic').addEventListener('click', fireRealistic);
document.getElementById('btn-fireworks').addEventListener('click', (e) => {
    const btn = document.getElementById('fireworks-toggle');
    toggleFireworks(btn);
});
document.getElementById('btn-pride').addEventListener('click', firePride);
