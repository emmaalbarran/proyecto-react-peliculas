import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './movie/MovieCard';
import { Col, Container, Row, Button } from 'react-bootstrap';
import styles from './Home.module.css';
import './Home.module.css';

const Home = ({ movies, setMovies }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(10); // Número inicial de películas visibles
  const containerRef = useRef();

  useEffect(() => {
    if (movies.length === 0) {
      const initialMovies = [
        {id: 1, title: 'El Padrino', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Padrino es una película de crimen dirigida por Francis Ford Coppola que sigue la historia de la familia mafiosa Corleone y su líder, Don Vito Corleone, mientras luchan por mantener su poder y control en el mundo del crimen organizado.'},
        {id: 2, title: 'Forrest Gump', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Forrest Gump, dirigida por Robert Zemeckis, narra la vida de un hombre con discapacidades intelectuales que, a pesar de sus limitaciones, participa en eventos clave de la historia de Estados Unidos mientras persigue su amor de toda la vida, Jenny.'},
        {id: 3, title: 'Titanic', genre: 'Romance', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Titanic, dirigida por James Cameron, es una epopeya romántica que sigue la historia de amor entre Jack y Rose, dos pasajeros del famoso transatlántico Titanic, mientras enfrentan el desastre inminente.'},
        {id: 4, title: 'El Señor de los Anillos: La Comunidad del Anillo', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Señor de los Anillos: La Comunidad del Anillo, dirigida por Peter Jackson, es la primera entrega de la trilogía épica basada en la obra de J.R.R. Tolkien. La historia sigue la búsqueda del Anillo Único para destruirlo y evitar que caiga en manos de Sauron.'},
        {id: 5, title: 'La lista de Schindler', genre: 'Historia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La lista de Schindler, dirigida por Steven Spielberg, relata la verdadera historia de Oskar Schindler, un empresario alemán que salva a más de mil judíos durante el Holocausto al emplearlos en sus fábricas.'},
        {id: 6, title: 'El Rey León', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Rey León, una película animada de Disney, sigue la historia de Simba, un joven león destinado a ser rey, pero que se ve obligado a exiliarse tras la muerte de su padre Mufasa. La película explora temas de responsabilidad y auto-descubrimiento.'},
        {id: 7, title: 'Matrix', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Matrix, dirigida por los hermanos Wachowski, es una película de ciencia ficción que sigue a Neo, un hacker que descubre que el mundo que percibe es una simulación controlada por máquinas. Se une a una resistencia para liberar a la humanidad.'},
        {id: 8, title: 'Casablanca', genre: 'Romance', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Casablanca, dirigida por Michael Curtiz, es un clásico del cine romántico ambientado en la Segunda Guerra Mundial. La historia sigue al dueño de un café, Rick Blaine, mientras se debate entre el amor y la lealtad en la ciudad de Casablanca ocupada por los nazis.'},
        {id: 9, title: 'Ciudadano Kane', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Ciudadano Kane, dirigida por Orson Welles, es una obra maestra del cine que sigue la vida del magnate de los medios de comunicación Charles Foster Kane. A través de una estructura narrativa innovadora, la película explora la búsqueda del significado de la última palabra que pronunció: "Rosebud".'},
        {id: 10, title: 'Gladiator', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Gladiator, dirigida por Ridley Scott, es una película épica de acción que sigue la historia de Máximo, un general romano que es traicionado y se convierte en esclavo. Busca venganza en el Coliseo romano como gladiador.'},
        {id: 11, title: 'El Silencio de los Corderos', genre: 'Thriller', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Silencio de los Corderos, dirigida por Jonathan Demme, es un thriller psicológico que sigue a la agente del FBI Clarice Starling mientras busca la ayuda del asesino en serie encarcelado Hannibal Lecter para capturar a otro asesino en serie.'},
        {id: 12, title: 'E.T. el Extraterrestre', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'E.T. el Extraterrestre, dirigida por Steven Spielberg, es una película de ciencia ficción y aventuras que sigue la amistad entre un niño llamado Elliott y un extraterrestre llamado E.T. La historia explora temas de amistad y conexión emocional.'},
        {id: 13, title: 'Pulp Fiction', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Pulp Fiction, dirigida por Quentin Tarantino, es una película de crimen que entrelaza varias historias relacionadas con el mundo del crimen en Los Ángeles. La película es conocida por su estructura narrativa no lineal y diálogos impactantes.'},
        {id: 14, title: 'Avatar', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Avatar, dirigida por James Cameron, es una película de ciencia ficción y aventuras que se desarrolla en el planeta Pandora. La historia sigue a Jake Sully, un ex-marine parapléjico, mientras se involucra en el conflicto entre los humanos y la población nativa de Pandora, los Navi.'},
        {id: 15, title: 'Jurassic Park', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Jurassic Park, dirigida por Steven Spielberg, es una película de aventuras y ciencia ficción que sigue a un grupo de personas que visitan un parque temático con dinosaurios reales. Las cosas salen mal cuando los dinosaurios escapan y amenazan la vida de los visitantes.'},
        {id: 16, title: 'Harry Potter y la Piedra Filosofal', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Harry Potter y la Piedra Filosofal, dirigida por Chris Columbus, es la primera adaptación cinematográfica de la serie de libros de J.K. Rowling. La historia sigue a Harry Potter mientras descubre su identidad como mago y comienza su educación en la escuela de magia Hogwarts.'},
        {id: 17, title: 'El Resplandor', genre: 'Terror', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Resplandor, dirigida por Stanley Kubrick, es una película de terror basada en la novela de Stephen King. La historia sigue a Jack Torrance, su esposa e hijo mientras se mudan a un hotel aislado durante el invierno, donde eventos paranormales desencadenan la locura de Jack.'},
        {id: 18, title: 'El Gran Gatsby', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Gran Gatsby, dirigida por Baz Luhrmann, es una adaptación cinematográfica de la novela clásica de F. Scott Fitzgerald. La historia sigue al misterioso Jay Gatsby y su obsesión por la hermosa Daisy Buchanan durante la decadencia de la década de 1920.'},
        {id: 19, title: 'La La Land', genre: 'Musical', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La La Land, dirigida por Damien Chazelle, es un musical romántico que sigue la historia de amor entre un pianista y una actriz en Los Ángeles. La película combina música, baile y romance mientras los protagonistas persiguen sus sueños.'},
        {id: 20, title: 'El Sexto Sentido', genre: 'Misterio', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Sexto Sentido, dirigida por M. Night Shyamalan, es un thriller psicológico que sigue a un niño que puede ver y hablar con los muertos. Un psicólogo infantil intenta ayudarlo mientras descubre secretos oscuros.'},
        {id: 21, title: 'Ciudad de Dios', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Ciudad de Dios, dirigida por Fernando Meirelles, es una película brasileña que explora la vida en una favela de Río de Janeiro a lo largo de varias décadas. La historia sigue a dos jóvenes, Buscapé y Zé Pequeno, mientras enfrentan la violencia y la criminalidad en su entorno.'},
        {id: 22, title: 'Star Wars: Episodio IV - Una nueva esperanza', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Star Wars: Episodio IV - Una nueva esperanza, dirigida por George Lucas, es la primera entrega de la saga de Star Wars. La historia sigue a Luke Skywalker mientras se une a la Rebelión para luchar contra el malvado Imperio Galáctico y rescatar a la princesa Leia.'},
        {id: 23, title: 'El Laberinto del Fauno', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Laberinto del Fauno, dirigida por Guillermo del Toro, es una película de fantasía oscura que se desarrolla en la posguerra española. La historia sigue a Ofelia, una niña que descubre un mundo mágico mientras enfrenta la brutalidad de su padrastro, el capitán Vidal.'},
        {id: 24, title: 'El Rey Arturo', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Rey Arturo, dirigida por Antoine Fuqua, es una reimaginación de la leyenda del Rey Arturo. La historia sigue a Arturo mientras lidera a un grupo de caballeros en la defensa de Gran Bretaña contra las fuerzas invasoras.'},
        {id: 25, title: 'El Club de la Pelea', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Club de la Pelea, dirigida por David Fincher, sigue la vida de un hombre desencantado que forma un club secreto donde los hombres pueden liberar sus frustraciones a través de peleas físicas. La película explora temas de identidad y rebelión contra la sociedad moderna.'},
        {id: 26, title: 'El Exorcista', genre: 'Terror', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Exorcista, dirigida por William Friedkin, es un clásico del cine de terror que sigue la posesión demoníaca de una niña llamada Regan. Un sacerdote y un psiquiatra intentan exorcizar al demonio mientras enfrentan sus propios dilemas personales y religiosos.'},
        {id: 27, title: 'La Sirenita', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La Sirenita, una película animada de Disney, sigue la historia de Ariel, una sirena que sueña con vivir en la tierra firme. La película explora temas de amor y sacrificio mientras Ariel se enfrenta a la malvada bruja del mar, Úrsula.'},
        {id: 28, title: 'Requiem por un Sueño', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Requiem por un Sueño, dirigida por Darren Aronofsky, es un drama que sigue las vidas de cuatro personas afectadas por la adicción a las drogas. La película explora los devastadores efectos de las drogas en la vida de los protagonistas.'},
        {id: 29, title: 'Volver al Futuro', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Volver al Futuro, dirigida por Robert Zemeckis, es una película de ciencia ficción y aventuras que sigue la historia de Marty McFly y el Doc Brown mientras usan un DeLorean para viajar en el tiempo. La película se convierte en una serie de aventuras cuando alteran el pasado y deben arreglarlo para preservar el futuro.'},
        {id: 30, title: 'La Bella y la Bestia', genre: 'Romántica', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La Bella y la Bestia, una película animada de Disney, sigue la historia de Bella, una joven que se encuentra con una bestia maldita en un castillo encantado. A medida que Bella conoce a la Bestia, la película explora temas de amor y aceptación.'},
        {id: 31, title: 'Rescatando al Soldado Ryan', genre: 'Bélica', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Durante la Segunda Guerra Mundial, un grupo de soldados es enviado para encontrar y traer de vuelta a casa al último de los hermanos Ryan, cuyos tres hermanos han muerto en combate.'},
        {id: 32, title: 'Amélie', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Una joven parisina decide mejorar la vida de las personas que la rodean, pero encuentra dificultades para encontrar la felicidad en su propia vida.'},
        {id: 33, title: 'Indiana Jones: En busca del arca perdida', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El arqueólogo aventurero Indiana Jones es enviado en una misión para encontrar el Arca de la Alianza antes de que caiga en manos equivocadas.'},
        {id: 34, title: 'El Lobo de Wall Street', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La historia real de Jordan Belfort, un corredor de bolsa que se involucra en actividades fraudulentas y excesos en el mundo financiero.'},
        {id: 35, title: 'El Renacido', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un cazador de pieles es gravemente herido y abandonado por su equipo en el desierto, pero lucha por sobrevivir y vengarse.'},
        {id: 36, title: 'El Club de los Poetas Muertos', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un profesor de literatura inspira a sus estudiantes a vivir con pasión y perseguir sus sueños, desafiando las expectativas de la sociedad conservadora.'},
        {id: 37, title: 'Matrix', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un hacker descubre la verdad detrás de la realidad aparente y se une a una rebelión contra las máquinas que controlan el mundo.'},
        {id: 38, title: 'Intocable', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La relación inusual entre un aristócrata tetrapléjico y su cuidador, un joven de bajos recursos, lleva a momentos cómicos y conmovedores.'},
        {id: 39, title: 'El Gran Lebowski', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'El Dude, un aficionado al bowling, se ve involucrado en una trama de secuestro y misterio mientras intenta mantenerse relajado y evitar problemas.'},
        {id: 40, title: 'La Guerra de las Galaxias', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En una galaxia lejana, un grupo rebelde se enfrenta al malvado Imperio y a su arma definitiva, la Estrella de la Muerte.'},
        {id: 41, title: 'El Rey León', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un joven león debe enfrentar desafíos y superar tragedias para reclamar su lugar como rey de la sabana.'},
        {id: 42, title: 'Aladdín', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un joven callejero se encuentra con una lámpara mágica que alberga a un genio, concediéndole deseos para conquistar el corazón de una princesa.'},
        {id: 43, title: 'El Señor de los Anillos: Las Dos Torres', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Continuación de la búsqueda para destruir el anillo mágico, mientras los personajes enfrentan desafíos y peligros en la Tierra Media.'},
        {id: 44, title: 'El Código Da Vinci', genre: 'Misterio', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un profesor de simbología sigue las pistas de un asesinato en el Louvre, descubriendo un complot que involucra secretos antiguos y organizaciones poderosas.'},
        {id: 45, title: 'Blade Runner', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En un futuro distópico, un cazador de androides debe perseguir y "retirar" replicantes rebeldes en Los Ángeles.'},
        {id: 46, title: 'Avatar', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En el planeta Pandora, un ex-marine parapléjico se involucra en un conflicto entre humanos y la raza indígena Na\'vi.'},
        {id: 47, title: 'La La Land', genre: 'Musical', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Una actriz y un músico se enamoran mientras persiguen sus sueños en la ciudad de Los Ángeles, enfrentando desafíos y decisiones difíciles.'},
        {id: 48, title: 'Jurassic Park', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un grupo de personas se enfrenta a dinosaurios genéticamente recreados en un parque temático de la isla Nublar.'},
        {id: 49, title: 'Ciudadano Kane', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La vida del magnate de los medios Charles Foster Kane se examina a través de los recuerdos de aquellos que lo conocieron.'},
        {id: 50, title: 'El Resplandor', genre: 'Terror', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Una familia se muda a un hotel aislado, donde el padre enloquece debido a fuerzas sobrenaturales mientras cuida del lugar durante el invierno.'},
        {id: 51, title: 'El Silencio de los Corderos', genre: 'Thriller', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Una agente del FBI busca la ayuda de un brillante pero perturbador psiquiatra para atrapar a un asesino en serie conocido como Buffalo Bill.'},
        {id: 52, title: 'Taxi Driver', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Travis Bickle, un veterano de Vietnam alienado, se convierte en taxista nocturno en Nueva York y se sumerge en la violencia urbana.'},
        {id: 53, title: 'El Mago de Oz', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Dorothy es transportada a la tierra mágica de Oz, donde emprende un viaje para encontrar al Mago de Oz y regresar a casa.'},
        {id: 54, title: '12 Monos', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En un futuro postapocalíptico, un prisionero es enviado al pasado para recolectar información sobre un virus mortal que ha diezmado a la humanidad.'},
        {id: 55, title: 'Los Infiltrados', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un infiltrado de la policía y un infiltrado de la mafia intentan descubrir la identidad del otro mientras se infiltran en sus respectivas organizaciones.'},
        {id: 56, title: 'El Show de Truman', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Truman Burbank descubre que su vida entera ha sido un reality show y decide escapar de la artificialidad de su existencia.'},
        {id: 57, title: 'Volver al Futuro II', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Marty McFly viaja al futuro para salvar a sus hijos, pero sus acciones tienen consecuencias inesperadas en el presente.'},
        {id: 58, title: 'La Naranja Mecánica', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En un futuro distópico, un joven delincuente es sometido a un tratamiento de reacondicionamiento conductual que lo enfrenta a la violencia y la autoridad.'},
        {id: 59, title: 'El Rey Arturo', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La leyenda del rey Arturo y los Caballeros de la Mesa Redonda, centrada en la búsqueda del Santo Grial.'},
        {id: 60, title: 'La Sirenita', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Ariel, una sirena, sueña con vivir en la superficie y se enamora de un príncipe humano, haciendo un trato con la malvada Ursula para lograr su deseo.'},
        {id: 61, title: 'Braveheart', genre: 'Bélica', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'William Wallace lidera una revuelta escocesa contra el dominio inglés en busca de la libertad y la independencia.'},
        {id: 62, title: 'Gladiator', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un general romano traicionado busca venganza como gladiador en el Coliseo de Roma.'},
        {id: 63, title: 'El Hombre Araña', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Peter Parker adquiere poderes de araña y asume la responsabilidad de luchar contra el crimen como el Hombre Araña.'},
        {id: 64, title: 'La Vida es Bella', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un padre intenta proteger a su hijo del horror del Holocausto al hacerle creer que están participando en un juego.'},
        {id: 65, title: 'La Cosa', genre: 'Terror', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un grupo de científicos en la Antártida se enfrenta a una forma de vida alienígena que puede imitar y absorber a cualquier ser viviente.'},
        {id: 66, title: 'Parque Jurásico', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un parque temático de dinosaurios se vuelve peligroso cuando los reptiles escapan y amenazan a los visitantes.'},
        {id: 67, title: 'El Paciente Inglés', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un hombre gravemente quemado en un accidente de avión reflexiona sobre su vida y amores mientras es atendido por una enfermera en un monasterio italiano.'},
        {id: 68, title: 'La Caza del Octubre Rojo', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un submarino soviético de última generación, comandado por un capitán disidente, se dirige hacia los Estados Unidos, lo que desencadena una crisis internacional.'},
        {id: 69, title: 'La Historia Sin Fin', genre: 'Aventura', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un niño lee un libro que narra la historia de un niño héroe, Atreyu, mientras enfrenta un mundo mágico en peligro.'},
        {id: 70, title: 'E.T. el Extraterrestre', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un niño encuentra y ayuda a un amigable extraterrestre a regresar a su hogar mientras evade a las autoridades.'},
        {id: 71, title: 'Tiburón', genre: 'Suspense', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un tiburón asesino aterroriza a un pequeño pueblo turístico, y un grupo de cazadores se embarca en una misión para eliminar la amenaza.'},
        {id: 72, title: 'El Caballero de la Noche', genre: 'Acción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Batman se enfrenta al Joker, un criminal anárquico que amenaza con sumir a Gotham City en el caos.'},
        {id: 73, title: 'Los Cazafantasmas', genre: 'Comedia', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un grupo de parapsicólogos se convierte en cazadores de fantasmas en Nueva York, enfrentándose a una creciente amenaza paranormal.'},
        {id: 74, title: 'El Protegido', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un hombre descubre que posee habilidades sobrehumanas y busca su propósito en la vida con la ayuda de un misterioso mentor.'},
        {id: 75, title: 'La Guerra de las Galaxias: El Imperio Contraataca', genre: 'Ciencia ficción', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'La Rebelión lucha contra el Imperio mientras Luke Skywalker busca entrenamiento Jedi con Yoda y enfrenta oscuros secretos familiares.'},
        {id: 76, title: 'El Rey León 2: El Tesoro de Simba', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Simba, el hijo de Mufasa, debe enfrentarse a su pasado y reclamar su lugar como el legítimo rey de la Sabana.'},
        {id: 77, title: 'Spider-Man: Un Nuevo Universo', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Miles Morales descubre sus poderes de Spider-Man y se une a otros Spider-Hombres de diferentes dimensiones para detener una amenaza interdimensional.'},
        {id: 78, title: 'El Gran Gatsby', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Jay Gatsby, un enigmático millonario, busca recuperar a su amor perdido mientras la alta sociedad neoyorquina se envuelve en el lujo y la decadencia durante la década de 1920.'},
        {id: 79, title: 'Pulp Fiction', genre: 'Crimen', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Varias historias interconectadas exploran el mundo del crimen en Los Ángeles, con personajes inolvidables y situaciones surrealistas.'},
        {id: 80, title: 'El Club de la Pelea', genre: 'Drama', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un hombre desencantado forma un club clandestino donde los hombres pueden liberar su frustración a través de peleas físicas, desencadenando una serie de eventos inesperados.'},
        {id: 81, title: 'La Forma del Agua', genre: 'Fantasía', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'En la década de 1960, una mujer muda trabaja en un laboratorio gubernamental y desarrolla una conexión única con una criatura acuática cautiva.'},
        {id: 82, title: 'En Busca del Valle Encantado', genre: 'Animación', imageUrl: '/proyecto-react-peliculas/images/oppenheimer.jpeg', synopsis: 'Un grupo de dinosaurios jóvenes emprende un viaje para encontrar un valle seguro y próspero, enfrentándose a desafíos y forjando amistades en el camino.'},
      ];

      setMovies(initialMovies);
    }
  }, [movies, setMovies]);

  const handleSearch = (searchTerm) => {
    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setVisibleMovies(10); // Reiniciar el número de películas visibles al hacer una nueva búsqueda
  };

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
  };

  const isBottom = (element) => {
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = () => {
    const wrappedElement = containerRef.current;

    if (isBottom(wrappedElement)) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    const wrappedElement = containerRef.current;
    wrappedElement.addEventListener('scroll', trackScrolling);

    return () => {
      wrappedElement.removeEventListener('scroll', trackScrolling);
    };
  }, [trackScrolling]);

  return (
    <Container fluid className={styles.homecontainer}>
      <h1 className={`mb-4 ${styles.title}`}>Peliculas</h1>
      <div className={`mb-3 d-flex justify-content-center ${styles.searchbarcontainer}`}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div ref={containerRef} className={`d-flex justify-content-center ${styles.moviesContainer}`}>
        <Row className="justify-content-center">
          {(searchResults.length > 0 ? searchResults : movies.slice(0, visibleMovies)).map((movie) => (
            <Col key={movie.id} xs={6} sm={4} md={3} lg={2} xl={2} className={`mb-4 ${styles.movieCard}`}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
      {visibleMovies < (searchResults.length > 0 ? searchResults.length : movies.length) && (
        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" onClick={handleLoadMore}>
            Cargar más películas
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Home;
