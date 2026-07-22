// Base de datos de productos de La Casita
const PRODUCTS = [
    // --- TACOS ---
    {
        id: 'taco-asada-chorizo',
        name: 'Taco de Asada o Chorizo',
        category: 'tacos',
        price: 25,
        description: 'Taco con carne de asada o chorizo al gusto. (Tortilla de harina o de maíz)',
        image: 'assets/Gemini_Generated_Image_lea1qxlea1qxlea1.png',
        badge: 'Popular',
        stars: 4.8
    },
    {
        id: 'taco-arrachera',
        name: 'Taco de Arrachera',
        category: 'tacos',
        price: 50,
        description: 'Taco premium con jugosa carne de arrachera. (Tortilla de harina o de maíz)',
        image: 'assets/Gemini_Generated_Image_tcvoaztcvoaztcvo.png',
        badge: 'Recomendado',
        stars: 4.9
    },
    {
        id: 'quesadilla-asada-chorizo',
        name: 'Quesadilla Asada o Chorizo',
        category: 'tacos',
        price: 45,
        description: 'Quesadilla con queso asadero fundido y carne de asada o chorizo. (Tortilla de harina o de maíz)',
        image: 'assets/Gemini_Generated_Image_jjr1umjjr1umjjr1.png',
        badge: '',
        stars: 4.7
    },
    // --- TORTAS ---
    {
        id: 'torta-adobada-chorizo',
        name: 'Torta de Adobada o Chorizo',
        category: 'tortas',
        price: 80,
        description: 'Torta clásica con carne adobada o chorizo, lechuga, jitomate, cebolla y aderezos.',
        image: 'assets/Gemini_Generated_Image_u8drvgu8drvgu8dr.png',
        badge: 'Favorito',
        stars: 4.6
    },
    // --- CHILAQUILES ---
    {
        id: 'chilaquiles-sencillos',
        name: 'Chilaquiles Sencillos',
        category: 'chilaquiles',
        price: 70,
        description: 'Chilaquiles verdes con queso asadero fundido, crema y cilantro fresco.',
        image: 'assets/Gemini_Generated_Image_xsrvwxxsrvwxxsrv.png',
        badge: '',
        stars: 4.7
    },
    {
        id: 'chilaquiles-pollo-asada',
        name: 'Chilaquiles con Pollo o Asada',
        category: 'chilaquiles',
        price: 100,
        description: 'Chilaquiles verdes con queso asadero, crema, cilantro y proteína a elegir (Pollo o Asada).',
        image: 'assets/Gemini_Generated_Image_ano0t9ano0t9ano0.png',
        badge: 'Muy Vendido',
        stars: 4.9
    },
    // --- PAPAS ---
    {
        id: 'papa-salchipulpos',
        name: 'Salchipulpos',
        category: 'papas',
        price: 40,
        description: 'Salchichas fritas en forma de pulpo acompañadas de papas fritas y aderezos.',
        image: 'assets/Gemini_Generated_Image_6aygay6aygay6ayg.png',
        badge: 'Niños',
        stars: 4.5
    },
    {
        id: 'papa-gajo',
        name: 'Papa Gajo',
        category: 'papas',
        price: 35,
        description: 'Papas gajo crujientes por fuera, suaves por dentro y sazonadas con especias.',
        image: 'assets/Gemini_Generated_Image_lno3iflno3iflno3.png',
        badge: '',
        stars: 4.6
    },
    {
        id: 'papa-francesa',
        name: 'Papa Francesa',
        category: 'papas',
        price: 30,
        description: 'Papas fritas tradicionales crujientes y doradas, con sal al gusto.',
        image: 'assets/Gemini_Generated_Image_d6wd0bd6wd0bd6wd.png',
        badge: '',
        stars: 4.4
    },
    {
        id: 'papa-dedos-queso',
        name: 'Dedo de Queso',
        category: 'papas',
        price: 10,
        description: 'Dedo de queso asadero empanizado y frito. (Precio por pieza).',
        image: 'assets/Gemini_Generated_Image_dnwqv1dnwqv1dnwq.png',
        badge: 'Pza',
        stars: 4.7
    },
    {
        id: 'papa-aros-cebolla',
        name: 'Aros de Cebolla',
        category: 'papas',
        price: 25,
        description: 'Aros de cebolla naturales empanizados y fritos al punto crujiente.',
        image: 'assets/Gemini_Generated_Image_ai9fzzai9fzzai9f.png',
        badge: '',
        stars: 4.5
    },
    // --- ESPECIALIDAD PAPAS GAJOS ---
    {
        id: 'papasgajo-queso-tocino',
        name: 'Papas Gajo con Queso y Tocino',
        category: 'especialidad-papas',
        price: 70,
        description: 'Porción de papas gajo bañadas en queso asadero fundido y tocino crujiente picado.',
        image: 'assets/Gemini_Generated_Image_bdg78ibdg78ibdg7.png',
        badge: 'Especial',
        stars: 4.8
    },
    {
        id: 'papasgajo-queso-chorizo',
        name: 'Papas Gajo con Queso y Chorizo',
        category: 'especialidad-papas',
        price: 70,
        description: 'Porción de papas gajo con queso asadero fundido y delicioso chorizo dorado encima.',
        image: 'assets/Gemini_Generated_Image_50qca850qca850qc.png',
        badge: '',
        stars: 4.7
    },
    {
        id: 'papasgajo-queso-champi',
        name: 'Papas Gajo con Queso y Champiñones',
        category: 'especialidad-papas',
        price: 70,
        description: 'Porción de papas gajo cubiertas con queso asadero fundido y champiñones tiernos salteados.',
        image: 'assets/Gemini_Generated_Image_7p4h5a7p4h5a7p4h.png',
        badge: '',
        stars: 4.6
    },
    {
        id: 'papasgajo-queso-res',
        name: 'Papas Gajo con Queso y Res',
        category: 'especialidad-papas',
        price: 80,
        description: 'Porción de papas gajo con queso asadero fundido y jugosa carne de res sazonada.',
        image: 'assets/Gemini_Generated_Image_bdg78ibdg78ibdg7.png',
        badge: 'Recomendada',
        stars: 4.8
    },
    // --- PAPA ASADA ---
    {
        id: 'papaasada-chorizo',
        name: 'Papa Asada con Chorizo',
        category: 'papa-asada',
        price: 100,
        description: 'Papa asada con mantequilla, queso asadero fundido y chorizo.',
        image: 'assets/snack_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'papaasada-tocino',
        name: 'Papa Asada con Tocino',
        category: 'papa-asada',
        price: 100,
        description: 'Papa asada con mantequilla, queso asadero fundido y tocino crujiente.',
        image: 'assets/snack_item.jpg',
        badge: 'Popular',
        stars: 4.8
    },
    {
        id: 'papaasada-champi',
        name: 'Papa Asada con Champiñones',
        category: 'papa-asada',
        price: 100,
        description: 'Papa asada con mantequilla, queso asadero fundido y champiñones salteados.',
        image: 'assets/snack_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'papaasada-arrachera',
        name: 'Papa Asada con Arrachera',
        category: 'papa-asada',
        price: 120,
        description: 'Papa asada premium rellena con mantequilla, queso asadero fundido y carne de arrachera.',
        image: 'assets/snack_item.jpg',
        badge: 'Estrella',
        stars: 5.0
    },
    // --- TOSTITOS ---
    {
        id: 'tostitos-media',
        name: 'Tostitos (1/2 Orden)',
        category: 'tostitos',
        price: 120,
        description: 'Media orden de Tostitos preparados con aderezos y complementos de la casa.',
        image: 'assets/combo_item.jpg',
        badge: '1/2 Orden',
        stars: 4.5
    },
    {
        id: 'tostitos-completa',
        name: 'Tostitos (1 Orden)',
        category: 'tostitos',
        price: 220,
        description: 'Orden completa de Tostitos preparados con todo el sabor de La Casita, ideal para compartir.',
        image: 'assets/combo_item.jpg',
        badge: 'Orden Completa',
        stars: 4.8
    },
    // --- CAMARONES ---
    {
        id: 'tacos-camaron',
        name: 'Tacos de Camarón',
        category: 'camarones',
        price: 35,
        description: 'Delicioso taco de camarón preparado al estilo de la casa.',
        image: 'assets/combo_item.jpg',
        badge: 'Pza',
        stars: 4.7
    },
    {
        id: 'camarones-coco',
        name: 'Camarones al Coco',
        category: 'camarones',
        price: 180,
        description: 'Camarones al coco súper crujientes, acompañados de fresca ensalada y papas fritas.',
        image: 'assets/combo_item.jpg',
        badge: 'Recomendado',
        stars: 4.9
    },
    {
        id: 'camarones-fiesta',
        name: 'Camarones Fiesta',
        category: 'camarones',
        price: 180,
        description: 'Receta especial de la casa de camarones fiesta, acompañados de ensalada y papas fritas.',
        image: 'assets/combo_item.jpg',
        badge: '',
        stars: 4.8
    },
    {
        id: 'camarones-empanizados',
        name: 'Camarones Empanizados',
        category: 'camarones',
        price: 180,
        description: 'Camarones empanizados dorados y crujientes, acompañados de ensalada y papas fritas.',
        image: 'assets/combo_item.jpg',
        badge: '',
        stars: 4.6
    },
    // --- SANDWICH ---
    {
        id: 'sandwich-sencillo',
        name: 'Sándwich Sencillo',
        category: 'sandwich',
        price: 55,
        description: 'Queso asadero, tocino, salchicha de pavo, lechuga, jitomate, cebolla y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.5
    },
    {
        id: 'sandwich-champi',
        name: 'Sándwich Champi',
        category: 'sandwich',
        price: 55,
        description: 'Champiñones salteados, queso asadero, lechuga, jitomate, cebolla y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: 'Vegetariano',
        stars: 4.6
    },
    {
        id: 'sandwich-chorizo',
        name: 'Sándwich de Chorizo',
        category: 'sandwich',
        price: 55,
        description: 'Chorizo dorado, queso asadero, lechuga, jitomate, cebolla y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'sandwich-pollo',
        name: 'Sándwich de Pollo',
        category: 'sandwich',
        price: 80,
        description: 'Pechuga de pollo, queso asadero, cebolla asada, lechuga, jitomate y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'sandwich-pollo-bbq-bufalo',
        name: 'Sándwich Pollo BBQ o Búfalo',
        category: 'sandwich',
        price: 85,
        description: 'Pechuga de pollo bañada en salsa BBQ o búfalo, queso asadero, cebolla asada, lechuga, jitomate y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: 'Recomendado',
        stars: 4.8
    },
    {
        id: 'sandwich-sirloin',
        name: 'Sándwich de Sirloin',
        category: 'sandwich',
        price: 80,
        description: 'Corte de sirloin de res, queso asadero, cebolla asada, lechuga, jitomate y aguacate.',
        image: 'assets/burger_item.jpg',
        badge: 'Popular',
        stars: 4.8
    },
    // --- NACHOS ---
    {
        id: 'nachos-sencillos',
        name: 'Nachos Sencillos',
        category: 'nachos',
        price: 70,
        description: 'Nachos de tortilla de maíz crujiente, cubiertos de queso amarillo líquido y jalapeños.',
        image: 'assets/snack_item.jpg',
        badge: '',
        stars: 4.4
    },
    {
        id: 'nachos-asada',
        name: 'Nachos con Asada',
        category: 'nachos',
        price: 100,
        description: 'Nachos de maíz con queso amarillo caliente, jalapeños y abundante carne asada picada.',
        image: 'assets/snack_item.jpg',
        badge: 'Más Pedido',
        stars: 4.8
    },
    // --- HAMBURGUESAS ---
    {
        id: 'burg-sirloin',
        name: 'Hamburguesa Sirloin',
        category: 'hamburguesas',
        price: 75,
        description: 'Carne Sirloin, queso amarillo, lechuga, jitomate, pepinillos, aguacate y cebolla asada.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'burg-tradicional',
        name: 'Hamburguesa Tradicional',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne premium de res, queso asadero, tocino, lechuga, jitomate, cebolla y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'burg-arrachera',
        name: 'Hamburguesa de Arrachera',
        category: 'hamburguesas',
        price: 100,
        description: 'Jugosa arrachera de res, queso asadero, lechuga, jitomate, cebolla y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: 'Premium',
        stars: 5.0
    },
    {
        id: 'burg-sirloin-guacamole',
        name: 'Hamburguesa Sirloin Guacamole',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne Sirloin, queso amarillo, cebolla asada, guacamole casero y lechuga fresca.',
        image: 'assets/burger_item.jpg',
        badge: 'Nueva',
        stars: 4.8
    },
    {
        id: 'burg-choriburger',
        name: 'Chori-Burger',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne Sirloin, queso asadero, chorizo de la casa dorado, jitomate, cebolla asada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'burg-pepiburger',
        name: 'Pepi-Burger',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne Sirloin, queso asadero, pepperoni crujiente, jitomate, cebolla asada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.5
    },
    {
        id: 'burg-pollo',
        name: 'Hamburguesa de Pollo',
        category: 'hamburguesas',
        price: 85,
        description: 'Filete de pechuga de pollo, queso asadero, jitomate, cebolla asada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.6
    },
    {
        id: 'burg-camaron',
        name: 'Hamburguesa de Camarón',
        category: 'hamburguesas',
        price: 85,
        description: 'Camarones al gusto, queso asadero, aguacate, jitomate, cebolla asada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: 'Favorita',
        stars: 4.9
    },
    {
        id: 'burg-hawaiana',
        name: 'Hamburguesa Hawaiana',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne Sirloin, queso asadero, piña asada, aguacate, lechuga, jitomate, cebolla morada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'burg-texas',
        name: 'Hamburguesa Texas',
        category: 'hamburguesas',
        price: 100,
        description: 'Carne Sirloin, queso asadero, tocino, lechuga, jitomate, pepinillos, aguacate y cebolla asada.',
        image: 'assets/burger_item.jpg',
        badge: 'Recomendada',
        stars: 4.9
    },
    {
        id: 'burg-doble',
        name: 'Hamburguesa Doble Carne',
        category: 'hamburguesas',
        price: 95,
        description: 'Doble porción de carne Sirloin, queso amarillo, lechuga, jitomate, pepinillos, aguacate y cebolla asada.',
        image: 'assets/burger_item.jpg',
        badge: 'Doble',
        stars: 4.9
    },
    {
        id: 'burg-villa-ahumada',
        name: 'Hamburguesa Villa Ahumada',
        category: 'hamburguesas',
        price: 80,
        description: 'Carne Sirloin, queso asadero, jalapeños, aguacate, jitomate, cebolla morada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: 'Picante',
        stars: 4.7
    },
    {
        id: 'burg-santi',
        name: 'Hamburguesa La Santi',
        category: 'hamburguesas',
        price: 100,
        description: 'Carne Sirloin, queso asadero, 1 salchicha de asar, aguacate, jitomate, cebolla morada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.8
    },
    {
        id: 'burg-migue',
        name: 'Hamburguesa La Migue',
        category: 'hamburguesas',
        price: 90,
        description: 'Carne Sirloin bañada en salsa BBQ, queso asadero, aros de cebolla crujientes, aguacate, jitomate, cebolla morada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.8
    },
    {
        id: 'burg-champi',
        name: 'Hamburguesa La Champi',
        category: 'hamburguesas',
        price: 85,
        description: 'Carne Sirloin, queso asadero, champiñones, jalapeño, jitomate, cebolla asada y pepinillos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    // --- HOT DOGS JUMBO ---
    {
        id: 'dog-sencillo-pavo',
        name: 'Hot-Dog Jumbo Sencillo (Pavo)',
        category: 'hot-dog',
        price: 35,
        description: 'Hot dog jumbo con salchicha de pavo, tocino, cebolla asada, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: 'Económico',
        stars: 4.5
    },
    {
        id: 'dog-sencillo-res',
        name: 'Hot-Dog Jumbo Sencillo (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Hot dog jumbo con salchicha de res, tocino, cebolla asada, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: 'Res',
        stars: 4.6
    },
    {
        id: 'dog-norteno-res',
        name: 'Hot-Dog Jumbo Norteño (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Salchicha de res, queso amarillo líquido, frijol de olla, tocino, cebolla, aguacate, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: 'Frijoles',
        stars: 4.8
    },
    {
        id: 'dog-preparado-res',
        name: 'Hot-Dog Jumbo Preparado (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Salchicha de res, queso asadero fundido, tocino, aguacate, cebolla, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: 'Asadero',
        stars: 4.7
    },
    {
        id: 'dog-choridogo-res',
        name: 'Choridogo Jumbo (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Salchicha de res, queso asadero fundido, chorizo de la casa, tocino, aguacate, cebolla, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: 'Recomendado',
        stars: 4.9
    },
    {
        id: 'dog-champinon-res',
        name: 'Hot-Dog Jumbo Champiñón (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Salchicha de res, champiñones salteados, tocino, queso asadero, aguacate, cebolla, jitomate y aderezos.',
        image: 'assets/burger_item.jpg',
        badge: '',
        stars: 4.7
    },
    {
        id: 'dog-papas-res',
        name: 'Hot-Dog Jumbo Ruffles/Cheetos/Doritos (Res)',
        category: 'hot-dog',
        price: 75,
        description: 'Salchicha de res, queso amarillo líquido, tocino, cebolla, jitomate, aderezos y papas crujientes trituradas (Doritos, Cheetos o Ruffles).',
        image: 'assets/burger_item.jpg',
        badge: 'Original',
        stars: 4.9
    },
    // --- ALITAS ---
    {
        id: 'alitas-500g',
        name: 'Alitas de Pollo (500 gr.)',
        category: 'alitas',
        price: 85,
        description: '500 gramos de alitas de pollo doradas y crujientes, bañadas en tu salsa favorita.',
        image: 'assets/Gemini_Generated_Image_gxvgk2gxvgk2gxvg.png',
        badge: '500g',
        stars: 4.8
    },
    // --- BONELESS ---
    {
        id: 'boneless-200g',
        name: 'Boneless (200 gr.)',
        category: 'boneless',
        price: 80,
        description: '200 gramos de tiernos trozos de pechuga de pollo empanizados y bañados en salsa al gusto.',
        image: 'assets/Gemini_Generated_Image_gxvgk2gxvgk2gxvg.png',
        badge: '200g',
        stars: 4.7
    },
    // --- BEBIDAS ---
    {
        id: 'beb-agua-chica',
        name: 'Agua Purificada (1/2 Litro)',
        category: 'bebidas',
        price: 25,
        description: 'Agua embotellada fresca de 500ml.',
        image: 'assets/combo_item.jpg',
        badge: '500ml',
        stars: 4.3
    },
    {
        id: 'beb-agua-grande',
        name: 'Agua Purificada (1 Litro)',
        category: 'bebidas',
        price: 35,
        description: 'Agua embotellada fresca de 1 Litro.',
        image: 'assets/combo_item.jpg',
        badge: '1 Litro',
        stars: 4.4
    },
    {
        id: 'beb-refresco-vidrio',
        name: 'Refresco en Vidrio',
        category: 'bebidas',
        price: 25,
        description: 'Refrescos clásicos fríos en envase de vidrio.',
        image: 'assets/combo_item.jpg',
        badge: 'Frío',
        stars: 4.8
    },
    {
        id: 'beb-refresco-desechable',
        name: 'Refresco Desechable',
        category: 'bebidas',
        price: 30,
        description: 'Refresco en envase desechable frío.',
        image: 'assets/combo_item.jpg',
        badge: 'Lata/Pet',
        stars: 4.6
    }
];

// Opciones de personalización
const CUSTOMIZATION_OPTIONS = {
    tacos: [
        { name: 'Tortilla de Maíz', price: 0, group: 'Tortilla (Elige una)', type: 'radio', required: true, default: true },
        { name: 'Tortilla de Harina', price: 0, group: 'Tortilla (Elige una)', type: 'radio', required: true }
    ],
    tortas: [
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' },
        { name: 'Extra Aguacate', price: 10, type: 'checkbox' },
        { name: 'Sin Cebolla', price: 0, type: 'checkbox' },
        { name: 'Sin Picante', price: 0, type: 'checkbox' }
    ],
    chilaquiles: [
        { name: 'Con Huevo Estrellado', price: 10, type: 'checkbox' },
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' }
    ],
    papas: [
        { name: 'Añadir Queso Asadero Derretido', price: 15, type: 'checkbox' },
        { name: 'Añadir Tocino Picado', price: 15, type: 'checkbox' },
        { name: 'Aderezo Chipotle Extra', price: 5, type: 'checkbox' }
    ],
    'especialidad-papas': [
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' },
        { name: 'Extra Tocino Picado', price: 15, type: 'checkbox' }
    ],
    'papa-asada': [
        { name: 'Extra Tocino', price: 15, type: 'checkbox' },
        { name: 'Extra Champiñones', price: 15, type: 'checkbox' },
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' }
    ],
    tostitos: [
        { name: 'Añadir Elote', price: 10, type: 'checkbox' },
        { name: 'Crema y Queso Extra', price: 10, type: 'checkbox' }
    ],
    camarones: [
        { name: 'Extra Ensalada', price: 15, type: 'checkbox' },
        { name: 'Extra Papas', price: 20, type: 'checkbox' }
    ],
    sandwich: [
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' },
        { name: 'Extra Aguacate', price: 10, type: 'checkbox' },
        { name: 'Sin Cebolla', price: 0, type: 'checkbox' }
    ],
    nachos: [
        { name: 'Extra Queso Amarillo', price: 15, type: 'checkbox' },
        { name: 'Jalapeños Extra', price: 5, type: 'checkbox' }
    ],
    hamburguesas: [
        { name: 'Extra Queso Amarillo', price: 12, type: 'checkbox' },
        { name: 'Extra Queso Asadero', price: 15, type: 'checkbox' },
        { name: 'Extra Tocino', price: 15, type: 'checkbox' },
        { name: 'Doble Carne', price: 35, type: 'checkbox' },
        { name: 'Sin Cebolla', price: 0, type: 'checkbox' },
        { name: 'Sin Pepinillos', price: 0, type: 'checkbox' }
    ],
    'hot-dog': [
        { name: 'Papas: Ruffles', price: 0, group: 'Papas (Para Especial de Papas)', type: 'radio' },
        { name: 'Papas: Cheetos', price: 0, group: 'Papas (Para Especial de Papas)', type: 'radio' },
        { name: 'Papas: Doritos', price: 0, group: 'Papas (Para Especial de Papas)', type: 'radio' },
        { name: 'Queso Asadero Extra', price: 15, type: 'checkbox' },
        { name: 'Aguacate Extra', price: 10, type: 'checkbox' }
    ],
    alitas: [
        { name: 'Salsa: Búfalo', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true, default: true },
        { name: 'Salsa: BBQ', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: BBQ-Hot', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Mango-Habanero', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Cheetos Naranja', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Flamin-Hot', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Pimienta-Limón', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Tamarindo', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true }
    ],
    boneless: [
        { name: 'Salsa: Búfalo', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true, default: true },
        { name: 'Salsa: BBQ', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: BBQ-Hot', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Mango-Habanero', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Cheetos Naranja', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Flamin-Hot', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Pimienta-Limón', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true },
        { name: 'Salsa: Tamarindo', price: 0, group: 'Salsa (Elige una)', type: 'radio', required: true }
    ],
    bebidas: []
};

// Variables globales de estado
let cart = JSON.parse(localStorage.getItem('la_casita_cart')) || [];
let activeCategory = 'todos';
let searchQuery = '';
let currentSelectedProduct = null;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    setupEventListeners();
    setupCartUI();
});

