
const productos = [
    { nombre: "Laptop", precio: 45000, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 8500, categoria: "Periféricos" },
    { nombre: "Teclado Mecánico", precio: 35000, categoria: "Periféricos" },
    { nombre: "Monitor 24\"", precio: 42000, categoria: "Electrónica" },
    { nombre: "Auriculares", precio: 15000, categoria: "Periféricos" },
    { nombre: "Webcam", precio: 32000, categoria: "Periféricos" },
    { nombre: "Escritorio", precio: 28000, categoria: "Muebles" },
    { nombre: "Silla Gamer", precio: 85000, categoria: "Muebles" }
];


function nombresMayusculas() {
    console.clear();
    console.log("🔤 NOMBRES DE PRODUCTOS EN MAYÚSCULAS");
    
    const nombres = productos.map(producto => producto.nombre.toUpperCase());
    console.log(nombres);
    console.table(nombres);
}