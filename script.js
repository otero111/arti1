
// --- Datos del Quiz (Añadir propiedad 'module') ---
const questions = [
    // Módulo 1
    { module: 1, question: "¿Cuál es la crítica central que el Módulo 1 plantea sobre la idea del individuo?", answer: "El Módulo 1 critica la concepción del individuo como una realidad en sí misma, naturalmente independiente, señalando que es un producto histórico y social." },
    { module: 1, question: "¿Qué dualismo fundamental cuestiona el Módulo 1?", answer: "El Módulo 1 cuestiona el dualismo individuo-sociedad, argumentando que esta división es una construcción arbitraria." },
    { module: 1, question: "¿Qué se entiende por \"psicologismo\" según el Módulo 1?", answer: "El psicologismo es una forma de pensamiento que tiende a reducir los conceptos sociales a conceptos individuales, favoreciendo una idea abstracta del individuo." },
    { module: 1, question: "¿Qué se entiende por \"sociologismo\" según el Módulo 1?", answer: "El sociologismo es una forma de pensamiento que tiende a reducir los conceptos individuales a una idea globalizada de la historia y sociedad, favoreciendo una idea abstracta de la sociedad." },
    { module: 1, question: "¿En qué dos \"espacios\" principales se ha desplegado la preocupación por la relación individuo-sociedad en la Modernidad?", answer: "En el espacio científico-académico (psicología, pedagogía, sociología) y en el espacio ético-político." },
    { module: 1, question: "¿Cómo se abordaron inicialmente los problemas grupales en el campo de la psicología?", answer: "Inicialmente, los problemas grupales se intentaron comprender mediante el traslado de conceptos de la psicología \"individual\" de la época." },
    { module: 1, question: "¿Qué debate surgió en los primeros intentos por comprender la problemática grupal en psicología?", answer: "Surgió un debate entre la tesis individualista y la tesis de la mentalidad de grupo." },
    { module: 1, question: "¿Qué diferencia se señala entre las sociedades premodernas y modernas en relación con el conocimiento técnico y profano?", answer: "En las sociedades premodernas, los individuos tenían mayor posibilidad de vivir en función de su conocimiento local. En las modernas, la especialización del conocimiento técnico por parte de expertos contribuye al carácter errático de la modernidad." },
    { module: 1, question: "Según Marx, ¿cuál es el punto de partida para el análisis crítico de la economía política?", answer: "Según Marx, el punto de partida es la producción material, y los individuos producen en sociedad, no de forma aislada." },
    { module: 1, question: "¿Qué critica Marx sobre la separación entre producción, consumo, distribución y cambio?", answer: "Marx critica esta separación, resaltando que la producción material es el punto de partida." },
    { module: 1, question: "¿Cómo concibe Giddens la identidad del yo en la modernidad?", answer: "Giddens concibe la identidad del yo como una trayectoria a través de los marcos institucionales de la modernidad." },
    { module: 1, question: "¿Qué caracteriza a la modernidad como un orden social según Giddens?", answer: "La modernidad es un orden postradicional donde las decisiones sobre cómo vivir se toman diariamente." },
    { module: 1, question: "¿Qué sentimiento puede experimentar el individuo en la modernidad según Giddens?", answer: "El individuo puede experimentar un sentimiento de despojo al romperse las pequeñas comunidades y tradiciones." },
    { module: 1, question: "¿Qué se propone con una \"elucidación crítica\" del campo grupal según Ana María Fernández?", answer: "Se propone una labor propositiva y exploratoria para deshacer lo hecho y entender su composición, con una actividad de-constructiva central." },
    { module: 1, question: "¿Cuál es la diferencia fundamental entre \"los grupos\" y \"lo grupal\" según Ana María Fernández?", answer: "Los grupos son entidades concretas, mientras que \"lo grupal\" se refiere a un campo de problemáticas que conforman las subjetividades sin reducirlas a las formaciones grupales." },
    { module: 1, question: "¿Qué doble camino se propone para el estudio del campo grupal según Ana María Fernández?", answer: "Se propone un doble camino de deconstrucción y re-construcción de teorías y prácticas." },
    { module: 1, question: "¿Qué crítica se hace a la lectura del \"texto-verdad\" en el ámbito \"psi\" según Ana María Fernández?", answer: "Se critica que esta lectura lleva a la dogmatización del cuerpo teórico y a la ilusión de un discurso de autoridad." },
    { module: 1, question: "¿Qué se enfatiza como método para mantener la vigencia de las teorías en el campo grupal según Ana María Fernández?", answer: "Se enfatiza el contrapunto y la interrogación como método." },
    { module: 1, question: "¿Qué se busca diluir en las formaciones grupales según Ana María Fernández?", answer: "Se busca diluir el fantasma que confunde las acciones en grupo dispersivas con las experiencias grupales orientadas por una concepción analítica." },
    { module: 1, question: "¿Qué se señala sobre la \"naturalización\" de nociones y conceptos según De Brasi?", answer: "Se señala que las decisiones y descripciones tienden a \"naturalizarse,\" olvidando su carácter histórico y presentándose como siempre existentes, lo que genera dogmatismo." },
    { module: 1, question: "¿Cómo se analiza la división \"adentro/afuera\" (subjetivo/objetivo) según De Brasi?", answer: "Se analiza como una barrera artificialmente instalada que permite la creencia en el individuo como entidad indivisa y se considera un principio universal incuestionable." },
    { module: 1, question: "Según Raggio, ¿qué efecto paradojal tiene el Contrato Social de Rousseau?", answer: "Al presuponer una libertad innata y concebir a los sujetos como independientes, legitima esa misma independencia que busca regular colectivamente." },
    { module: 1, question: "¿Qué dos tipos de mecanismos de desenclave distingue Giddens?", answer: "Las 'señales simbólicas' (como el dinero) y los 'sistemas expertos'." },
    { module: 1, question: "Para Giddens, ¿qué papel juega la confianza en los 'sistemas expertos'?", answer: "Es fundamental, ya que debemos confiar en conocimientos técnicos que no poseemos para tomar decisiones diarias." },
    { module: 1, question: "¿Qué significa la 'reflexividad' en la modernidad según Giddens?", answer: "Que las prácticas sociales se examinan y reforman constantemente a la luz de nueva información sobre esas mismas prácticas, alterando su carácter." },
    { module: 1, question: "¿Cuál es la crítica de Marx al concepto de 'producción en general'?", answer: "Critica que es una abstracción que oculta las diferencias esenciales entre los modos de producción históricos concretos." },
    { module: 1, question: "Para Ana María Fernández, ¿por qué es una 'ficción' pensar el grupo como intencionalidad (con deseos o sentimientos)?", answer: "Porque atribuye al grupo características psicológicas propias del individuo (antropomorfismo), ocultando la complejidad de las fuerzas sociales y subjetivas que lo atraviesan." },
    { module: 1, question: "¿Qué implica la 'separación tiempo y espacio' como característica de la modernidad según Giddens?", answer: "La estandarización del tiempo (reloj) y el espacio (mapas), permitiendo coordinar actividades sin necesidad de co-presencia física y facilitando los sistemas abstractos." },

    // Módulo 2
    { module: 2, question: "¿Qué implica la \"memoria de la voluntad\" según Nietzsche?", answer: "Implica una capacidad activa de inhibición del olvido para mantener la continuidad de una voluntad original, necesaria para poder prometer." },
    { module: 2, question: "¿Cuál es la \"tercera afrenta\" al narcisismo humano según Freud?", answer: "La afrenta psicológica, demostrada por el psicoanálisis, que revela que el yo no es soberano en su propia alma y que una parte de la vida anímica puede sustraerse al conocimiento y voluntad del individuo." },
    { module: 2, question: "¿Cómo relaciona Freud la psicología individual y la psicología social?", answer: "Freud argumenta que la oposición entre psicología individual y social pierde nitidez al considerar que los vínculos del individuo con otros (padres, hermanos, objeto de amor, etc.) son fenómenos sociales que caen dentro del campo de la psicología individual." },
    { module: 2, question: "¿Qué estudia la psicología de las masas según Freud?", answer: "Estudia la influencia simultánea ejercida sobre el individuo por un gran número de personas con quienes está ligado por algo, aunque en muchos aspectos puedan serle ajenas." },
    { module: 2, question: "¿Qué relación establece Foucault entre saber y poder?", answer: "Foucault establece que saber y poder están intrínsecamente relacionados, y el saber del hombre nace de las prácticas sociales de control y vigilancia." },
    { module: 2, question: "¿Cómo se forma un nuevo tipo de sujeto de conocimiento según Foucault?", answer: "Un nuevo tipo de sujeto de conocimiento nace de las prácticas sociales de control y vigilancia, no se le impone un saber preexistente." },
    { module: 2, question: "¿Cuáles son los tres temas de investigación que propone Foucault?", answer: "La investigación histórica del conocimiento, el análisis de los discursos, y la reelaboración de la teoría del sujeto." },
    { module: 2, question: "¿Qué se entiende por \"discurso\" según Foucault?", answer: "El discurso es un conjunto regular de hechos lingüísticos en un determinado nivel, y polémico y estratégico en otro." },
    { module: 2, question: "¿Qué crítica hace Foucault a la noción tradicional del sujeto?", answer: "Foucault critica la prioridad conferida al sujeto como centro del conocimiento, proponiendo que el sujeto es una construcción histórica y social." },
    { module: 2, question: "¿Cuáles son las dos historias de la verdad que menciona Foucault?", answer: "Una historia interna de la verdad que se corrige por sus propios principios, y una historia externa donde la verdad se forma en la sociedad a partir de reglas de juego que definen subjetividades y saberes." },
    { module: 2, question: "¿Cuál es el origen de la \"indagación\" como forma de verdad según Foucault?", answer: "La indagación apareció en la Edad Media como una práctica política y administrativa para investigar la verdad dentro del orden jurídico." },
    { module: 2, question: "¿Qué formas de análisis surgieron en el siglo XIX a partir de problemas jurídicos y penales según Foucault?", answer: "Surgieron formas de análisis llamadas \"examen\", que dieron origen a la sociología, la psicología, la psicopatología, la criminología y el psicoanálisis." },
    { module: 2, question: "¿Cómo considera Foucault las condiciones políticas y económicas de existencia en relación con el sujeto de conocimiento?", answer: "Foucault considera que no son un velo o un obstáculo, sino aquello a través de lo cual se forman los sujetos de conocimiento y las relaciones de verdad." },
    { module: 2, question: "¿A qué se refiere Freud con la \"dificultad afectiva\" del psicoanálisis?", answer: "Se refiere a algo que hace que el psicoanálisis se enajene los sentimientos del receptor, disuadiéndolo de prestarle interés o creencia, más allá de dificultades intelectuales." },
    { module: 2, question: "¿Qué concepción popular de las pulsiones menciona Freud?", answer: "La concepción popular divide entre hambre y amor como pulsiones de autoconservación y reproducción respectivamente." },
    { module: 2, question: "¿Qué dos tipos de pulsiones distingue el psicoanálisis según Freud?", answer: "Las pulsiones de autoconservación o yoicas y las pulsiones sexuales." },
    { module: 2, question: "¿Qué es la \"libido\" según el psicoanálisis?", answer: "La libido es la fuerza con que la pulsión sexual emerge en la vida anímica." },
    { module: 2, question: "¿Cuál es la relación entre pulsiones sexuales y neurosis según Freud?", answer: "Para entender las neurosis, las pulsiones sexuales son de mayor valor, y las neurosis pueden considerarse enfermedades específicas de la pulsión sexual." },
    { module: 2, question: "¿Qué ocurre cuando el yo se defiende de las pulsiones sexuales según Freud?", answer: "El yo deniega la satisfacción deseada a las pulsiones sexuales y las constriñe a rodeos de una satisfacción sustitutiva, que se manifiestan como síntomas neuróticos." },
    { module: 2, question: "¿Qué papel juega el olvido en la construcción de la sociedad según Nietzsche?", answer: "El olvido no es una mera inercia, sino una facultad activa de inhibición que, junto con la moralidad de la costumbre y la sociedad, contribuye a hacer al hombre calculable." },
    { module: 2, question: "¿Qué significa la \"mnemotecnia del dolor\" para Nietzsche?", answer: "Es el uso del dolor como herramienta para grabar promesas y obligaciones en la memoria del ser humano." },
    { module: 2, question: "¿Cómo se define la subjetividad según Eira y Romano?", answer: "La subjetividad podría ser pensada como un proceso que otorga aquellas condiciones que le permitieran constituirse en tanto tal, una formación en lugar de una sustancia." },
    { module: 2, question: "¿Cuáles son las tres modalidades de subjetivación/objetivación identificadas en la obra de Foucault según Eira y Romano?", answer: "La objetivación en las ciencias, las prácticas de división, y la subjetivación del animal humano (reconocimiento como sujeto de sexualidad)." },
    { module: 2, question: "¿Cómo se relacionan los modos de subjetivación y objetivación según Eira y Romano?", answer: "Los modos de subjetivación y objetivación se desarrollan mutuamente, siendo el pensamiento el acto que instaura un sujeto y un objeto." },
    { module: 2, question: "¿Qué papel juegan las metáforas en el conocimiento según Eira y Romano, citando a Lizcano?", answer: "Los conceptos científicos nacen de metáforas latentes del imaginario social, y las relaciones discursivas se amalgaman con elementos no lingüísticos en juegos de significación que hacen posible las formaciones subjetivas." },
    { module: 2, question: "¿Cuál es el defecto fundamental del materialismo anterior según las Tesis sobre Feuerbach de Marx?", answer: "Concibe las cosas sólo bajo la forma de objeto o contemplación, pero no como actividad sensorial humana o práctica." },
    { module: 2, question: "¿Qué afirma Marx sobre la esencia humana en las Tesis sobre Feuerbach?", answer: "La esencia humana no es algo abstracto inherente a cada individuo, sino el conjunto de las relaciones sociales." },
    { module: 2, question: "¿Qué es la mala conciencia según Nietzsche?", answer: "Es la profunda enfermedad a la que el hombre sucumbe al encontrarse apresado en la sociedad y la paz, internalizando sus instintos de libertad contra sí mismo." },
    { module: 2, question: "¿Qué relación establece Nietzsche entre el castigo y el sentimiento de culpa?", answer: "El castigo, históricamente, no desarrolló el sentimiento de culpa, sino que lo refrenó, endureciendo y aumentando la resistencia." },
    { module: 2, question: "¿Cuál es el origen de la mala conciencia para Nietzsche?", answer: "Surge de la interiorización forzada del instinto de libertad cuando el hombre es confinado por la sociedad ('Estado')." },
    { module: 2, question: "¿Qué es el ideal ascético para Nietzsche?", answer: "Es una expresión de la voluntad de poder enferma que interpreta el sufrimiento dándole un sentido (culpa), volviéndose contra la vida misma." },
    { module: 2, question: "En 'La verdad y las formas jurídicas', ¿qué relación establece Foucault entre las prácticas judiciales y la verdad?", answer: "Las prácticas judiciales (como la indagación o el examen) no solo aplican leyes, sino que producen formas específicas de verdad y tipos de sujetos." },
    { module: 2, question: "Según Marx en 'Tesis sobre Feuerbach', ¿cuál es el principal defecto del materialismo anterior?", answer: "Que concibe la realidad solo como objeto de contemplación y no como actividad sensorial humana, como práctica transformadora." },
    { module: 2, question: "¿Qué significa para Nietzsche que el olvido sea una 'facultad activa de inhibición'?", answer: "Que no es simple pasividad o pérdida, sino una fuerza activa necesaria para la salud psíquica y para poder 'cerrar puertas' y vivir el presente." },
    { module: 2, question: "Según Nietzsche ('Genealogía de la Moral'), ¿cuál es el origen de la relación contractual entre acreedor y deudor?", answer: "Arraiga en las formas fundamentales de la compra, la venta, el intercambio y el comercio, estableciendo una equivalencia entre perjuicio y dolor/pago." },
    { module: 2, question: "Según Freud ('Psicología de las masas'), ¿qué une a los individuos en una masa psicológica?", answer: "Lazos libidinales, tanto con el líder como entre los miembros, lo que modifica el comportamiento individual." },

    // Módulo 3
    { module: 3, question: "¿Qué se entiende por \"modo de semiotización\" según De Brasi?", answer: "Es una noción introducida para entender cómo se establecen las divisiones espacio/temporales que subyacen al dualismo individuo-sociedad (inferido de la crítica al dualismo)." },
    { module: 3, question: "¿Cómo describe Berardi (Bifo) el trabajo digital en términos de uniformidad y diferenciación?", answer: "Se ha vuelto uniforme físicamente (teclear frente a una pantalla) pero muy diferenciado y especializado en cuanto a los contenidos elaborados." },
    { module: 3, question: "¿Qué diferencia señala Berardi (Bifo) entre la percepción del trabajo del obrero industrial y el trabajador 'high tech'?", answer: "El obrero industrial veía el trabajo como muerte temporal; el trabajador high tech tiende a verlo como la parte más esencial y personalizada de su vida." },
    { module: 3, question: "¿Cómo relaciona Berardi (Bifo) la expansión de la esfera económica con la esfera erótica?", answer: "La expansión de la esfera económica (más tiempo para adquirir medios de consumo) coincide con una reducción de la esfera erótica (menos tiempo para gozar)." },
    { module: 3, question: "¿Qué es el 'infotrabajo' o trabajo cognitivo según Berardi (Bifo)?", answer: "Es trabajo de comunicación o comunicación puesta a trabajar, coordinando fragmentos en un flujo de información." },
    { module: 3, question: "¿Qué es la flexibilidad laboral según Berardi (Bifo) y cuál fue su origen?", answer: "Es la desestructuración del salario fijo y el trabajo dependiente. Originalmente fue una conquista de libertad de los obreros (trabajar temporalmente), luego se convirtió en una herramienta del capital." },
    { module: 3, question: "¿Qué síndromes relaciona Berardi (Bifo) con la sociedad competitiva y la sobrecarga informativa?", answer: "El pánico (sentirse desbordado por estímulos) y la depresión (desinversión de energía narcisista tras un fracaso o sobrecarga)." },
    { module: 3, question: "¿Qué critica Ema Lopez sobre el capitalismo contemporáneo en relación a la subjetividad?", answer: "Critica que el capitalismo no es solo un sistema económico, sino un modo de subjetivación que nos hace cómplices de lo que nos oprime." },
    { module: 3, question: "¿Cómo relaciona Ema Lopez la plusvalía de Marx con el 'plus-de-gozar' de Lacan?", answer: "Ambos funcionan como un motor (apetito insaciable) basado en un desequilibrio constante entre pérdida y ganancia, impulsando la repetición." },
    { module: 3, question: "¿Qué tipo de vínculo propone el capitalismo según Ema Lopez?", answer: "Propone un no-vínculo social, una mera conexión basada en el individualismo y la promesa de completud a través de objetos, lo que lleva al aislamiento." },
    { module: 3, question: "¿Qué critica Ema Lopez de la noción de 'autonomía' y 'libertad de elección' en el capitalismo contemporáneo?", answer: "Critica que pueden ser un fetiche, una forma de autoengaño donde se elige dentro de opciones dadas por el sistema, reforzando la sumisión consentida." },
    { module: 3, question: "¿Cuándo se da la libertad real según Ema Lopez?", answer: "Cuando la práctica rompe con las condiciones de lo elegible, supone una excepción a lo dado y crea algo nuevo, no previsto." },
    { module: 3, question: "¿Qué son las 'tecnologías del yo' según Foucault, citado por Papalini?", answer: "Son procedimientos que los individuos aplican sobre sí mismos para transformarse y alcanzar cierto estado (felicidad, pureza, sabiduría, etc.)." },
    { module: 3, question: "¿Qué función cumple la 'cultura terapéutica' (incluyendo libros de autoayuda) según Papalini?", answer: "Funciona como una tecnología del yo al servicio de la gubernamentalidad neoliberal, fomentando la adaptabilidad, la autogestión y la psicologización de problemas sociales." },
    { module: 3, question: "¿Qué es el 'neoprudencialismo' mencionado por Papalini?", answer: "Es una modulación de la gubernamentalidad donde el sujeto se autorregula y autoprovee, desplazando funciones públicas a acciones privadas y enfatizando la responsabilidad individual." },
    { module: 3, question: "¿Qué es la 'refracción' en el contexto de las tecnologías del yo, según Papalini?", answer: "Es la interiorización modificada de las condiciones objetivas, donde el sujeto 'escapa' parcialmente a la gubernamentalidad creando nuevas dinámicas." },
    { module: 3, question: "¿Cómo definen Ramírez y Anzaldúa la subjetividad?", answer: "Como el proceso donde el sujeto se constituye y modela a sí mismo en el entramado de la psique-soma y lo histórico-social; es un devenir." },
    { module: 3, question: "¿Qué dos operaciones constituyen lo imaginario social según Castoriadis (citado por Ramírez/Anzaldúa)?", answer: "Legein (instituir formas de decir-pensar) y Teukhein (instituir modos de hacer-construir)." },
    { module: 3, question: "¿Qué dos procesos simultáneos componen la socialización según Ramírez y Anzaldúa?", answer: "Integración (incorporarse a instituciones) y Regulación (asumir formas que contienen las prácticas)." },
    { module: 3, question: "¿Qué impacto tiene el 'imperio de la imagen' en la era digital según Ramírez y Anzaldúa?", answer: "Genera una memoria digital descontextualizada, confusión, indiferencia, alienación en la imagen y dificultad en la abstracción." },
    { module: 3, question: "¿Qué características tienen las generaciones 'post-alfabéticas' o 'multimedia' según Ramírez y Anzaldúa?", answer: "Socializadas por pantallas, con atención flotante y fugaz, dificultad para la concentración y la reflexión crítica, y problemas de simbolización." },
    { module: 3, question: "¿Qué paradoja presenta la comunicación digital según Ramírez y Anzaldúa?", answer: "Crea la ficción de intercomunicación y pertenencia, pero puede generar soledad 'acompañada' y vacío al espectacularizar la intimidad." },
    { module: 3, question: "¿Qué es el teletrabajo según la OIT (citado por Roncal)?", answer: "Una forma de organización donde el trabajo se realiza fuera del establecimiento principal del empleador, facilitado por nuevas tecnologías." },
    { module: 3, question: "¿Qué es el 'Capitalismo de Vigilancia' según Zuboff (citado por Roncal)?", answer: "Un nuevo orden económico que utiliza datos del comportamiento humano (plusvalor de comportamiento) como materia prima para prácticas comerciales de predicción y control." },
    { module: 3, question: "¿Qué peligros representa el teletrabajo en el contexto del capitalismo de vigilancia según Roncal?", answer: "Invisibiliza el trabajo colectivo, refuerza el individualismo, agudiza el abuso laboral (sobreexplotación) y somete a los sujetos a control y vigilancia constantes." },
    { module: 3, question: "¿Qué tipo de herramientas utilizan las empresas para monitorear a los teletrabajadores (ejemplos de Roncal)?", answer: "Software como DeskTime o Kickidler que rastrean tiempo, actividad en aplicaciones, capturan pantallas, registran teclas, etc." },
    { module: 3, question: "Para Ema López, ¿por qué el sujeto se vuelve 'cómplice' del capitalismo?", answer: "Porque la estructura afectivo-deseante del sujeto (el 'plus-de-gozar') se acopla bien con la lógica capitalista de insatisfacción constante y búsqueda de completud en el consumo." },
    { module: 3, question: "¿Qué critica Papalini de la 'cultura terapéutica' en relación a la gubernamentalidad?", answer: "Que, aunque puede ofrecer alivio, principalmente sirve para adaptar al sujeto a las exigencias neoliberales (autogestión, responsabilidad individual) y psicologizar problemas estructurales." },
    { module: 3, question: "Según Berardi (Bifo), ¿cómo afecta la digitalización a la percepción del tiempo de trabajo?", answer: "Lo vuelve difuso e impreciso, tendiendo a invadir toda la vida ('el trabajo abstracto'), a diferencia del tiempo delimitado de la fábrica industrial." },
];


