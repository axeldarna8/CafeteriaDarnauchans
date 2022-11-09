import capuccino from '../../assets/capuccino1.png'
import espresso from '../../assets/espresso1.png'
import te from '../../assets/tecito1.png'
import gaseosa from '../../assets/cocacola1.png'
import licuado from '../../assets/licuado1.png'
import cerveza from '../../assets/cerveza1.png'


const datos = [
    {
      precio: 150,
      id: 1,
      title: "Capuccino",
      image: capuccino,
      especial: 'Leche entera, descremada o de almendras',
      tamaño: 'Mediano, Grande',
      alt: 'Capuccino',
      stock: 15
    },
    {
      precio: 100,
      id: 2,
      title: "Espresso",
      image: espresso,
      especial : "Corto, Largo",
      alt: 'Espresso',
      stock: 15
    },
    {
      precio: 100,
      id: 3,
      title: "Té",
      image: te,
      especial : "Negro, Verde, Frutos del bosque",
      alt: 'Te',
      stock: 15
    },
    {
      precio: 180,
      id: 4,
      title: "Gaseosa",
      image: gaseosa,
      especial : "Comun, Light, Zero",
      tamaño : "Pequeña, Grande",
      alt: 'Gaseosa',
      stock: 15
    },
    {
      precio: 120,
      id: 5,
      title: "Licuado",
      image: licuado,
      especial : "Banana, Durazo, Frutilla",
      tamaño : "Mediano, Grande",
      alt: 'Licuado',
      stock: 15
    },
    {
      precio: 170,
      id: 6,
      title: "Cerveza",
      image: cerveza,
      especial : "Ipa, Roja, Negra",
      tamaño : "Media pinta, Una pinta",
      alt: 'Cerveza',
      stock: 15
    }
  ]

  export default datos

  