// Configuración de escuchas de eventos
function setupEventListeners() {
    // Filtrado por Categorías
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            renderProducts();
        });
    });

    // Buscador
    const searchInput = document.getElementById('search-input');
    const clearSearch = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        if (searchQuery.length > 0) {
            clearSearch.style.display = 'block';
        } else {
            clearSearch.style.display = 'none';
        }
        renderProducts();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearch.style.display = 'none';
        renderProducts();
    });

    // Abrir/Cerrar Carrito
    const cartToggle = document.getElementById('cart-toggle-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCartFunc = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('show');
        document.body.classList.toggle('overflow-hidden');
        renderCartItems();
    };

    cartToggle.addEventListener('click', toggleCartFunc);
    closeCart.addEventListener('click', toggleCartFunc);
    cartOverlay.addEventListener('click', toggleCartFunc);

    // Modal de Detalle de Producto
    const closeModal = document.getElementById('close-modal');
    const productModal = document.getElementById('product-modal');
    
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        }
    });

    // Envío del pedido por WhatsApp
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', sendOrderToWhatsApp);
}

// Renderizar la lista de productos
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    // Filtrar los productos
    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                              p.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results text-center py-5">
                <i class="fas fa-utensils fa-3x text-muted mb-3"></i>
                <h3>No encontramos lo que buscas</h3>
                <p class="text-muted">Prueba buscando otros ingredientes o categorías.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card animate-fade-in';
        
        // Estrellas de puntuación
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(p.stars)) {
                starsHTML += '<i class="fas fa-star text-primary"></i>';
            } else if (i - 0.5 <= p.stars) {
                starsHTML += '<i class="fas fa-star-half-alt text-primary"></i>';
            } else {
                starsHTML += '<i class="far fa-star text-muted"></i>';
            }
        }

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${p.image}" alt="${p.name}" class="card-image" loading="lazy">
                ${p.badge ? `<span class="card-badge bg-accent">${p.badge}</span>` : ''}
                <div class="card-image-overlay">
                    <button class="btn btn-primary rounded-circle btn-view" data-id="${p.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h3 class="product-title">${p.name}</h3>
                    <span class="product-price">$${p.price.toFixed(2)}</span>
                </div>
                <div class="product-rating mb-2">
                    ${starsHTML} <span class="rating-text">(${p.stars})</span>
                </div>
                <p class="product-description">${p.description}</p>
                <div class="card-actions mt-3">
                    <button class="btn btn-outline-primary w-100 btn-add-quick" data-id="${p.id}">
                        <i class="fas fa-shopping-cart me-2"></i> Agregar
                    </button>
                </div>
            </div>
        `;

        // Eventos
        card.querySelector('.btn-view').addEventListener('click', () => openProductModal(p));
        card.querySelector('.btn-add-quick').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCartQuick(p);
        });

        grid.appendChild(card);
    });
}

// Abrir Modal de Producto para Personalización
function openProductModal(product) {
    currentSelectedProduct = product;
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-product-name');
    const modalImg = document.getElementById('modal-product-image');
    const modalDesc = document.getElementById('modal-product-description');
    const modalPrice = document.getElementById('modal-product-price');
    const optionsContainer = document.getElementById('modal-custom-options');
    const quantityCount = document.getElementById('modal-qty-count');

    // Cargar detalles básicos
    modalTitle.textContent = product.name;
    modalImg.src = product.image;
    modalDesc.textContent = product.description;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    quantityCount.textContent = '1';

    // Generar opciones de personalización
    optionsContainer.innerHTML = '';
    const options = CUSTOMIZATION_OPTIONS[product.category] || [];
    
    if (options.length > 0) {
        const title = document.createElement('h4');
        title.className = 'custom-options-title mb-3';
        title.innerHTML = '<i class="fas fa-tools text-primary me-2"></i>Personaliza tu pedido:';
        optionsContainer.appendChild(title);

        let currentGroup = '';
        options.forEach((opt, idx) => {
            if (opt.group && opt.group !== currentGroup) {
                currentGroup = opt.group;
                const groupTitle = document.createElement('h5');
                groupTitle.className = 'custom-group-title mt-3 mb-2 text-muted small fw-bold text-uppercase';
                groupTitle.textContent = currentGroup;
                optionsContainer.appendChild(groupTitle);
            }

            const wrapper = document.createElement('div');
            wrapper.className = 'custom-option-item';
            
            const uniqueId = `opt-${product.id}-${idx}`;
            const priceText = opt.price > 0 ? `(+$${opt.price.toFixed(2)})` : '(Sin costo extra)';
            const inputType = opt.type === 'radio' ? 'radio' : 'checkbox';
            const nameAttr = opt.type === 'radio' ? `name="group-${opt.group.replace(/\s+/g, '-')}"` : '';
            const checkedAttr = (opt.type === 'radio' && opt.default) ? 'checked' : '';
            
            wrapper.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input custom-opt-input" type="${inputType}" ${nameAttr} ${checkedAttr}
                           id="${uniqueId}" data-name="${opt.name}" data-price="${opt.price}">
                    <label class="form-check-label d-flex justify-content-between" for="${uniqueId}">
                        <span>${opt.name}</span>
                        <span class="text-accent">${priceText}</span>
                    </label>
                </div>
            `;
            optionsContainer.appendChild(wrapper);
        });
    }

    // Configurar control de cantidades dentro del modal
    const minusBtn = document.getElementById('modal-qty-minus');
    const plusBtn = document.getElementById('modal-qty-plus');
    
    const newMinus = minusBtn.cloneNode(true);
    const newPlus = plusBtn.cloneNode(true);
    minusBtn.replaceWith(newMinus);
    plusBtn.replaceWith(newPlus);

    let qty = 1;
    newMinus.addEventListener('click', () => {
        if (qty > 1) {
            qty--;
            quantityCount.textContent = qty;
        }
    });

    newPlus.addEventListener('click', () => {
        qty++;
        quantityCount.textContent = qty;
    });

    // Configurar botón de agregar del modal
    const addBtn = document.getElementById('modal-add-btn');
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.replaceWith(newAddBtn);

    newAddBtn.addEventListener('click', () => {
        const inputs = optionsContainer.querySelectorAll('.custom-opt-input:checked');
        const extras = Array.from(inputs).map(input => ({
            name: input.dataset.name,
            price: parseFloat(input.dataset.price)
        }));

        addToCart(product, qty, extras);
        
        modal.classList.remove('open');
        document.body.classList.remove('overflow-hidden');

        showToast(`¡${product.name} agregado al carrito!`);
    });

    modal.classList.add('open');
    document.body.classList.add('overflow-hidden');
}

