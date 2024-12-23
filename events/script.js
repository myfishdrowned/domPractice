const box = document.querySelector('#box');
box.addEventListener('mouseover', function () {
    console.log('hello there');
});
box.addEventListener('mouseout', function () {
    console.log('hello there');
});
box.addEventListener('click', function () {
    console.log('hello there!')
})
// box.onmouseover = function () {
//     console.log('hover');

// }