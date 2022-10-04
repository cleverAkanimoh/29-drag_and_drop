let box = document.querySelectorAll('.box');
let img = document.querySelector('img');

// img.ondragstart = () => {
//     img.style.cursor = 'grabbing';
//     console.log('dragstart');
// }
// img.ondragend = () => {
//     console.log('dragend');
// }

box.forEach(boxes => {
    // boxes.ondragenter = () => {
    //     console.log('dragenter');
    // }
    boxes.ondragover = (e) => {
        e.preventDefault();
        img.style.cursor = 'grabbing';
    }
    // boxes.ondragleave = () => {
    //     console.log('dragleave');
    // }
    boxes.ondrop = (e) => {
        e.target.append(img)
    }
})
