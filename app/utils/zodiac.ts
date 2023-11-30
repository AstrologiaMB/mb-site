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
    temperament: "Caliente y seco",
    number: 1,
    date: "21 de Marzo",
    endDate: "20 de Abril",
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
    temperament: "Frío y seco",
    number: 2,
    date: "21 de Abril",
    endDate: "20 de Mayo",
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
    temperament: "Humedo y caliente",
    number: 3,
    date: "21 de Mayo",
    endDate: "20 de Junio",
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
    temperament: "Humedo y frío",
    number: 4,
    date: "21 de Junio",
    endDate: "20 de Julio",
  },
  {
    name: "Leo",
    element: "Fuego",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "León",
    opposite: "Acuario",
    regent: "Sol",
    body: "Corazón",
    glyph: "♌️",
    temperament: "Seco y caliente",
    number: 5,
    date: "21 de Julio",
    endDate: "20 de Agosto",
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
    temperament: "Seco y frío",
    number: 6,
    date: "21 de Agosto",
    endDate: "20 de Septiembre",
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
    temperament: "Humedo y caliente",
    number: 7,
    date: "21 de Septiembre",
    endDate: "20 de Octubre",
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
    temperament: "Humedo y frío",
    number: 8,
    date: "21 de Octubre",
    endDate: "20 de Noviembre",
  },
  {
    name: "Sagitario",
    element: "Fuego",
    modality: "Mutable",
    polarity: "Masculina",
    animal: "Flecha",
    opposite: "Géminis",
    regent: "Júpiter",
    body: "Hígado",
    glyph: "♐️",
    temperament: "Seco y caliente",
    number: 9,
    date: "21 de Noviembre",
    endDate: "20 de Diciembre",
  },
  {
    name: "Capricornio",
    element: "Tierra",
    modality: "Cardinal",
    polarity: "Femenina",
    animal: "Cabra",
    opposite: "Cáncer",
    regent: "Saturno",
    body: "Huesos y dientes",
    glyph: "♑️",
    temperament: "Seco y frío",
    number: 10,
    date: "21 de Diciembre",
    endDate: "20 de Enero",
  },
  {
    name: "Acuario",
    element: "Aire",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "Aguatero",
    opposite: "Leo",
    regent: "Saturno y Urano",
    body: "Sistema circulatorio",
    glyph: "♒️",
    temperament: "Caliente y humedo",
    number: 11,
    date: "21 Enero",
    endDate: "20 de Febrero",
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
    temperament: "Humedo y frío",
    number: 12,
    date: "19 de Febrero",
    endDate: "20 de Marzo",
  },
];

export const questionElement = (): Quiz => {
  // check this
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.element === randomSign.element),
  ).map((sign) => sign.name);

  const correctOption = pickRandomItems(
    zodiacSigns.filter(
      (sign) =>
        sign.element !== randomSign.element && !options.includes(sign.name),
    ),
    1,
  ).map((sign) => sign.name);

  return {
    question: `¿Cuál signo no es de ${randomSign.element.toLowerCase()}?`,
    correctAnswer: correctOption[0],
    options: shuffleArray([correctOption[0], ...options]),
  };
};
export const questionModality = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.modality !== randomSign.modality),
    11,
  ).map((sign) => sign.modality);

  const optionSet = Array.from(new Set(options));

  return {
    question: `¿Cuál es la cualidad del signo ${randomSign.name}?`,
    correctAnswer: randomSign.modality,
    options: shuffleArray([randomSign.modality, ...optionSet.slice(0, 3)]),
  };
};
const questionPolarity = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.polarity !== randomSign.polarity),
  ).map((sign) => sign.name);

  return {
    question: `¿Cuál de estos signos tiene polaridad ${randomSign.polarity}?`,
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
    question: `¿Qué signo zodiacal está asociado a un/a ${randomSign.animal.toLowerCase()}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionAnimalV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.animal !== randomSign.animal),
  ).map((sign) => sign.name);

  return {
    question: `¿Cuál es el signo del Zodíaco representado por ${randomSign.animal.toLowerCase()}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionOpposite = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter(
      (sign) =>
        sign.opposite !== randomSign.opposite && randomSign.name !== sign.name,
    ),
  ).map((sign) => sign.opposite);

  return {
    question: `¿Cuál es el signo opuesto de ${randomSign.name}?`,
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
    question: `¿Qué planeta o luminaria rige a ${randomSign.name}?`, // check regent no duplication
    correctAnswer: randomSign.regent,
    options: shuffleArray([randomSign.regent, ...options]),
  };
};

