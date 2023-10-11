import { pickRandomItems } from "./arrays";

export type Quiz = {
  id?: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const Z_QUESTIONS_POLARITY = [
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Tauro", "Cáncer", "Libra", "Virgo"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Géminis", "Tauro", "Géminis", "Leo"],
    correctAnswer: "Tauro",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Piscis", "Capricornio", "Acuario", "Virgo"],
    correctAnswer: "Capricornio",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Leo", "Aries", "Escorpio", "Cáncer"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Tauro", "Géminis", "Libra", "Sagitario"],
    correctAnswer: "Sagitario",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Piscis", "Virgo", "Acuario", "Escorpio"],
    correctAnswer: "Acuario",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Aries", "Leo", "Cáncer", "Capricornio"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Géminis", "Tauro", "Sagitario", "Virgo"],
    correctAnswer: "Virgo",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Piscis", "Escorpio", "Libra", "Acuario"],
    correctAnswer: "Acuario",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Géminis", "Leo", "Tauro", "Sagitario"],
    correctAnswer: "Géminis",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Aries", "Leo", "Sagitario", "Escorpio"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad masculina?",
    options: ["Tauro", "Cáncer", "Piscis", "Capricornio"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Libra", "Géminis", "Virgo", "Acuario"],
    correctAnswer: "Virgo",
  },
  {
    question: "¿Cuál es el signo zodiacal con polaridad femenina?",
    options: ["Sagitario", "Aries", "Leo", "Piscis"],
    correctAnswer: "Sagitario",
  },
];

