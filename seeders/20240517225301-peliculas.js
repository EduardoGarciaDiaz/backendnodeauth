'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pelicula', [
      { titulo: "Sueño de fuga", sinopsis: "El banquero Andy Dufresne es arrestado por matar a su esposa y amante. Tras una dura adaptación, intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.", anio: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "El padrino", sinopsis: "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.", anio: 1972, poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "El caballero oscuro", sinopsis: "Cuando el Joker emerge causando caos y violencia en Gotham, el caballero de la noches deberá aceptar una de las pruebas psicológicas y físicas más difíciles para poder luchar con las injusticias del enemigo.", anio: 2008, poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "El retorno del rey", sinopsis: "Gandalf y Aragorn lideran el Mundo de los hombres, e intentarán atraer la atención de Sauron para darle a Frodo la última oportunidad de completar su misión y así tratar de evitar sucumbir a las continuas tentaciones del Anillo.", anio: 2003, poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Tiempos violentos", sinopsis: "Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.", anio: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Forrest Gump", sinopsis: "Las presidencias de Kennedy y Johnson, los eventos de Vietnam, Watergate vistas desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.", anio: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "El club de la pelea", sinopsis: "Un hombre deprimido conoce a un fabricante de jabones, y juntos forman un club de pelea clandestino que evoluciona en algo inesperado.", anio: 1999, poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Inception", sinopsis: "A un ladrón que roba secretos corporativos a través de la tecnología de entrar en el subconsciente, se le da la tarea de implantar una idea en la mente del jefe de una gran empresa.", anio: 2010, poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Star Wars: Episodio V - El imperio contraataca", sinopsis: "Los rebeldes han vencido al Imperio en el planeta helado Hoth. Luke Skywalker empieza a entrenar como Jedi con Yoda, mientras sus amigos son perseguidos por Darth Vader.", anio: 1980, poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Matrix", sinopsis: "Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores.", anio: 1999, poster: "https://m.media-amazon.com/images/M/MV5BZjJjMTg5MTEtMDkwMy00ZjUyLTg5ODYtMmNmY2ZiNGVlZTdjXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Interestelar", sinopsis: "Un grupo de exploradores prueban los saltos a través de agujeros de gusano en búsqueda de la sobrevivencia de la humanidad.", anio: 2014, poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Dune: Parte dos", sinopsis: "Paul Atreides se une a Chani y los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.", anio: 2024, poster: "https://m.media-amazon.com/images/M/MV5BODdjMjM3NGQtZDA5OC00NGE4LWIyZDQtZjYwOGZlMTM5ZTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Terminador 2: El juicio final", sinopsis: "Un cyborg, idéntico al que fracasó al asesinar a Sarah Connor, ahora debe proteger al hijo adolescente de un cyborg más avanzado y poderoso.", anio: 1991, poster: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Volver al futuro", sinopsis: "Marty McFly, un estudiante de 17 años, es enviado accidentalmente treinta años al pasado en un artefacto inventado por su amigo.", anio: 1995, poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
      { titulo: "Barbie", sinopsis: "Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial completa. O seas Ken.", anio: 2023, poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg", createdAt: new Date(), updatedAt: new Date() },
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pelicula', null, {});
  }
};