const questionRegentV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.regent !== randomSign.regent),
  ).map((sign) => sign.name);

  return {
    question: `¿Cuál de estos signos es regido por ${randomSign.regent}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionBody = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.body !== randomSign.body),
  ).map((sign) => sign.body);

  return {
    question: `¿Qué parte del cuerpo rige el signo de ${randomSign.name}?`,
    correctAnswer: randomSign.body,
    options: shuffleArray([randomSign.body, ...options]),
  };
};

const questionBodyV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter(
      (sign) => sign.body !== randomSign.body && randomSign.name !== sign.name,
    ),
  ).map((sign) => sign.name);

  return {
    question: `¿Cuál es el signo que rige ${randomSign.body.toLowerCase()}?`,
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
    question: `¿Cuál de estos glifos representa a ${randomSign.name}?`,
    correctAnswer: randomSign.glyph,
    options: shuffleArray([randomSign.glyph, ...options]),
  };
};

const questionTemperament = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.temperament !== randomSign.temperament),
    11,
  ).map((sign) => sign.temperament);

  const optionSet = Array.from(new Set(options));

  return {
    question: `El signo de ${randomSign.name} es:`,
    correctAnswer: randomSign.temperament,
    options: shuffleArray([randomSign.temperament, ...optionSet.slice(0, 3)]),
  };
};

const questionTemperamentV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.temperament === randomSign.temperament),
  ).map((sign) => sign.name);

  const correctOption = pickRandomItems(
    zodiacSigns.filter(
      (sign) =>
        sign.temperament !== randomSign.temperament &&
        !options.includes(sign.name),
    ),
  ).map((sign) => sign.name);

  return {
    question: `¿Qué signo no es ${randomSign.temperament.toLowerCase()}?`,
    correctAnswer: correctOption[0],
    options: shuffleArray([correctOption[0], ...options]),
  };
};

const questionNumber = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.number !== randomSign.number),
  ).map((sign) => sign.number.toString());

  return {
    question: `¿Qué posición ocupa el signo de ${randomSign.name} en el Zodíaco?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.number.toString(), ...options]),
  };
};

const questionNumberV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.number !== randomSign.number),
  ).map((sign) => sign.name);

  return {
    question: `¿Qué signo ocupa la ${randomSign.number}º posición en la rueda zodiacal?`,
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
    question: `¿Qué día comienza el signo de ${randomSign.name}?`,
    correctAnswer: randomSign.date,
    options: shuffleArray([randomSign.date, ...options]),
  };
};

const questionStartDateV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.date !== randomSign.date),
  ).map((sign) => sign.date);

  return {
    question: `¿Cuál es la fecha de comienzo de ${randomSign.name}?`,
    correctAnswer: randomSign.date,
    options: shuffleArray([randomSign.date, ...options]),
  };
};

const questionEndDate = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.endDate !== randomSign.endDate),
  ).map((sign) => sign.endDate);

  return {
    question: `¿Cuál es la fecha de finalización de ${randomSign.name}?`,
    correctAnswer: randomSign.endDate,
    options: shuffleArray([randomSign.endDate, ...options]),
  };
};

const combinedQuestions = [
  questionElement,
  questionTemperamentV2,
  questionModality,
  questionPolarity,
  questionAnimal,
  questionAnimalV2,
  questionOpposite,
  questionRegent,
  questionRegentV2,
  questionBody,
  questionBodyV2,
  questionGlyph,
  questionTemperament,
  questionTemperamentV2,
  questionNumber,
  questionNumberV2,
  questionStartDate,
  questionStartDateV2,
  questionEndDate,
];

// const combinedQuestions = [questionElement, questionTemperamentV2];

export function generatePool() {
  const pool = [
    ...shuffleArray(
      combinedQuestions.map((question) => {
        return question();
      }),
    ),
    ...shuffleArray(
      combinedQuestions.map((question) => {
        return question();
      }),
    ),
  ];

  return pool
    .map((item, index) => ({ ...item, id: index.toString() }))
    .slice(0, 20);
}
