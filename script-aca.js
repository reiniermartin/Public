document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let drawingData = [];

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mouseout', endDrawing);

    function startDrawing(e) {
        isDrawing = true;
        const { offsetX, offsetY } = e;
        drawingData.push({ type: 'start', x: offsetX, y: offsetY });
    }

    function draw(e) {
        if (!isDrawing) return;
        const { offsetX, offsetY } = e;
        drawingData.push({ type: 'draw', x: offsetX, y: offsetY });

        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    }

    function endDrawing() {
        isDrawing = false;
        ctx.beginPath();
        drawingData.push({ type: 'end' });
    }

    document.getElementById('clearBtn').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawingData = [];
    });

    document.getElementById('replayBtn').addEventListener('click', () => {
        if (drawingData.length === 0) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let currentIndex = 0;

        function replayDrawing() {
            if (currentIndex >= drawingData.length) return;

            const { type, x, y } = drawingData[currentIndex];

            if (type === 'start') {
                ctx.beginPath();
                ctx.moveTo(x, y);
            } else if (type === 'draw') {
                ctx.lineTo(x, y);
                ctx.stroke();
            } else if (type === 'end') {
                ctx.closePath();
            }

            currentIndex++;
            requestAnimationFrame(replayDrawing);
        }

        replayDrawing();
    });
});