// --- Variables Globales ---
let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = []; // Array para las preguntas del módulo seleccionado
let selectedModule = null; // Para saber qué módulo se está estudiando
let questionRepetition = false; // Flag para saber si se está repitiendo la pregunta

// --- Referencias a Elementos del DOM ---
const moduleSelectionScreen = document.getElementById('module-selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const moduleButtons = document.querySelectorAll('.module-button');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackIndicator = document.getElementById('feedback-indicator');
const feedbackTextElement = document.getElementById('feedback-text');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('current-score');
const questionNumberElement = document.getElementById('question-number');
const totalQuestionsElement = document.getElementById('total-questions');
const finalScoreElement = document.getElementById('final-score');
const totalScoreElement = document.getElementById('total-score');
const restartQuizButton = document.getElementById('restart-quiz-button');
const restartAllButton = document.getElementById('restart-all-button');
const backToSelectionButton = document.getElementById('back-to-selection');
const progressBar = document.getElementById('progress-bar');


// --- Funciones ---

/**
 * Muestra la pantalla especificada y oculta las demás.
 * @param {string} screenId - El ID de la pantalla a mostrar ('module-selection-screen', 'quiz-screen', 'results-screen').
 */
function showScreen(screenId) {
    moduleSelectionScreen.classList.remove('active-screen');
    quizScreen.classList.remove('active-screen');
    resultsScreen.classList.remove('active-screen');

    const screenToShow = document.getElementById(screenId);
    if (screenToShow) {
        screenToShow.classList.add('active-screen');
    }
}

/**
 * Baraja un array usando el algoritmo Fisher-Yates.
 * @param {Array} array - El array a barajar.
 * @returns {Array} - El array barajado.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Genera 3 opciones para la pregunta actual (1 correcta, 2 incorrectas).
 * @param {number} correctIndex - El índice de la pregunta actual en el array original 'questions'.
 * @returns {Array<string>} - Un array de 3 opciones barajadas.
 */
function generateOptions(correctIndex) {
    const correctAnswer = questions[correctIndex].answer;
    const options = [correctAnswer];
    const incorrectAnswersPool = [];

    // Recolecta todas las respuestas EXCEPTO la correcta
    questions.forEach((q, index) => {
        if (index !== correctIndex) {
            incorrectAnswersPool.push(q.answer);
        }
    });

    // Baraja las incorrectas
    const shuffledIncorrect = shuffleArray(incorrectAnswersPool);

    // Añade 2 respuestas incorrectas únicas
    let count = 0;
    while (options.length < 3 && count < shuffledIncorrect.length) {
         // Asegura que la incorrecta no sea igual a la correcta y no esté ya añadida
        if (shuffledIncorrect[count] !== correctAnswer && !options.includes(shuffledIncorrect[count])) {
            options.push(shuffledIncorrect[count]);
        }
        count++;
    }

     // Si después de revisar todas las incorrectas aún faltan opciones (muy raro con >3 preguntas)
     // Añade placeholders únicos para completar hasta 3.
    while (options.length < 3) {
         options.push(`Opción inválida ${options.length + Math.random().toString(36).substring(7)}`);
    }


    return shuffleArray(options); // Devuelve las 3 opciones barajadas
}


/**
 * Carga la pregunta actual y sus opciones en la interfaz.
 */
function loadQuestion() {
    questionRepetition = false; // Resetea el flag de repetición
    feedbackIndicator.className = 'feedback-indicator'; // Limpia feedback visual
    feedbackTextElement.textContent = ''; // Limpia texto de feedback
    optionsContainer.innerHTML = ''; // Limpia opciones anteriores
    nextButton.disabled = true; // Deshabilita el botón siguiente

    // Verifica si hay preguntas disponibles
    if (!currentQuestions || currentQuestions.length === 0 || currentQuestionIndex >= currentQuestions.length) {
        console.error("No hay preguntas para cargar o índice fuera de rango.");
        showResults(); // Muestra resultados si no hay más preguntas
        return;
    }

    // Obtiene la pregunta actual del array filtrado y barajado
    const currentQuestionData = currentQuestions[currentQuestionIndex];
    // Encuentra el índice original para generar opciones correctamente
    const questionIndexInOriginalArray = questions.findIndex(q => q.question === currentQuestionData.question);

    if (questionIndexInOriginalArray === -1) {
        console.error("Error: No se encontró la pregunta actual en el array original.");
        showNextQuestion(); // Intenta saltar a la siguiente
        return;
    }

    // Muestra el texto de la pregunta y el número
    questionTextElement.textContent = currentQuestionData.question;
    questionNumberElement.textContent = currentQuestionIndex + 1;

    // Actualiza la barra de progreso
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Genera y muestra las 3 opciones como tarjetas
    const options = generateOptions(questionIndexInOriginalArray);
    options.forEach(optionText => {
        const card = document.createElement('button'); // Usar button para accesibilidad
        card.textContent = optionText;
        card.classList.add('option-card');
        card.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(card);
    });
}

/**
 * Maneja la selección de una respuesta por parte del usuario.
 * @param {Event} event - El evento de clic en una tarjeta de opción.
 */
function selectAnswer(event) {
    if (questionRepetition) return; // Evita doble clic mientras se muestra feedback de error

    const selectedButton = event.target;
    const selectedAnswer = selectedButton.textContent;

    // Verifica si hay una pregunta actual válida
     if (!currentQuestions[currentQuestionIndex]) {
        console.error("Error: Índice de pregunta actual inválido en selectAnswer.");
        return;
    }
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    // Deshabilita todas las opciones temporalmente
    const optionCards = optionsContainer.querySelectorAll('.option-card');
    optionCards.forEach(card => card.disabled = true);

    if (selectedAnswer === correctAnswer) {
        // --- Respuesta Correcta ---
        selectedButton.classList.add('correct');
        feedbackIndicator.className = 'feedback-indicator correct';
        feedbackTextElement.textContent = '¡Correcto!';
        score++; // Incrementa puntaje SOLO si es la primera vez que responde bien
        scoreElement.textContent = score;
        nextButton.disabled = false; // Habilita botón siguiente
        nextButton.focus(); // Pone foco en el botón siguiente
    } else {
        // --- Respuesta Incorrecta ---
        questionRepetition = true; // Marca que estamos en modo repetición
        selectedButton.classList.add('incorrect');
        feedbackIndicator.className = 'feedback-indicator incorrect';
        feedbackTextElement.textContent = 'Incorrecto. Intenta de nuevo.';

        // Espera un momento y vuelve a habilitar las opciones para reintentar LA MISMA pregunta
        setTimeout(() => {
            selectedButton.classList.remove('incorrect'); // Quita el rojo de la opción fallida
            feedbackIndicator.className = 'feedback-indicator'; // Limpia feedback visual
            feedbackTextElement.textContent = ''; // Limpia texto
            optionCards.forEach(card => card.disabled = false); // Rehabilita todas las opciones
            questionRepetition = false; // Sale del modo repetición
        }, 1500); // Espera 1.5 segundos antes de permitir reintentar
    }
}


/**
 * Avanza a la siguiente pregunta o muestra los resultados.
 */
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

/**
 * Muestra la pantalla de resultados finales.
 */
function showResults() {
    showScreen('results-screen');
    finalScoreElement.textContent = score;
    totalScoreElement.textContent = currentQuestions.length; // Usa la longitud del array filtrado
}

/**
 * Inicia el quiz con las preguntas del módulo seleccionado.
 * @param {string|number} module - El módulo seleccionado ('1', '2', '3', o 'all').
 */
function startQuiz(module) {
    selectedModule = module; // Guarda el módulo seleccionado
    // Filtra las preguntas según el módulo
    if (module === 'all') {
        currentQuestions = [...questions]; // Copia todas las preguntas
    } else {
        const moduleNumber = parseInt(module);
        currentQuestions = questions.filter(q => q.module === moduleNumber);
    }

    // Verifica si hay preguntas para el módulo seleccionado
    if (currentQuestions.length === 0) {
        alert(`No hay preguntas disponibles para el Módulo ${module}. Por favor, elige otro.`);
        showScreen('module-selection-screen');
        return;
    }


    // Resetea estado y baraja las preguntas seleccionadas
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = shuffleArray(currentQuestions); // Baraja solo las filtradas
    currentQuestions = shuffledQuestions; // Usa el array barajado

    // Configura UI del quiz
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = currentQuestions.length;
    progressBar.style.width = '0%';

    showScreen('quiz-screen'); // Muestra la pantalla del quiz
    loadQuestion(); // Carga la primera pregunta
}

// --- Event Listeners ---

// Listeners para los botones de selección de módulo
moduleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selected = button.getAttribute('data-module');
        startQuiz(selected);
    });
});

// Listener para el botón "Siguiente Pregunta"
nextButton.addEventListener('click', showNextQuestion);

// Listener para el botón "Estudiar Mismo Módulo" en resultados
restartQuizButton.addEventListener('click', () => {
    if (selectedModule) {
        startQuiz(selectedModule); // Reinicia con el último módulo seleccionado
    } else {
        showScreen('module-selection-screen'); // Si no hay módulo guardado, vuelve a selección
    }
});

// Listener para el botón "Elegir Otro Módulo" en resultados
restartAllButton.addEventListener('click', () => {
    showScreen('module-selection-screen'); // Vuelve a la pantalla de selección
});

// Listener para el botón "Elegir Módulo" dentro del quiz
backToSelectionButton.addEventListener('click', () => {
     // Pregunta confirmación antes de salir
    if (confirm('¿Seguro que quieres volver a la selección de módulos? Perderás el progreso actual.')) {
        showScreen('module-selection-screen');
    }
});

// Mostrar la pantalla de selección al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showScreen('module-selection-screen');
});