// Agregar rápido (sin personalización, cantidad = 1)
function addToCartQuick(product) {
    const options = CUSTOMIZATION_OPTIONS[product.category] || [];
    const hasRequired = options.some(opt => opt.required);
    
    if (hasRequired) {
        openProductModal(product);
        return;
    }

    addToCart(product, 1, []);
    showToast(`¡${product.name} agregado al carrito!`);
}

// Agregar elemento al carrito formalmente
function addToCart(product, qty, extras) {
    const extrasKey = extras.map(e => `${e.name}:${e.price}`).sort().join('|');
    const cartItemId = `${product.id}-${extrasKey}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: qty,
            extras: extras
        });
    }

    saveCart();
    updateCartCount();
    renderCartItems();
}

// Actualizar el número de la insignia del carrito
function updateCartCount() {
    const badge = document.getElementById('cart-badge');
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalCount;
    
    const cartToggle = document.getElementById('cart-toggle-btn');
    if (totalCount > 0) {
        cartToggle.classList.add('pulse');
    } else {
        cartToggle.classList.remove('pulse');
    }
}

// Renderizar la lista de compras del carrito lateral
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-subtotal');
    
    container.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart text-center py-5">
                <i class="fas fa-shopping-basket fa-3x text-muted mb-3"></i>
                <p>Tu carrito está vacío</p>
                <p class="text-muted small">¡Explora nuestro delicioso menú y agrega tus platillos favoritos!</p>
            </div>
        `;
        totalEl.textContent = '$0.00';
        document.getElementById('checkout-btn').disabled = true;
        return;
    }

    document.getElementById('checkout-btn').disabled = false;

    cart.forEach((item, index) => {
        const extrasPrice = item.extras.reduce((sum, e) => sum + e.price, 0);
        const itemUnitPrice = item.price + extrasPrice;
        const itemTotal = itemUnitPrice * item.quantity;
        subtotal += itemTotal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item animate-fade-in';

        let extrasHTML = '';
        if (item.extras.length > 0) {
            extrasHTML = `
                <div class="cart-item-extras">
                    ${item.extras.map(e => `<span>+ ${e.name} ($${e.price.toFixed(2)})</span>`).join('')}
                </div>
            `;
        }

        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <button class="btn btn-link text-danger p-0 btn-remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="cart-item-price">$${itemUnitPrice.toFixed(2)}</div>
                ${extrasHTML}
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="qty-control-sm">
                        <button class="btn-qty-sm btn-minus" data-index="${index}"><i class="fas fa-minus"></i></button>
                        <span class="qty-val-sm">${item.quantity}</span>
                        <button class="btn-qty-sm btn-plus" data-index="${index}"><i class="fas fa-plus"></i></button>
                    </div>
                    <span class="fw-bold text-accent">$${itemTotal.toFixed(2)}</span>
                </div>
            </div>
        `;

        cartItemEl.querySelector('.btn-minus').addEventListener('click', () => adjustCartQuantity(index, -1));
        cartItemEl.querySelector('.btn-plus').addEventListener('click', () => adjustCartQuantity(index, 1));
        cartItemEl.querySelector('.btn-remove-item').addEventListener('click', () => removeCartItem(index));

        container.appendChild(cartItemEl);
    });

    // Calcular costo de envío si aplica
    const deliveryMethod = document.getElementById('delivery-method')?.value || 'recoger';
    const deliveryDistance = document.getElementById('delivery-distance')?.value || '0-3';
    let deliveryFee = 0;
    
    if (deliveryMethod === 'envio') {
        deliveryFee = deliveryDistance === '0-3' ? 15 : 25;
    }

    const total = subtotal + deliveryFee;

    // Actualizar vista de totales con desglose
    totalEl.innerHTML = `
        <div class="totals-breakdown" style="width: 100%; font-size: 0.9rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem; margin-bottom: 0.5rem; color: var(--color-text-main);">
            <div class="d-flex justify-content-between mb-1">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            ${deliveryMethod === 'envio' ? `
            <div class="d-flex justify-content-between mb-1" style="color: var(--color-text-muted);">
                <span>Envío a domicilio:</span>
                <span>+$${deliveryFee.toFixed(2)}</span>
            </div>
            ` : ''}
        </div>
        <div class="d-flex justify-content-between fw-bold w-100" style="font-size: 1.25rem;">
            <span>Total:</span>
            <span class="text-primary">$${total.toFixed(2)}</span>
        </div>
    `;
}

// Ajustar cantidad de un elemento del carrito
function adjustCartQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Remover elemento del carrito
function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Guardar carrito en LocalStorage
function saveCart() {
    localStorage.setItem('la_casita_cart', JSON.stringify(cart));
}

// Configuración adicional del checkout
function setupCartUI() {
    const paymentSelect = document.getElementById('payment-method');
    const cashChangeWrapper = document.getElementById('cash-change-wrapper');
    
    paymentSelect.addEventListener('change', (e) => {
        if (e.target.value === 'efectivo') {
            cashChangeWrapper.classList.remove('d-none');
            cashChangeWrapper.classList.add('animate-fade-in');
        } else {
            cashChangeWrapper.classList.add('d-none');
        }
    });

    // Control de Envíos
    const deliveryMethodSelect = document.getElementById('delivery-method');
    const deliveryDistanceWrapper = document.getElementById('delivery-distance-wrapper');
    const deliveryAddressWrapper = document.getElementById('delivery-address-wrapper');
    const deliveryDistanceSelect = document.getElementById('delivery-distance');

    if (deliveryMethodSelect) {
        deliveryMethodSelect.addEventListener('change', (e) => {
            if (e.target.value === 'envio') {
                deliveryDistanceWrapper.classList.remove('d-none');
                deliveryAddressWrapper.classList.remove('d-none');
                deliveryDistanceWrapper.classList.add('animate-fade-in');
                deliveryAddressWrapper.classList.add('animate-fade-in');
            } else {
                deliveryDistanceWrapper.classList.add('d-none');
                deliveryAddressWrapper.classList.add('d-none');
            }
            renderCartItems();
        });
    }

    if (deliveryDistanceSelect) {
        deliveryDistanceSelect.addEventListener('change', () => {
            renderCartItems();
        });
    }
}

// Formatear pedido y enviar a WhatsApp
function sendOrderToWhatsApp() {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerNotes = document.getElementById('customer-notes').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const cashChange = document.getElementById('cash-change').value.trim();
    const deliveryMethod = document.getElementById('delivery-method').value;
    const deliveryDistance = document.getElementById('delivery-distance').value;
    const deliveryAddress = document.getElementById('delivery-address')?.value.trim();
    
    if (!customerName) {
        alert('Por favor, ingresa tu nombre.');
        document.getElementById('customer-name').focus();
        return;
    }

    if (deliveryMethod === 'envio' && !deliveryAddress) {
        alert('Por favor, ingresa tu dirección de entrega.');
        document.getElementById('delivery-address').focus();
        return;
    }

    // Teléfono de La Casita
    const phoneNumber = '4491892487'; 

    // Cabecera del mensaje
    let message = `🏡 *LA CASITA - NUEVO PEDIDO* 🏡\n`;
    message += `===============================\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    message += `💳 *Método de Pago:* ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}\n`;
    
    if (paymentMethod === 'efectivo' && cashChange) {
        message += `💵 *Paga con:* $${cashChange} (Requiere cambio)\n`;
    }

    message += `🛵 *Tipo de Entrega:* ${deliveryMethod === 'envio' ? 'Envío a Domicilio' : 'Comer aquí / Recoger en sucursal'}\n`;
    
    if (deliveryMethod === 'envio') {
        const distText = deliveryDistance === '0-3' ? '0 a 3 km (+$15)' : '3 a 6 km (+$25)';
        message += `📍 *Distancia:* ${distText}\n`;
        message += `🏠 *Dirección:* ${deliveryAddress}\n`;
    }

    if (customerNotes) {
        message += `📝 *Notas del Pedido:* ${customerNotes}\n`;
    }
    
    message += `\n🛒 *DETALLE DEL PEDIDO:*\n`;
    message += `---------------------------------\n`;

    let subtotal = 0;
    cart.forEach(item => {
        const extrasPrice = item.extras.reduce((sum, e) => sum + e.price, 0);
        const unitPrice = item.price + extrasPrice;
        const subtotalItem = unitPrice * item.quantity;
        subtotal += subtotalItem;

        message += `• *${item.quantity}x* ${item.name} ($${item.price.toFixed(2)})\n`;
        
        if (item.extras.length > 0) {
            item.extras.forEach(ext => {
                message += `  _+ ${ext.name} ($${ext.price.toFixed(2)})_\n`;
            });
        }
        
        message += `  *Subtotal:* $${subtotalItem.toFixed(2)}\n\n`;
    });

    let deliveryFee = 0;
    if (deliveryMethod === 'envio') {
        deliveryFee = deliveryDistance === '0-3' ? 15 : 25;
    }
    const total = subtotal + deliveryFee;

    message += `---------------------------------\n`;
    message += `💵 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (deliveryMethod === 'envio') {
        message += `🛵 *Envío:* $${deliveryFee.toFixed(2)}\n`;
    }
    message += `💰 *TOTAL A PAGAR: $${total.toFixed(2)}*\n\n`;
    message += `===============================\n`;
    message += `¡Muchas gracias por su preferencia! 🏡🍽️`;

    // Codificar mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir enlace en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Vaciar carrito tras hacer el pedido
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    
    // Cerrar carrito
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('show');
    document.body.classList.remove('overflow-hidden');
    
    showToast('¡Pedido enviado! Redirigiendo a WhatsApp...', 4000);
}

// Función auxiliar para notificaciones Toast
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification animate-slide-up';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle text-primary me-2"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, duration);
}
