
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


function mostrarProductos() {
    console.clear();
    console.log(" LISTA DE TODOS LOS PRODUCTOS");
    console.log(`Total de productos: ${productos.length}`);
}

function productosCaros() {
    console.clear();
    console.log(" PRODUCTOS CON PRECIO > $30.000");
    
    const productosFiltrados = productos.filter(producto => producto.precio > 30000);
    console.table(productosFiltrados);
    console.log(`Productos encontrados: ${productosFiltrados.length}`);
}

function nombresMayusculas() {
    console.clear();
    console.log(" NOMBRES DE PRODUCTOS EN MAYÚSCULAS");
    
    const nombres = productos.map(producto => producto.nombre.toUpperCase());
    console.log(nombres);
    console.table(nombres);
}


function promedioPrecio() {
    console.clear();
    console.log(" PROMEDIO DE PRECIOS");
    
    const sumaPrecios = productos.reduce((total, producto) => total + producto.precio, 0);
    const promedio = sumaPrecios / productos.length;
    
    console.log(`Suma total de precios: $${sumaPrecios.toLocaleString()}`);
    console.log(`Número de productos: ${productos.length}`);
    console.log(`Promedio de precios: $${promedio.toLocaleString('es-CO', { maximumFractionDigits: 0 })}`);
}

function ordenarPrecio() {
    console.clear();
    console.log("⬇PRODUCTOS ORDENADOS (PRECIO MAYOR A MENOR)");
    
    const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
    console.table(productosOrdenados);
}

function menu() {
    let continuar = true;
    
    while (continuar) {
        console.clear();
        console.log("   MENÚ DE GESTIÓN DE PRODUCTOS    ");
        
        console.log("\nOpciones disponibles:");
        console.log("1 - Mostrar todos los productos");
        console.log("2 - Mostrar productos caros (> $30.000)");
        console.log("3 - Mostrar nombres en mayúsculas");
        console.log("4 - Calcular promedio de precios");
        console.log("5 - Ordenar productos por precio");
        console.log("6 - Salir");
        
        const opcion = prompt(
            "   MENÚ DE GESTIÓN DE PRODUCTOS       \n" +
            "1 - Mostrar todos los productos\n" +
            "2 - Mostrar productos caros (> $30.000)\n" +
            "3 - Mostrar nombres en mayúsculas\n" +
            "4 - Calcular promedio de precios\n" +
            "5 - Ordenar productos por precio\n" +
            "6 - Salir\n\n" +
            "Elige una opción (1-6):"
        );
        
        if (opcion === null) {
            console.log(" Operación cancelada por el usuario.");
            continuar = false;
            break;
        }
        
        switch (opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                productosCaros();
                break;
            case "3":
                nombresMayusculas();
                break;
            case "4":
                promedioPrecio();
                break;
            case "5":
                ordenarPrecio();
                break;
            case "6":
                console.clear();
                console.log("   ¡Gracias por usar el sistema!        ");
                console.log("   Hasta pronto...                   ");
                continuar = false;
                break;
            default:
                console.clear();
                console.log(" Opción no válida. Intenta de nuevo.");
                alert("Por favor ingresa una opción válida (1-6)");
        }
        
        if (continuar && opcion !== "6") {
            alert("Presiona OK para volver al menú");
        }
    }
}

// Evento del botón
document.getElementById("btnMenu").addEventListener("click", menu);

// Mensaje inicial
console.clear();
console.log("  Bienvenido al Sistema de Gestión     ");
console.log("             de Productos             ");
console.log("\n Sistema cargado correctamente.");
console.log(" Haz clic en el botón 'Abrir Menú' para comenzar.");
console.log("\n Productos disponibles en el sistema:", productos.length);