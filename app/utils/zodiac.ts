import { pickRandomItems, shuffleArray } from "./arrays";
import { Quiz } from "./questions-with-answers";

const zodiacSigns = [
  {
    name: "Aries",
    element: "Fuego",
    modality: "Cardinal",
    polarity: "Masculina",
    animal: "Carnero",
    opposite: "Libra",
    regent: "Marte",
    body: "Cabeza",
    glyph: "♈️",
    temperament: "Caliente y Seco",
    number: 1,
    date: "21 de Marzo",
  },
  {
    name: "Tauro",
    element: "Tierra",
    modality: "Fijo",
    polarity: "Femenina",
    animal: "Toro",
    opposite: "Escorpio",
    regent: "Venus",
    body: "Cuello",
    glyph: "♉️",
    temperament: "Frio y Seco",
    number: 2,
    date: "21 de Abril",
  },
  {
    name: "Géminis",
    element: "Aire",
    modality: "Mutable",
    polarity: "Masculina",
    animal: "Mellizos",
    opposite: "Sagitario",
    regent: "Mercurio",
    body: "Manos y brazos",
    glyph: "♊️",
    temperament: "Humedo y Caliente",
    number: 3,
    date: "21 de Mayo",
  },
  {
    name: "Cáncer",
    element: "Agua",
    modality: "Cardinal",
    polarity: "Femenina",
    animal: "Cangrejo",
    opposite: "Capricornio",
    regent: "Luna",
    body: "Pecho",
    glyph: "♋️",
    temperament: "Humedo y Frio",
    number: 4,
    date: "21 de Junio",
  },
  {
    name: "Leo",
    element: "Fuego",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "León",
    opposite: "Acuario",
    regent: "Sol",
    body: "Corazón y espalda alta",
    glyph: "♌️",
    temperament: "Seco y Caliente",
    number: 5,
    date: "21 de Julio",
  },
  {
    name: "Virgo",
    element: "Tierra",
    modality: "Mutable",
    polarity: "Femenina",
    animal: "Virgen",
    opposite: "Piscis",
    regent: "Mercurio",
    body: "Intestino delgado",
    glyph: "♍️",
    temperament: "Seco y Frio",
    number: 6,
    date: "21 de Agosto",
  },
  {
    name: "Libra",
    element: "Aire",
    modality: "Cardinal",
    polarity: "Masculina",
    animal: "Balanza",
    opposite: "Aries",
    regent: "Venus",
    body: "Riñones",
    glyph: "♎️",
    temperament: "Humedo y Caliente",
    number: 7,
    date: "21 de Septiembre",
  },
  {
    name: "Escorpio",
    element: "Agua",
    modality: "Fijo",
    polarity: "Femenina",
    animal: "Escorpión",
    opposite: "Tauro",
    regent: "Marte y Plutón",
    body: "Sistema excretor",
    glyph: "♏️",
    temperament: "Humedo y Frio",
    number: 8,
    date: "21 de Octubre",
  },
  {
    name: "Sagitario",
    element: "Fuego",
    modality: "Mutable",
    polarity: "Masculina",
    animal: "Flecha",
    opposite: "Géminis",
    regent: "Júpiter",
    body: "Hígado nervio ciático",
    glyph: "♐️",
    temperament: "Seco y Caliente",
    number: 9,
    date: "21 de Noviembre",
  },
  {
    name: "Capricornio",
    element: "Tierra",
    modality: "Cardinal",
    polarity: "Femenina",
    animal: "Cabra",
    opposite: "Cáncer",
    regent: "Saturno",
    body: "Huesos rodillas y dientes",
    glyph: "♑️",
    temperament: "Seco y Frio",
    number: 10,
    date: "21 de Diciembre",
  },
  {
    name: "Acuario",
    element: "Aire",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "Aguatero",
    opposite: "Leo",
    regent: "Saturno y Urano",
    body: "Sistema circulatorio pantorrillas tobillos",
    glyph: "♒️",
    temperament: "Caliente y Humedo",
    number: 11,
    date: "21 Enero",
  },
  {
    name: "Piscis",
    element: "Agua",
    modality: "Mutable",
    polarity: "Femenina",
    animal: "Pez",
    opposite: "Virgo",
    regent: "Júpiter y Neptuno",
    body: "Pies",
    glyph: "♓️",
    temperament: "Humedo y Frio",
    number: 12,
    date: "19 de Febrero",
  },
];

export const questionElement = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.element !== randomSign.element),
  ).map((sign) => sign.name);

  return {
    question: `¿Cual es el signo con el Elemento de ${randomSign.element}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
export const questionModality = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.modality !== randomSign.modality),
  ).map((sign) => sign.name);

  return {
    question: `¿Cual es el signo con la Modalidad ${randomSign.modality}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
const questionPolarity = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.polarity !== randomSign.polarity),
  ).map((sign) => sign.name);

  return {
    question: `¿Cual es el signo con la Polaridad ${randomSign.polarity}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
const questionAnimal = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.animal !== randomSign.animal),
  ).map((sign) => sign.name);

  return {
    question: `¿A que signo se lo identifica con el animal ${randomSign.animal}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
const questionOpposite = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.opposite !== randomSign.opposite),
  ).map((sign) => sign.opposite);

  return {
    question: `¿Que signo es el opuesto de ${randomSign.name}?`,
    correctAnswer: randomSign.opposite,
    options: shuffleArray([randomSign.opposite, ...options]),
  };
};
const questionRegent = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.regent !== randomSign.regent),
  ).map((sign) => sign.regent);

  return {
    question: `¿Cual es el Regente de ${randomSign.name}?`,
    correctAnswer: randomSign.regent,
    options: shuffleArray([randomSign.regent, ...options]),
  };
};
const questionBody = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.body !== randomSign.body),
  ).map((sign) => sign.name);

  return {
    question: `¿Que signo rige la/s parte/s del cuerpo: ${randomSign.body}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
const questionGlyph = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.glyph !== randomSign.glyph),
  ).map((sign) => sign.glyph);

  return {
    question: `¿Cuál es el glifo de ${randomSign.name}?`,
    correctAnswer: randomSign.glyph,
    options: shuffleArray([randomSign.glyph, ...options]),
  };
};
const questionTemperament = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter(
      (sign) => sign.temperament !== randomSign.temperament && sign.name,
    ),
  ).map((sign) => sign.name);

  return {
    question: `¿A que signo le corresponde el temperamento '${randomSign.temperament}'?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.temperament, ...options]),
  };
};
const questionNumber = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.number !== randomSign.number),
  ).map((sign) => sign.name);

  return {
    question: `¿A que signo le corresponde el numero ${randomSign.number}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};
const questionStartDate = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.date !== randomSign.date),
  ).map((sign) => sign.date);

  return {
    question: `¿El signo ${randomSign.name} comienza el dia:?`,
    correctAnswer: randomSign.date,
    options: shuffleArray([randomSign.date, ...options]),
  };
};

const combinedQuestions = [
  questionModality,
  questionPolarity,
  questionAnimal,
  questionOpposite,
  questionRegent,
  questionBody,
  questionGlyph,
  questionTemperament,
  questionNumber,
  questionStartDate,
];

export function generatePool() {
  const pool = combinedQuestions.map((question) => {
    return [question(), question()];
  });

  return pool.flat().map((item, index) => ({ ...item, id: index.toString() }));
}
