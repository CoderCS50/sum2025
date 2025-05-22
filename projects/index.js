const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let atoms = [];

// canvas.addEventListener('mousemove', (e) => {
//     for (let i = 0; i < 20; i++) {
//         atoms.push(new Atom(e.x, e.y));
//     };
// });

const animate = () => {
    atoms.forEach((atom, index) => {
        ctx.fillStyle = 'white';
        atom.draw();
        atom.updateSpeed();
        atom.updateSize();

        if (atom.radius < 0.3) {
            atoms.splice(index, 1);
        }
    });
    ctx.save();
    // ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    requestAnimationFrame(animate);
}

animate();

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }

    updateSpeed() {
        this.x += this.speedX;
        this.y += this.speedY;
        
    }

    updateSize(){
        this.radius -= 0.1;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}



const generateAtoms = (e) => {
    atoms.push(new Atom(Math.random() * canvas.width, Math.random() * canvas.height));
    requestAnimationFrame(generateAtoms);
}
generateAtoms();








// canvas.addEventListener('mousemove', (e) => {
//     ctx.beginPath();
//     ctx.rect(e.x,e.y,10, 10);
//     ctx.fill();

// });


// const degToRad = (degree) => {
//     return degree * (Math.PI / 180);
// }
// ctx.beginPath();
// ctx.arc(100,100,50,0,degToRad(270));
// ctx.stroke();