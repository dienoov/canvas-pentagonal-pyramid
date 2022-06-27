const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 480;

ctx.strokeLine = function (from, to, dashed = false) {
    this.beginPath();
    dashed ? this.setLineDash([8, 14]) : this.setLineDash([]);
    this.moveTo(...from);
    this.lineTo(...to);
    this.closePath();
    this.stroke();
};

ctx.strokeLine([240, 120], [240, 280], true);
ctx.strokeLine([240, 280], [320, 320], true);
ctx.strokeLine([240, 280], [160, 320], true);

ctx.strokeLine([240, 120], [320, 320]);
ctx.strokeLine([240, 120], [160, 320]);

ctx.strokeLine([280, 360], [320, 320]);
ctx.strokeLine([200, 360], [160, 320]);
ctx.strokeLine([200, 360], [280, 360]);

ctx.strokeLine([280, 360], [240, 120]);
ctx.strokeLine([200, 360], [240, 120]);