function rotateImage(degrees) {
    var captchaImage = document.getElementById('captcha-image');
    var currentRotation = getComputedStyle(captchaImage).transform;
    var values = currentRotation.match(/matrix.*\((.+)\)/)[1].split(', ');
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI));

    // Calculate the new rotation angle
    var newAngle = angle + degrees;

    // Apply the new rotation
    captchaImage.style.transform = `rotate(${newAngle}deg)`;
}

// Initially, ensure the image is not rotated
document.getElementById('captcha-image').style.transform = 'rotate(0deg)';
