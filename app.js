
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


function productosCaros() {
    console.clear();
    console.log("💰 PRODUCTOS CON PRECIO > $30.000");
    
    const productosFiltrados = productos.filter(producto => producto.precio > 30000);
    console.table(productosFiltrados);
    console.log(`Productos encontrados: ${productosFiltrados.length}`);
}