window.addEventListener('mousemove', (e) => {
    let centerX = window.innerWidth / 2
    let centerY = window.innerHeight / 2
    let x = 0
    let y = 0
    let eyeX = 0
    let eyeY = 0
    
    if (e.clientX > centerX) {
        let ferqX = e.clientX - centerX
        x = 30 * ferqX / centerX
        eyeX = 8 * ferqX/centerX
    } else if (e.clientX < centerX) {
        let ferqX = centerX - e.clientX
        x = -30 * ferqX / centerX
        eyeX = -8 * ferqX/centerX
    }

    if (e.clientY > centerY) {
        let ferqY = e.clientY - centerY
        y = -30 * ferqY / centerY
        eyeY = 4 * ferqY/centerY
    } else if (e.clientY < centerY) {
        let ferqY = centerY - e.clientY
        y = 30 * ferqY / centerY
        eyeY = -4 * ferqY/centerY
    }
    document.getElementById('box').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    document.querySelector('.leftEyeInner').style.transform = `translateY(${eyeY}px) translateX(${eyeX}px)`
    document.querySelector('.rightEyeInner').style.transform = `translateY(${eyeY}px) translateX(${eyeX}px)`
})