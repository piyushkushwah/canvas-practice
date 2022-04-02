
window.onload = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const line = new Line(context);
    line.draw('caps');
    line.debug();
    // console.log('test', canvas,)
}
