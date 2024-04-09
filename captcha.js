function rotateImage(degrees) {
    var captchaImage = document.getElementById('captcha-image');
    var currentRotation = getComputedStyle(captchaImage).transform;
    var values = currentRotation.match(/matrix.*\((.+)\)/)[1].split(', ');
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI));
    var newAngle = angle + degrees;
    captchaImage.style.transform = `rotate(${newAngle}deg)`;
}
document.getElementById('captcha-image').style.transform = 'rotate(0deg)';
