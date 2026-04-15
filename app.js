
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

function promedioPrecio() {
    console.clear();
    console.log("📊 PROMEDIO DE PRECIOS");
    
    const sumaPrecios = productos.reduce((total, producto) => total + producto.precio, 0);
    const promedio = sumaPrecios / productos.length;
    
    console.log(`Suma total de precios: $${sumaPrecios.toLocaleString()}`);
    console.log(`Número de productos: ${productos.length}`);
    console.log(`Promedio de precios: $${promedio.toLocaleString('es-CO', { maximumFractionDigits: 0 })}`);
}

function ordenarPrecio() {
    console.clear();
    console.log("⬇️ PRODUCTOS ORDENADOS (PRECIO MAYOR A MENOR)");
    
    const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
    console.table(productosOrdenados);
}