export const Z_QUESTIONS_ANIMAL = [
  {
    question: "¿Qué signo zodiacal está asociado con el animal del toro?",
    options: ["Géminis", "Virgo", "Tauro", "Cáncer"],
    correctAnswer: "Tauro",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del león?",
    options: ["Leo", "Capricornio", "Piscis", "Aries"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del pez?",
    options: ["Sagitario", "Escorpio", "Piscis", "Libra"],
    correctAnswer: "Piscis",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del cangrejo?",
    options: ["Cáncer", "Acuario", "Géminis", "Leo"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del escorpión?",
    options: ["Libra", "Aries", "Sagitario", "Escorpio"],
    correctAnswer: "Escorpio",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del caballo?",
    options: ["Aries", "Virgo", "Capricornio", "Sagitario"],
    correctAnswer: "Sagitario",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del pez?",
    options: ["Piscis", "Géminis", "Leo", "Cáncer"],
    correctAnswer: "Piscis",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del carnero?",
    options: ["Aries", "Tauro", "Escorpio", "Libra"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del gemelo?",
    options: ["Géminis", "Leo", "Virgo", "Cáncer"],
    correctAnswer: "Géminis",
  },
  {
    question: "¿Qué signo zodiacal está asociado con el animal del cabra?",
    options: ["Capricornio", "Sagitario", "Piscis", "Acuario"],
    correctAnswer: "Capricornio",
  },
];

export const Z_QUESTIONS_OPPOSITE = [
  {
    question: "¿Cuál es el signo opuesto a Aries?",
    options: ["Géminis", "Libra", "Cáncer", "Escorpio"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Cuál es el signo opuesto a Tauro?",
    options: ["Sagitario", "Virgo", "Escorpio", "Leo"],
    correctAnswer: "Escorpio",
  },
  {
    question: "¿Cuál es el signo opuesto a Géminis?",
    options: ["Leo", "Sagitario", "Piscis", "Aries"],
    correctAnswer: "Sagitario",
  },
  {
    question: "¿Cuál es el signo opuesto a Cáncer?",
    options: ["Capricornio", "Tauro", "Aries", "Escorpio"],
    correctAnswer: "Capricornio",
  },
  {
    question: "¿Cuál es el signo opuesto a Leo?",
    options: ["Aries", "Sagitario", "Géminis", "Libra"],
    correctAnswer: "Acuario",
  },
  {
    question: "¿Cuál es el signo opuesto a Virgo?",
    options: ["Piscis", "Cáncer", "Acuario", "Sagitario"],
    correctAnswer: "Piscis",
  },
  {
    question: "¿Cuál es el signo opuesto a Libra?",
    options: ["Aries", "Capricornio", "Tauro", "Leo"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Cuál es el signo opuesto a Escorpio?",
    options: ["Virgo", "Cáncer", "Géminis", "Aries"],
    correctAnswer: "Tauro",
  },
  {
    question: "¿Cuál es el signo opuesto a Sagitario?",
    options: ["Leo", "Capricornio", "Piscis", "Géminis"],
    correctAnswer: "Géminis",
  },
  {
    question: "¿Cuál es el signo opuesto a Capricornio?",
    options: ["Tauro", "Escorpio", "Cáncer", "Aries"],
    correctAnswer: "Cáncer",
  },
];

export const Z_QUESTIONS_REGENT = [
  {
    question: "¿Cuál es el regente de Capricornio?",
    options: ["Saturno", "Júpiter", "Marte", "Urano"],
    correctAnswer: "Saturno",
  },
  {
    question: "¿Cuál es el regente de Piscis?",
    options: ["Neptuno", "Plutón", "Venus", "Marte"],
    correctAnswer: "Neptuno",
  },
  {
    question: "¿Cuál es el regente de Aries?",
    options: ["Marte", "Venus", "Júpiter", "Urano"],
    correctAnswer: "Marte",
  },
  {
    question: "¿Cuál es el regente de Tauro?",
    options: ["Venus", "Mercurio", "Neptuno", "Plutón"],
    correctAnswer: "Venus",
  },
  {
    question: "¿Cuál es el regente de Géminis?",
    options: ["Mercurio", "Júpiter", "Marte", "Saturno"],
    correctAnswer: "Mercurio",
  },
  {
    question: "¿Cuál es el regente de Cáncer?",
    options: ["Luna", "Plutón", "Venus", "Urano"],
    correctAnswer: "Luna",
  },
  {
    question: "¿Cuál es el regente de Leo?",
    options: ["Sol", "Júpiter", "Marte", "Saturno"],
    correctAnswer: "Sol",
  },
  {
    question: "¿Cuál es el regente de Virgo?",
    options: ["Mercurio", "Venus", "Júpiter", "Neptuno"],
    correctAnswer: "Mercurio",
  },
  {
    question: "¿Cuál es el regente de Libra?",
    options: ["Venus", "Marte", "Saturno", "Urano"],
    correctAnswer: "Venus",
  },
  {
    question: "¿Cuál es el regente de Escorpio?",
    options: ["Plutón", "Neptuno", "Marte", "Júpiter"],
    correctAnswer: "Plutón",
  },
];

export const Z_QUESTIONS_BODY = [
  {
    question: "¿Qué signo zodiacal rige los riñones?",
    options: ["Leo", "Géminis", "Escorpio", "Aries"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Qué signo zodiacal rige los pulmones?",
    options: ["Cáncer", "Virgo", "Piscis", "Libra"],
    correctAnswer: "Virgo",
  },
  {
    question: "¿Qué signo zodiacal rige los ojos?",
    options: ["Tauro", "Acuario", "Leo", "Sagitario"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Qué signo zodiacal rige la piel?",
    options: ["Aries", "Cáncer", "Libra", "Capricornio"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Qué signo zodiacal rige los pies?",
    options: ["Piscis", "Géminis", "Sagitario", "Escorpio"],
    correctAnswer: "Piscis",
  },
  {
    question: "¿Qué signo zodiacal rige la garganta?",
    options: ["Capricornio", "Leo", "Virgo", "Tauro"],
    correctAnswer: "Tauro",
  },
  {
    question: "¿Qué signo zodiacal rige el estómago?",
    options: ["Cáncer", "Sagitario", "Aries", "Libra"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo zodiacal rige los brazos?",
    options: ["Escorpio", "Virgo", "Géminis", "Acuario"],
    correctAnswer: "Géminis",
  },
  {
    question: "¿Qué signo zodiacal rige el hígado?",
    options: ["Sagitario", "Leo", "Cáncer", "Aries"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Qué signo zodiacal rige el corazón?",
    options: ["Leo", "Libra", "Piscis", "Capricornio"],
    correctAnswer: "Leo",
  },
];

export const Z_QUESTIONS_GLYPHS = [
  {
    question: "¿Cuál es el glifo del signo Virgo?",
    options: ["♍", "♏", "♐", "♑"],
    correctAnswer: "♍",
  },
  {
    question: "¿Cuál es el glifo del signo Sagitario?",
    options: ["♍", "♏", "♐", "♑"],
    correctAnswer: "♐",
  },
  {
    question: "¿Cuál es el glifo del signo Piscis?",
    options: ["♓", "♒", "♐", "♍"],
    correctAnswer: "♓",
  },
  {
    question: "¿Cuál es el glifo del signo Aries?",
    options: ["♈", "♉", "♊", "♋"],
    correctAnswer: "♈",
  },
  {
    question: "¿Cuál es el glifo del signo Géminis?",
    options: ["♋", "♌", "♊", "♎"],
    correctAnswer: "♊",
  },
  {
    question: "¿Cuál es el glifo del signo Escorpio?",
    options: ["♏", "♐", "♑", "♒"],
    correctAnswer: "♏",
  },
  {
    question: "¿Cuál es el glifo del signo Capricornio?",
    options: ["♈", "♉", "♊", "♑"],
    correctAnswer: "♑",
  },
  {
    question: "¿Cuál es el glifo del signo Cáncer?",
    options: ["♌", "♍", "♎", "♋"],
    correctAnswer: "♋",
  },
  {
    question: "¿Cuál es el glifo del signo Leo?",
    options: ["♌", "♍", "♎", "♏"],
    correctAnswer: "♌",
  },
  {
    question: "¿Cuál es el glifo del signo Libra?",
    options: ["♎", "♑", "♒", "♓"],
    correctAnswer: "♎",
  },
];

export const Z_QUESTIONS_TEMPERAMENT = [
  {
    question: "¿Cuál es la cualidad del signo Leo?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Fijo",
  },
  {
    question: "¿Cuál es la cualidad del signo Géminis?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Mutable",
  },
  {
    question: "¿Cuál es la cualidad del signo Capricornio?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Cardinal",
  },
  {
    question: "¿Cuál es la cualidad del signo Acuario?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Fijo",
  },
  {
    question: "¿Cuál es la cualidad del signo Tauro?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Fijo",
  },
  {
    question: "¿Cuál es la cualidad del signo Virgo?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Mutable",
  },
  {
    question: "¿Cuál es la cualidad del signo Cáncer?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Cardinal",
  },
  {
    question: "¿Cuál es la cualidad del signo Piscis?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Mutable",
  },
  {
    question: "¿Cuál es la cualidad del signo Libra?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Cardinal",
  },
  {
    question: "¿Cuál es la cualidad del signo Escorpio?",
    options: ["Cardinal", "Fijo", "Mutable"],
    correctAnswer: "Fijo",
  },
];

const Z_QUESTIONS_SEASONS = [
  {
    question: "¿Qué signo zodiacal inicia la primavera en el hemisferio norte?",
    options: ["Aries", "Tauro", "Géminis", "Cáncer"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Qué signo zodiacal inicia el otoño en el hemisferio norte?",
    options: ["Libra", "Escorpio", "Sagitario", "Capricornio"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Qué signo zodiacal inicia el verano en el hemisferio norte?",
    options: ["Cáncer", "Leo", "Virgo", "Libra"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo zodiacal inicia el invierno en el hemisferio norte?",
    options: ["Capricornio", "Acuario", "Piscis", "Aries"],
    correctAnswer: "Capricornio",
  },
  {
    question: "¿Qué signo zodiacal inicia la primavera en el hemisferio sur?",
    options: ["Libra", "Escorpio", "Sagitario", "Capricornio"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Qué signo zodiacal inicia el otoño en el hemisferio sur?",
    options: ["Aries", "Tauro", "Géminis", "Cáncer"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Qué signo zodiacal inicia el verano en el hemisferio sur?",
    options: ["Cáncer", "Leo", "Virgo", "Libra"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo zodiacal inicia el invierno en el hemisferio sur?",
    options: ["Capricornio", "Acuario", "Piscis", "Aries"],
    correctAnswer: "Capricornio",
  },
  {
    question: "¿Qué signo zodiacal inicia el otoño en el hemisferio norte?",
    options: ["Libra", "Escorpio", "Sagitario", "Capricornio"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Qué signo zodiacal inicia la primavera en el hemisferio norte?",
    options: ["Aries", "Tauro", "Géminis", "Cáncer"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Qué signo zodiacal inicia el invierno en el hemisferio sur?",
    options: ["Cáncer", "Leo", "Virgo", "Libra"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo zodiacal inicia el verano en el hemisferio sur?",
    options: ["Aries", "Tauro", "Géminis", "Cáncer"],
    correctAnswer: "Aries",
  },
];

const Z_QUESTIONS_START_DAY = [
  {
    question: "¿A qué signo zodiacal corresponde el inicio del 21 de marzo?",
    options: ["Aries", "Virgo", "Sagitario", "Tauro"],
    correctAnswer: "Aries",
  },
  {
    question: "¿Qué signo zodiacal comienza el 20 de abril?",
    options: ["Tauro", "Piscis", "Géminis", "Leo"],
    correctAnswer: "Tauro",
  },
  {
    question: "¿Cuál es el signo que inicia el 21 de mayo?",
    options: ["Géminis", "Capricornio", "Cáncer", "Escorpio"],
    correctAnswer: "Géminis",
  },
  {
    question: "¿A qué signo zodiacal corresponde el 22 de junio?",
    options: ["Cáncer", "Libra", "Acuario", "Aries"],
    correctAnswer: "Cáncer",
  },
  {
    question: "¿Qué signo comienza el 23 de julio?",
    options: ["Leo", "Sagitario", "Virgo", "Piscis"],
    correctAnswer: "Leo",
  },
  {
    question: "¿Cuál es el signo que inicia el 23 de agosto?",
    options: ["Virgo", "Escorpio", "Tauro", "Capricornio"],
    correctAnswer: "Virgo",
  },
  {
    question: "¿A qué signo zodiacal corresponde el 23 de septiembre?",
    options: ["Libra", "Géminis", "Aries", "Piscis"],
    correctAnswer: "Libra",
  },
  {
    question: "¿Qué signo zodiacal comienza el 23 de octubre?",
    options: ["Escorpio", "Leo", "Acuario", "Cáncer"],
    correctAnswer: "Escorpio",
  },
  {
    question: "¿Cuál es el signo que inicia el 22 de noviembre?",
    options: ["Sagitario", "Capricornio", "Tauro", "Libra"],
    correctAnswer: "Sagitario",
  },
  {
    question: "¿A qué signo zodiacal corresponde el 21 de diciembre?",
    options: ["Capricornio", "Géminis", "Virgo", "Aries"],
    correctAnswer: "Capricornio",
  },
  {
    question: "¿Qué signo zodiacal comienza el 20 de enero?",
    options: ["Acuario", "Leo", "Escorpio", "Cáncer"],
    correctAnswer: "Acuario",
  },
  {
    question: "¿Cuál es el signo que inicia el 19 de febrero?",
    options: ["Piscis", "Libra", "Sagitario", "Tauro"],
    correctAnswer: "Piscis",
  },
];

export const COMINED_QUESTIONS = [
  Z_QUESTIONS_POLARITY,
  Z_QUESTIONS_ANIMAL,
  Z_QUESTIONS_BODY,
  Z_QUESTIONS_GLYPHS,
  Z_QUESTIONS_OPPOSITE,
  Z_QUESTIONS_REGENT,
  Z_QUESTIONS_SEASONS,
  Z_QUESTIONS_TEMPERAMENT,
  Z_QUESTIONS_START_DAY,
];

export function getQuestionPool() {
  return COMINED_QUESTIONS.map((item) => pickRandomItems(item))
    .flat()
    .map((obj, index) => ({ ...obj, id: index.toString() }));
}
