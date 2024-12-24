// script.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Oferts = {
  price: number;
  description: string;
};
async function main() {
  // Datos de ofertas
  const ofertsData: Oferts[] = [
    { price: 15000, description: "Área de la piscina, Área del ranchón" }, // cat-1
    {
      price: 20000,
      description:
        "Área de la piscina, Área del ranchón, 50 croquetas de pollo, 5 Platos de Chicharritas, Refresco 6lt",
    }, // cat-2
    {
      price: 27000,
      description:
        "Área de la piscina, Área del ranchón, Ensalada fría, 50 croquetas de pollo",
    }, // cat-3
    {
      price: 28000,
      description:
        "Área de la piscina, Área del ranchón, 60 mini hamburguesas de pollo, 1 caja de cerveza",
    }, // cat-4
    {
      price: 28000,
      description:
        "Área de la piscina, Área del ranchón, 30 hamburguesas de pollo, 1 caja de cerveza",
    }, // cat-5
    {
      price: 30000,
      description:
        "Área de la piscina, Área del ranchón, Caldosa, 1 caja de cerveza",
    }, // cat-6
    {
      price: 36000,
      description:
        "Área de la piscina, Área del ranchón, Bocaditos con lechón (Ensalada y Mojito) ,Refresco 6lt, 1 caja de cerveza",
    }, // cat-7
    {
      price: 39000,
      description:
        "Área de la piscina, Área del ranchón, Arroz Frito, Viandas, Ensalada",
    }, // cat-8
    {
      price: 39000,
      description:
        "Área de la piscina, Área del ranchón, Arroz Congris, Vianda, Ensalada",
    }, // cat-9
    {
      price: 50000,
      description:
        "Área de la piscina, Área del ranchón, Arroz congris, Chuleta de Cerdo, Viandas y Ensalada, 1 caja de cerveza",
    }, // cat-10
  ];

  // Insertar ofertas
  for (const ofertData of ofertsData) {
    await prisma.ofert.create({
      data: ofertData,
    });
  }

  // Datos de gastronomicos con ofertId actualizados
  const gastronomicsData = [
    {
      description: "Caldoza",
      imagen: "https://m.media-amazon.com/images/I/81Pzsse6JFL._AC_SY500_.jpg",
      price: 10000,
    },
    {
      description: "Espaguetis de Jamón y Queso",
      imagen: "https://m.media-amazon.com/images/I/51BJiFN4wpL._SL1000_.jpg",
      price: 20000,
    },
    {
      description: "Arroz Congris, Pollo Asado, Viandas y Ensaladas",
      imagen: "https://m.media-amazon.com/images/I/41llLZM3HTL._AC_SL1200_.jpg",
      price: 24000,
    },
    {
      description: "Arroz Frito, Viandas y Ensaladas",
      price: 24000,
      imagen:
        "https://m.media-amazon.com/images/I/71yUVO4PktL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      description: "Arroz Amarillo con Carne y Maiz, Viandas y Ensaladas",
      price: 24000,
      imagen:
        "https://cdn.quicksell.co/-M5mfJ9Y8f2UdhwcIe3E/product/-NQCVY0CxM0tXyHTwq09.jpg",
    },
    {
      description:
        "Arroz Congris, Chuleta o Bistec de Cerdo, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_825517-MCO74549447467_022024-O.webp",
    },
    {
      description: "Arroz Congris, Pollo a la Barbacoa, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://cdn.quicksell.co/-MDLfK-fgx0tgM9YssWH/product/-O0RKyNsG-TJdJFoZVy7.jpg",
    },
    {
      description: "Arroz Congris, Bistec de Pechuga, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8bcnixxCzsfLpF7eL1x-hdeHXNZWZL54Tg&s",
    },
    {
      description: "Arroz y Frijoles, Fajitas de Pollo, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://moalotech.com/wp-content/uploads/cable-harvic-tipo-c.png",
    },
    {
      description: "Lasaña a la Boloñesa de Jamón y Queso",
      price: 30000,
      imagen: "https://i.blogs.es/c3c8ec/mi-67w-soniccharge-2/840_560.jpg",
    },
  ];

  // Insertar gastronomicos en la base de datos
  for (const gastronomicData of gastronomicsData) {
    await prisma.gastronomic.create({
      data: gastronomicData,
    });
  }

  //Postres

  const dessertsData = [
    {
      name: "Panquecitos",
      imagen: "https://m.media-amazon.com/images/I/81Pzsse6JFL._AC_SY500_.jpg",
      price: 1800,
    },
    {
      name: "Emp. de Guayaba",
      imagen: "https://m.media-amazon.com/images/I/51BJiFN4wpL._SL1000_.jpg",
      price: 1800,
    },
    {
      name: "Emp. de Coco",
      imagen: "https://m.media-amazon.com/images/I/41llLZM3HTL._AC_SL1200_.jpg",
      price: 2100,
    },
    {
      name: "Gelatina",
      price: 3000,
      imagen:
        "https://m.media-amazon.com/images/I/71yUVO4PktL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Natilla",
      price: 3000,
      imagen:
        "https://cdn.quicksell.co/-M5mfJ9Y8f2UdhwcIe3E/product/-NQCVY0CxM0tXyHTwq09.jpg",
    },
    {
      name:
        "NatiFlan",
      price: 3000,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_825517-MCO74549447467_022024-O.webp",
    },
    {
      name: "Arroz con Leche",
      price: 5000,
      imagen:
        "https://cdn.quicksell.co/-MDLfK-fgx0tgM9YssWH/product/-O0RKyNsG-TJdJFoZVy7.jpg",
    },
    {
      name: "Helado",
      price: 6000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8bcnixxCzsfLpF7eL1x-hdeHXNZWZL54Tg&s",
    },
    {
      name: "Pudín",
      price: 10000,
      imagen:
        "https://moalotech.com/wp-content/uploads/cable-harvic-tipo-c.png",
    },
    {
      name: "Ensalada Fría",
      price: 10000,
      imagen: "https://i.blogs.es/c3c8ec/mi-67w-soniccharge-2/840_560.jpg",
    },
  ];

  // Insertar dessertsos en la base de datos
  for (const dessertData of dessertsData) {
    await prisma.desserts.create({
      data: dessertData,
    });
  }

  console.log("Ofertas, comidas y postres guardados exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
