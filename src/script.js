var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("items").classList.toggle("scale-0");
    document.getElementById("items").classList.toggle("scale-1")
});

var hamburger2 = document.querySelector(".hamburger2");
hamburger2.addEventListener("click", function () {
    hamburger2.classList.toggle("is-active");
    document.getElementById("items2").classList.toggle("scale-0");
    document.getElementById("items2").classList.toggle("scale-1")
});
// paceOptions = {
//     ajax: true,  //Checks AJAX requests
//     document: true //Document is ready
// }

// Pace.on('done', () => {

//     gsap.timeline()
//         .add('p')
//         .to('.pace', {
//             transform: 'scale(10, 1)',
//             duration: 4
//         }, "+=.2")
//         .to('.pace', {
//             duration: 1,
//             height: "100%"
//         }, "-=2.5")
//         .to('.loading__text', {
//             delay: .2,
//             duration: 3,
//             opacity: 0,
//             yPercent: -400,
//             ease: "BezierEasing(0.19,1,0.22,1)"
//         }, 'p')
//         .to('.title', {
//             duration: 2,
//             delay: .3,
//             y: -10,
//             opacity: 1,
//             ease: Expo.easeInOut
//         }, '-=2.5')
//         .to('.body', {
//             duration: 2,
//             delay: .3,
//             y: -10,
//             opacity: 1,
//             ease: Expo.easeInOut
//         }, '-=2.5')

// })