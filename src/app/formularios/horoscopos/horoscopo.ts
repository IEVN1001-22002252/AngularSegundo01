export class Horoscopo {
  nom: string = '';
  aPaterno: string = '';
  aMterno: string = '';
  sexo: string = '';
  edad: number = 0;
  signoChino: string = '';
  imagen: string = ''; // 👈 nueva propiedad

  constructor() {}

  calcularEdad(año: number, mes: number, dia: number): number {
    const hoy = new Date();
    const fechaNac = new Date(año, mes - 1, dia);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const m = hoy.getMonth() - fechaNac.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  obtenerSignoChino(año: number): string {
    const signos = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
      'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];
    const indice = (año - 4) % 12;
    const signo = signos[indice];
    this.imagen = this.obtenerImagen(signo); // 👈 asigna la imagen correspondiente
    return signo;
  }

  private obtenerImagen(signo: string): string {
    const imagenes: { [key: string]: string } = {
      'Rata': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg',
      'Buey': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg',
      'Tigre': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg',
      'Conejo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg',
      'Dragón': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg',
      'Serpiente': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg',
      'Caballo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg',
      'Cabra': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg',
      'Mono': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg',
      'Gallo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg',
      'Perro': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perros.jpg',
      'Cerdo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg'
    };

    return imagenes[signo] || 'https://cdn-icons-png.flaticon.com/512/616/616404.png';
  }
}
