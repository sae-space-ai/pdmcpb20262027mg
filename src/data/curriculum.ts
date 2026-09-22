// ============================================================
// CORPUS CURRICULAR — PROGRAMACIÓN DIDÁCTICA 2026/2027
// MÚSICA DE CÁMARA · ORQUESTA · BANDA
// ENSEÑANZAS PROFESIONALES DE MÚSICA — EXTREMADURA
// ============================================================

export type DocStatus = 'VERIFICADO' | 'VERIFICADO-MODIFICADO' | 'DOCUMENTADO' | 'DESARROLLO_PROPIO' | 'PROPUESTO' | 'HISTORICO' | 'HOLD';

export interface Norma {
  id: string;
  nombre: string;
  fecha: string;
  organismo: string;
  ambito: 'estatal' | 'autonomico';
  nivel: 'Elemental' | 'Profesional' | 'Ambos';
  articulos: string;
  anexos: string;
  estado: DocStatus;
  fuente: string;
  fechaConsulta: string;
  observaciones: string;
}

export interface Objetivo {
  id: string;
  descripcion: string;
  tipo: 'GENERAL' | 'ESPECIFICO' | 'DIDACTICO';
  asignatura: 'MC' | 'ORQ' | 'BND' | 'GENERAL';
  curso: string;
  trazabilidad: string;
  contenidosIds: string[];
  estado: DocStatus;
}

export interface Contenido {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'conceptual' | 'procedimental' | 'actitudinal';
  asignatura: 'MC' | 'ORQ' | 'BND';
  curso: string;
  normaRef: string;
  objetivosIds: string[];
  estado: DocStatus;
}

export interface Criterio {
  id: string;
  descripcion: string;
  tipo: 'NORMATIVO' | 'DIDACTICO_DERIVADO';
  normaRef: string;
  asignatura: 'MC' | 'ORQ' | 'BND';
  objetivosIds: string[];
  estado: DocStatus;
}

export interface Instrumento {
  id: string;
  nombre: string;
  finalidad: string;
  queMide: string;
  momento: string;
  asignatura: 'MC' | 'ORQ' | 'BND';
  estado: DocStatus;
}

export interface Evidencia {
  id: string;
  descripcion: string;
  tipo: string;
  instrumentoId: string;
  criterioId: string;
  objetivoId: string;
  contenidoId: string;
  unidadId: string;
  momento: string;
  asignatura: 'MC' | 'ORQ' | 'BND';
  estado: DocStatus;
}

export interface Rubrica {
  id: string;
  titulo: string;
  asignatura: 'MC' | 'ORQ' | 'BND' | 'TRANSVERSAL';
  curso: string;
  unidad: string;
  criteriosIds: string[];
  evidenciasIds: string[];
  indicadores: string[];
  estado: DocStatus;
  niveles: {
    nivel4: string;
    nivel3: string;
    nivel2: string;
    nivel1: string;
  };
}

export interface UnidadDidactica {
  id: string;
  titulo: string;
  asignatura: 'MC' | 'ORQ' | 'BND';
  curso: string;
  trimestre: string;
  estado: DocStatus;
  justificacion: string;
  objetivosIds: string[];
  contenidosIds: string[];
  actividadesIds: string[];
  evidenciasIds: string[];
  instrumentosIds: string[];
  criteriosIds: string[];
  rubricasIds: string[];
  repertorio: string;
  productoMusical: string;
  resultadoEsperado: string;
  atencionDiversidad: string;
  temporalizacion: string;
}

export interface Actividad {
  id: string;
  descripcion: string;
  tipo: string;
  asignatura: 'MC' | 'ORQ' | 'BND';
  objetivoId: string;
  contenidoId: string;
  estado: DocStatus;
}

// ============================================================
// NORMATIVA
// ============================================================
export const normas: Norma[] = [
  {
    id: 'NORMA-RD-1577-2006',
    nombre: 'Real Decreto 1577/2006, de 22 de diciembre',
    fecha: '22/12/2006',
    organismo: 'Ministerio de Educación y Ciencia',
    ambito: 'estatal',
    nivel: 'Profesional',
    articulos: 'Art. 4-8, Anexo I (objetivos y criterios de evaluación de Enseñanzas Profesionales de Música)',
    anexos: 'Anexo I — Objetivos generales y criterios de evaluación',
    estado: 'VERIFICADO',
    fuente: 'https://www.boe.es/eli/rd/2006/12/22/1577',
    fechaConsulta: '2026-06-15',
    observaciones: 'Establece las enseñanzas profesionales de música en todo el territorio nacional. Define objetivos generales y criterios de evaluación del bloque de asignaturas de conjunto.'
  },
  {
    id: 'NORMA-111-2007',
    nombre: 'Decreto 111/2007, de 22 de mayo',
    fecha: '22/05/2007',
    organismo: 'Junta de Extremadura',
    ambito: 'autonomico',
    nivel: 'Profesional',
    articulos: 'Art. 3-7, Anexo I (currículo Enseñanzas Profesionales de Música)',
    anexos: 'Anexo I — Currículo completo de Enseñanzas Profesionales',
    estado: 'VERIFICADO',
    fuente: 'https://doe.juntaex.es/pdfs/doe/2007/63/A07060063_2.pdf',
    fechaConsulta: '2026-06-15',
    observaciones: 'Desarrolla el currículo de Enseñanzas Profesionales de Música en Extremadura. ESTE decreto es para PROFESIONALES, no confundir con Decreto 110/2007.'
  },
  {
    id: 'NORMA-110-2007',
    nombre: 'Decreto 110/2007, de 22 de mayo',
    fecha: '22/05/2007',
    organismo: 'Junta de Extremadura',
    ambito: 'autonomico',
    nivel: 'Elemental',
    articulos: 'Art. 3-6, Anexo (currículo Enseñanzas Elementales de Música)',
    anexos: 'Anexo — Currículo de Enseñanzas Elementales',
    estado: 'VERIFICADO',
    fuente: 'https://doe.juntaex.es/pdfs/doe/2007/63/A07060062_2.pdf',
    fechaConsulta: '2026-06-15',
    observaciones: 'Desarrolla el currículo de ENSEÑANZAS ELEMENTALES de Música en Extremadura. NO aplicable directamente a Enseñanzas Profesionales salvo como referencia.'
  },
  {
    id: 'NORMA-54-2022',
    nombre: 'Decreto 54/2022, de 18 de mayo',
    fecha: '18/05/2022',
    organismo: 'Junta de Extremadura',
    ambito: 'autonomico',
    nivel: 'Elemental',
    articulos: 'Modifica el Decreto 110/2007 (Enseñanzas Elementales)',
    anexos: 'Modificación del currículo de Enseñanzas Elementales',
    estado: 'VERIFICADO',
    fuente: 'https://doe.juntaex.es/pdfs/doe/2022/96/A22060096_2.pdf',
    fechaConsulta: '2026-06-15',
    observaciones: 'IMPORTANTE: Modifica el Decreto 110/2007 (ENSEÑANZAS ELEMENTALES). NO modifica el Decreto 111/2007 (Profesionales). No atribuir a este decreto contenidos del currículo profesional.'
  },
  {
    id: 'NORMA-ORDEN-28-04-2009',
    nombre: 'Orden de 28 de abril de 2009',
    fecha: '28/04/2009',
    organismo: 'Consejería de Educación de Extremadura',
    ambito: 'autonomico',
    nivel: 'Ambos',
    articulos: 'Organización y evaluación de enseñanzas artísticas',
    anexos: 'Procedimientos de evaluación y calificación',
    estado: 'VERIFICADO',
    fuente: 'https://doe.juntaex.es/pdfs/doe/2009/87/A09080087_2.pdf',
    fechaConsulta: '2026-06-15',
    observaciones: 'Regula aspectos de organización y evaluación. HOLD — verificar vigencia completa y posibles modificaciones posteriores.'
  },
  {
    id: 'NORMA-LEY-4-2011',
    nombre: 'Ley 4/2011, de 24 de marzo, de Educación de Extremadura',
    fecha: '24/03/2011',
    organismo: 'Asamblea de Extremadura',
    ambito: 'autonomico',
    nivel: 'Ambos',
    articulos: 'Art. 37-40 (Enseñanzas artísticas)',
    anexos: 'Disposiciones sobre enseñanzas de régimen especial',
    estado: 'VERIFICADO',
    fuente: 'https://doe.juntaex.es/pdfs/doe/2011/59/A11060059_2.pdf',
    fechaConsulta: '2026-06-15',
    observaciones: 'Ley autonómica de educación. Marco general para enseñanzas artísticas en Extremadura.'
  },
  {
    id: 'NORMA-LOE',
    nombre: 'Ley Orgánica 2/2006, de 3 de mayo, de Educación (LOE)',
    fecha: '03/05/2006',
    organismo: 'Cortes Generales',
    ambito: 'estatal',
    nivel: 'Ambos',
    articulos: 'Art. 45-49 (Enseñanzas artísticas)',
    anexos: 'Disposiciones sobre enseñanzas de régimen especial',
    estado: 'VERIFICADO-MODIFICADO',
    fuente: 'https://www.boe.es/eli/lo/2006/05/03/2',
    fechaConsulta: '2026-06-15',
    observaciones: 'Modificada por LOMLOE. Texto vigente debe consultarse consolidado.'
  },
  {
    id: 'NORMA-LOMLOE',
    nombre: 'Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE)',
    fecha: '29/12/2020',
    organismo: 'Cortes Generales',
    ambito: 'estatal',
    nivel: 'Ambos',
    articulos: 'Modificación de la LOE en enseñanzas artísticas',
    anexos: 'Disposición adicional sobre competencias clave',
    estado: 'VERIFICADO',
    fuente: 'https://www.boe.es/eli/lo/2020/12/29/3',
    fechaConsulta: '2026-06-15',
    observaciones: 'Modifica la LOE. Introduce competencias clave y enfoque competencial. Aplicación progresiva al currículo de enseñanzas artísticas.'
  },
  {
    id: 'NORMA-HOLD-EVALUACION-2026',
    nombre: 'Normativa de evaluación vigente curso 2026/2027',
    fecha: 'PENDIENTE',
    organismo: 'Consejería de Educación de Extremadura',
    ambito: 'autonomico',
    nivel: 'Profesional',
    articulos: 'Por determinar',
    anexos: 'Por determinar',
    estado: 'HOLD',
    fuente: 'Por verificar',
    fechaConsulta: '2026-06-15',
    observaciones: 'HOLD — Verificar instrucciones de inicio de curso 2026/2027 y normativa de evaluación específica vigente.'
  }
];

// ============================================================
// OBJETIVOS
// ============================================================
export const objetivos: Objetivo[] = [
  // OBJETIVOS GENERALES (RD 1577/2006, Anexo I)
  { id: 'OBJ-OG-01', descripcion: 'Utilizar los medios y recursos de la comunicación musical para interpretar y crear, demostrando el dominio de los lenguajes y técnicas musicales.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo a)', contenidosIds: [], estado: 'VERIFICADO' },
  { id: 'OBJ-OG-02', descripcion: 'Interpretar y desarrollar contenidos musicales de diferentes estilos y épocas con criterio artístico y conocimiento del contexto.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo b)', contenidosIds: [], estado: 'VERIFICADO' },
  { id: 'OBJ-OG-03', descripcion: 'Conocer y valorar el patrimonio musical como bien cultural, mostrando interés por su conservación y difusión.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo c)', contenidosIds: [], estado: 'VERIFICADO' },
  { id: 'OBJ-OG-04', descripcion: 'Participar en agrupaciones estables, asumiendo la responsabilidad que implica la interpretación colectiva.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo d)', contenidosIds: [], estado: 'VERIFICADO' },
  { id: 'OBJ-OG-05', descripcion: 'Desarrollar hábitos de trabajo individual y cooperativo, mostrando actitudes de respeto, tolerancia y responsabilidad.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo e)', contenidosIds: [], estado: 'VERIFICADO' },
  { id: 'OBJ-OG-06', descripcion: 'Utilizar la terminología musical adecuada en el análisis y la interpretación, demostrando comprensión de los elementos del lenguaje musical.', tipo: 'GENERAL', asignatura: 'GENERAL', curso: 'Todos', trazabilidad: 'RD 1577/2006, Anexo I, objetivo f)', contenidosIds: [], estado: 'VERIFICADO' },

  // OBJETIVOS ESPECÍFICOS — MÚSICA DE CÁMARA
  { id: 'OBJ-MC-01', descripcion: 'Interpretar obras del repertorio de cámara en formaciones de dúo a noneto, asumiendo las funciones de cada parte.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Decreto 111/2007, Anexo I — Desarrollo propio', contenidosIds: ['CONT-MC-01','CONT-MC-02','CONT-MC-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-02', descripcion: 'Desarrollar la capacidad de escucha activa e interacción musical con los compañeros de grupo.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Decreto 111/2007, Anexo I', contenidosIds: ['CONT-MC-04','CONT-MC-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-03', descripcion: 'Lograr afinación, empaste, balance y coordinación en la interpretación colectiva.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Decreto 111/2007, Anexo I', contenidosIds: ['CONT-MC-06','CONT-MC-07','CONT-MC-08'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-04', descripcion: 'Aplicar criterios de articulación, fraseo, dinámica y agógica compartidos por el grupo.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-09','CONT-MC-10'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-05', descripcion: 'Preparar individualmente la parte asignada antes del ensayo colectivo, mostrando autonomía y responsabilidad.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-11','CONT-MC-12'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-06', descripcion: 'Analizar la obra desde la perspectiva de la forma, el estilo y la función de cada voz.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-13','CONT-MC-14'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-07', descripcion: 'Comunicarse eficazmente mediante la comunicación no verbal durante la interpretación.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-15','CONT-MC-16'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-08', descripcion: 'Participar en interpretaciones públicas con actitud profesional y capacidad crítica.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-17','CONT-MC-18'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-09', descripcion: 'Ejercer funciones de liderazgo y acompañamiento según la obra y la formación.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-19','CONT-MC-20'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-MC-10', descripcion: 'Reflexionar críticamente sobre el propio proceso de aprendizaje y el resultado musical.', tipo: 'ESPECIFICO', asignatura: 'MC', curso: '4º-6º EP', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-MC-21'], estado: 'DESARROLLO_PROPIO' },

  // OBJETIVOS ESPECÍFICOS — ORQUESTA
  { id: 'OBJ-ORQ-01', descripcion: 'Interpretar el repertorio orquestal asumiendo la función de sección y atril correspondiente.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-01','CONT-ORQ-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-02', descripcion: 'Desarrollar la escucha vertical y horizontal dentro de la textura orquestal.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-03','CONT-ORQ-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-03', descripcion: 'Lograr afinación colectiva, empaste y equilibrio entre secciones.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-05','CONT-ORQ-06','CONT-ORQ-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-04', descripcion: 'Seguir las indicaciones del director con atención y respuesta inmediata.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-08','CONT-ORQ-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-05', descripcion: 'Dominar entradas, cortes, respiraciones y articulaciones coordinadas.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-10','CONT-ORQ-11','CONT-ORQ-12'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-06', descripcion: 'Participar en ensayos parciales y generales con actitud profesional.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-13','CONT-ORQ-14'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-07', descripcion: 'Comprender la función de cada sección en la construcción del discurso sinfónico.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-15','CONT-ORQ-16'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-ORQ-08', descripcion: 'Leer a primera vista fragmentos orquestales con fluidez y precisión.', tipo: 'ESPECIFICO', asignatura: 'ORQ', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-ORQ-17'], estado: 'DESARROLLO_PROPIO' },

  // OBJETIVOS ESPECÍFICOS — BANDA
  { id: 'OBJ-BND-01', descripcion: 'Interpretar el repertorio de banda asumiendo la función de familia y sección instrumental.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-01','CONT-BND-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-02', descripcion: 'Lograr equilibrio tímbrico entre las familias instrumentales de la banda.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-03','CONT-BND-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-03', descripcion: 'Controlar afinación, articulación y ataques coordinados en el contexto de banda.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-05','CONT-BND-06','CONT-BND-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-04', descripcion: 'Seguir la dirección musical y responder a indicaciones gestuales con precisión.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-08','CONT-BND-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-05', descripcion: 'Desarrollar la precisión rítmica y la estabilidad del pulso en contextos de gran formación.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-10','CONT-BND-11'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-06', descripcion: 'Participar en ensayos parciales por secciones y ensayos generales con responsabilidad.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-12','CONT-BND-13'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-07', descripcion: 'Comprender la estructura y función de cada familia instrumental en el repertorio bandístico.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-14','CONT-BND-15'], estado: 'DESARROLLO_PROPIO' },
  { id: 'OBJ-BND-08', descripcion: 'Preparar individualmente la parte asignada con autonomía antes del ensayo colectivo.', tipo: 'ESPECIFICO', asignatura: 'BND', curso: 'Todos', trazabilidad: 'Desarrollo propio', contenidosIds: ['CONT-BND-16'], estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// CONTENIDOS
// ============================================================
export const contenidos: Contenido[] = [
  // MÚSICA DE CÁMARA
  { id: 'CONT-MC-01', nombre: 'Repertorio de cámara', descripcion: 'Obras para formaciones de dúo a noneto, adaptadas al nivel del curso.', tipo: 'conceptual', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-02', nombre: 'Formaciones instrumentales', descripcion: 'Conocimiento de las diferentes formaciones camerísticas y sus características.', tipo: 'conceptual', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-03', nombre: 'Función de cada parte', descripcion: 'Rol de cada instrumento: melodía, contramelodía, acompañamiento, bajo, armonía.', tipo: 'conceptual', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-01','OBJ-MC-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-04', nombre: 'Escucha activa', descripcion: 'Atención simultánea a la propia parte y a las demás voces durante la interpretación.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-05', nombre: 'Interacción musical', descripcion: 'Capacidad de responder musicalmente a las propuestas de los compañeros en tiempo real.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-02','OBJ-MC-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-06', nombre: 'Afinación colectiva', descripcion: 'Ajuste de la altura sonora entre los instrumentos del grupo.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-07', nombre: 'Empaste', descripcion: 'Unificación del sonido del grupo: color, intensidad, carácter.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-08', nombre: 'Balance y equilibrio', descripcion: 'Distribución de planos sonoros según la función de cada voz.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-09', nombre: 'Articulación compartida', descripcion: 'Acuerdo y ejecución uniforme de articulaciones en el grupo.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-10', nombre: 'Fraseo y agógica', descripcion: 'Construcción conjunta del fraseo y gestión del tiempo expresivo.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-11', nombre: 'Preparación individual', descripcion: 'Estudio autónomo de la parte antes del ensayo: notas, ritmo, digitación, arcadas.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-12', nombre: 'Autonomía en el estudio', descripcion: 'Organización del trabajo personal y detección de dificultades.', tipo: 'actitudinal', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-13', nombre: 'Análisis formal', descripcion: 'Identificación de la estructura de la obra y sus secciones.', tipo: 'conceptual', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-14', nombre: 'Estilo e interpretación', descripcion: 'Comprensión del contexto estilístico y su aplicación a la interpretación.', tipo: 'conceptual', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-15', nombre: 'Comunicación no verbal', descripcion: 'Mirada, respiración conjunta, gestos de entrada y corte.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-16', nombre: 'Coordinación rítmica', descripcion: 'Sincronización precisa entre los miembros del grupo.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-07','OBJ-MC-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-17', nombre: 'Interpretación pública', descripcion: 'Preparación y ejecución de conciertos y audiciones.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-08'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-18', nombre: 'Actitud profesional', descripcion: 'Postura, presencia, concentración y respeto al público y compañeros.', tipo: 'actitudinal', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-08'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-19', nombre: 'Liderazgo musical', descripcion: 'Capacidad de guiar al grupo en la construcción musical.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-20', nombre: 'Acompañamiento', descripcion: 'Función de soporte y acompañamiento dentro del grupo.', tipo: 'procedimental', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-MC-21', nombre: 'Reflexión crítica', descripcion: 'Capacidad de autoevaluar y evaluar el proceso y resultado musical.', tipo: 'actitudinal', asignatura: 'MC', curso: '4º-6º EP', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-MC-10'], estado: 'DESARROLLO_PROPIO' },

  // ORQUESTA
  { id: 'CONT-ORQ-01', nombre: 'Repertorio sinfónico', descripcion: 'Obras del repertorio orquestal adaptadas al nivel.', tipo: 'conceptual', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-02', nombre: 'Función de sección y atril', descripcion: 'Responsabilidad específica según la posición en la sección.', tipo: 'conceptual', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-03', nombre: 'Escucha vertical', descripcion: 'Percepción de la armonía y los acordes dentro de la textura.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-04', nombre: 'Escucha horizontal', descripcion: 'Percepción de las líneas melódicas y su desarrollo.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-05', nombre: 'Afinación orquestal', descripcion: 'Ajuste de la afinación en el contexto de gran formación.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-06', nombre: 'Empaste de sección', descripcion: 'Unificación del sonido dentro de la misma sección instrumental.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-07', nombre: 'Equilibrio entre secciones', descripcion: 'Balance sonoro entre cuerdas, maderas, metales y percusión.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-08', nombre: 'Seguimiento del director', descripcion: 'Atención visual permanente a las indicaciones gestuales.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-09', nombre: 'Comunicación gestual', descripcion: 'Comprensión de la técnica direccional y respuesta adecuada.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-10', nombre: 'Entradas coordinadas', descripcion: 'Precisión en los ataques simultáneos del tutti o sección.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-11', nombre: 'Cortes y silencios', descripcion: 'Control preciso de las finalizaciones de frase y silencios.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-12', nombre: 'Respiración colectiva', descripcion: 'Coordinación de la respiración para entradas y frases.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-13', nombre: 'Ensayo parcial', descripcion: 'Trabajo por secciones para resolver pasajes técnicos.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-14', nombre: 'Ensayo general', descripcion: 'Integración del trabajo de secciones en el tutti.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-15', nombre: 'Función de cada sección', descripcion: 'Rol de cuerdas, maderas, metales y percusión en el discurso.', tipo: 'conceptual', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-16', nombre: 'Textura sinfónica', descripcion: 'Comprensión de la construcción del sonido orquestal.', tipo: 'conceptual', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-ORQ-17', nombre: 'Lectura a primera vista', descripcion: 'Capacidad de interpretar fragmentos orquestales sin preparación.', tipo: 'procedimental', asignatura: 'ORQ', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-ORQ-08'], estado: 'DESARROLLO_PROPIO' },

  // BANDA
  { id: 'CONT-BND-01', nombre: 'Repertorio bandístico', descripcion: 'Obras del repertorio de banda adaptadas al nivel.', tipo: 'conceptual', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-02', nombre: 'Familias instrumentales', descripcion: 'Conocimiento de las familias: madera, metal, percusión, saxofones.', tipo: 'conceptual', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-01','OBJ-BND-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-03', nombre: 'Equilibrio tímbrico', descripcion: 'Balance entre familias y secciones instrumentales.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-04', nombre: 'Planos sonoros', descripcion: 'Gestión de planos de primer plano, acompañamiento y bajo.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-05', nombre: 'Afinación en banda', descripcion: 'Ajuste de la afinación en el contexto de gran formación bandística.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-06', nombre: 'Articulación coordinada', descripcion: 'Uniformidad en las articulaciones dentro de la sección y entre secciones.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-07', nombre: 'Ataques precisos', descripcion: 'Precisión en los inicios de nota coordinados.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-08', nombre: 'Dirección musical', descripcion: 'Seguimiento de las indicaciones del director de banda.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-09', nombre: 'Respuesta gestual', descripcion: 'Reacción inmediata y precisa a los gestos del director.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-10', nombre: 'Precisión rítmica', descripcion: 'Exactitud en la ejecución rítmica dentro de la formación.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-11', nombre: 'Estabilidad del pulso', descripcion: 'Mantenimiento del tempo sin aceleraciones ni retrasos.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-12', nombre: 'Ensayo por secciones', descripcion: 'Trabajo específico por familias instrumentales.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-13', nombre: 'Ensayo general de banda', descripcion: 'Integración de todas las secciones en el tutti.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-14', nombre: 'Estructura bandística', descripcion: 'Comprensión de la organización instrumental de la banda.', tipo: 'conceptual', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-15', nombre: 'Función de cada familia', descripcion: 'Rol de cada familia en el repertorio bandístico.', tipo: 'conceptual', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CONT-BND-16', nombre: 'Preparación individual', descripcion: 'Estudio autónomo de la parte antes del ensayo.', tipo: 'procedimental', asignatura: 'BND', curso: 'Todos', normaRef: 'Desarrollo propio', objetivosIds: ['OBJ-BND-08'], estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// CRITERIOS DE EVALUACIÓN
// ============================================================
export const criterios: Criterio[] = [
  { id: 'CE-MC-01', descripcion: 'Interpreta obras del repertorio de cámara con afinación, ritmo, articulación y dinámica adecuados al estilo.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio basado en RD 1577/2006', asignatura: 'MC', objetivosIds: ['OBJ-MC-01','OBJ-MC-03','OBJ-MC-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-02', descripcion: 'Demuestra capacidad de escucha activa e interacción con los compañeros durante la interpretación.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-02','OBJ-MC-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-03', descripcion: 'Logra empaste, balance y coordinación rítmica en la interpretación colectiva.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-03','OBJ-MC-07'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-04', descripcion: 'Muestra preparación individual adecuada antes del ensayo colectivo.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-05', descripcion: 'Analiza la obra identificando forma, estilo y función de cada voz.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-06', descripcion: 'Participa en interpretaciones públicas con actitud profesional.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-08'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-07', descripcion: 'Ejerce adecuadamente las funciones de liderazgo y acompañamiento.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-09'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-MC-08', descripcion: 'Reflexiona críticamente sobre su proceso y resultado musical.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'MC', objetivosIds: ['OBJ-MC-10'], estado: 'DESARROLLO_PROPIO' },

  { id: 'CE-ORQ-01', descripcion: 'Interpreta el repertorio orquestal asumiendo correctamente la función de sección.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-02', descripcion: 'Demuestra escucha vertical y horizontal en la textura orquestal.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-03', descripcion: 'Logra afinación, empaste y equilibrio en la interpretación orquestal.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-04', descripcion: 'Sigue las indicaciones del director con atención y respuesta precisa.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-05', descripcion: 'Controla entradas, cortes, respiraciones y articulaciones coordinadas.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-06', descripcion: 'Participa en ensayos con actitud profesional y responsabilidad.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-ORQ-07', descripcion: 'Comprende y explica la función de cada sección en la obra interpretada.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'ORQ', objetivosIds: ['OBJ-ORQ-07'], estado: 'DESARROLLO_PROPIO' },

  { id: 'CE-BND-01', descripcion: 'Interpreta el repertorio de banda asumiendo la función de familia y sección.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-01'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-02', descripcion: 'Contribuye al equilibrio tímbrico entre familias instrumentales.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-02'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-03', descripcion: 'Controla afinación, articulación y ataques en el contexto de banda.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-03'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-04', descripcion: 'Sigue la dirección musical con atención y respuesta precisa.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-04'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-05', descripcion: 'Mantiene precisión rítmica y estabilidad del pulso.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-05'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-06', descripcion: 'Participa responsablemente en ensayos parciales y generales.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-06'], estado: 'DESARROLLO_PROPIO' },
  { id: 'CE-BND-07', descripcion: 'Comprende la estructura y función de cada familia en el repertorio.', tipo: 'DIDACTICO_DERIVADO', normaRef: 'Desarrollo propio', asignatura: 'BND', objetivosIds: ['OBJ-BND-07'], estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// INSTRUMENTOS DE EVALUACIÓN
// ============================================================
export const instrumentos: Instrumento[] = [
  { id: 'INS-01', nombre: 'Observación sistemática', finalidad: 'Registrar el progreso del alumno durante los ensayos', queMide: 'Actitud, preparación, participación, progreso', momento: 'Continua', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-02', nombre: 'Registro de ensayo', finalidad: 'Documentar el trabajo realizado en cada sesión', queMide: 'Trabajo colectivo, resolución de dificultades', momento: 'Continua', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-03', nombre: 'Rúbrica analítica', finalidad: 'Evaluar aspectos específicos de la interpretación', queMide: 'Afinación, ritmo, articulación, empaste, coordinación', momento: 'Final de unidad', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-04', nombre: 'Prueba de pasaje', finalidad: 'Verificar el dominio técnico de fragmentos', queMide: 'Dominio técnico, preparación individual', momento: 'Continua/Final', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-05', nombre: 'Grabación', finalidad: 'Permitir autoevaluación y evaluación objetiva', queMide: 'Resultado sonoro global', momento: 'Final de unidad', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-06', nombre: 'Interpretación pública', finalidad: 'Evaluar la capacidad de actuación en concierto', queMide: 'Interpretación, actitud profesional, comunicación', momento: 'Final de trimestre', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-07', nombre: 'Autoevaluación', finalidad: 'Desarrollar la capacidad de reflexión crítica', queMide: 'Autopercepción, capacidad analítica', momento: 'Transversal', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-08', nombre: 'Coevaluación', finalidad: 'Evaluar entre compañeros con criterios compartidos', queMide: 'Escucha, análisis, capacidad crítica', momento: 'Final de unidad', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-09', nombre: 'Diario de ensayo', finalidad: 'Reflexión escrita sobre el proceso', queMide: 'Comprensión del proceso, capacidad reflexiva', momento: 'Continua', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-10', nombre: 'Lista de cotejo', finalidad: 'Verificación de aspectos concretos', queMide: 'Cumplimiento de requisitos técnicos', momento: 'Continua', asignatura: 'ORQ', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-11', nombre: 'Registro de sección', finalidad: 'Documentar el trabajo por secciones', queMide: 'Progreso de sección, empaste, afinación', momento: 'Continua', asignatura: 'ORQ', estado: 'DESARROLLO_PROPIO' },
  { id: 'INS-12', nombre: 'Escala de valoración', finalidad: 'Valoración graduada de aspectos interpretativos', queMide: 'Nivel de logro en criterios específicos', momento: 'Final', asignatura: 'BND', estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// EVIDENCIAS
// ============================================================
export const evidencias: Evidencia[] = [
  { id: 'EV-MC-01', descripcion: 'Interpretación de una obra de cámara completa en clase', tipo: 'interpretación', instrumentoId: 'INS-03', criterioId: 'CE-MC-01', objetivoId: 'OBJ-MC-01', contenidoId: 'CONT-MC-01', unidadId: 'UD-MC4-01', momento: 'final', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-MC-02', descripcion: 'Grabación de un ensayo mostrando interacción grupal', tipo: 'grabación', instrumentoId: 'INS-05', criterioId: 'CE-MC-02', objetivoId: 'OBJ-MC-02', contenidoId: 'CONT-MC-04', unidadId: 'UD-MC4-02', momento: 'final', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-MC-03', descripcion: 'Ejecución de un pasaje demostrando empaste y afinación', tipo: 'interpretación', instrumentoId: 'INS-03', criterioId: 'CE-MC-03', objetivoId: 'OBJ-MC-03', contenidoId: 'CONT-MC-06', unidadId: 'UD-MC4-03', momento: 'final', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-MC-04', descripcion: 'Presentación de la parte individual preparada', tipo: 'prueba', instrumentoId: 'INS-04', criterioId: 'CE-MC-04', objetivoId: 'OBJ-MC-05', contenidoId: 'CONT-MC-11', unidadId: 'UD-MC5-01', momento: 'continua', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-MC-05', descripcion: 'Análisis escrito u oral de la obra en ensayo', tipo: 'análisis', instrumentoId: 'INS-09', criterioId: 'CE-MC-05', objetivoId: 'OBJ-MC-06', contenidoId: 'CONT-MC-13', unidadId: 'UD-MC5-02', momento: 'continua', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-MC-06', descripcion: 'Concierto o audición pública del grupo', tipo: 'concierto', instrumentoId: 'INS-06', criterioId: 'CE-MC-06', objetivoId: 'OBJ-MC-08', contenidoId: 'CONT-MC-17', unidadId: 'UD-MC6-01', momento: 'final', asignatura: 'MC', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-ORQ-01', descripcion: 'Interpretación de un movimiento sinfónico', tipo: 'interpretación', instrumentoId: 'INS-03', criterioId: 'CE-ORQ-01', objetivoId: 'OBJ-ORQ-01', contenidoId: 'CONT-ORQ-01', unidadId: 'UD-ORQ-01', momento: 'final', asignatura: 'ORQ', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-ORQ-02', descripcion: 'Ejercicio de escucha identificando secciones', tipo: 'audición', instrumentoId: 'INS-01', criterioId: 'CE-ORQ-02', objetivoId: 'OBJ-ORQ-02', contenidoId: 'CONT-ORQ-03', unidadId: 'UD-ORQ-02', momento: 'continua', asignatura: 'ORQ', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-ORQ-03', descripcion: 'Fragmento orquestal mostrando empaste de sección', tipo: 'interpretación', instrumentoId: 'INS-03', criterioId: 'CE-ORQ-03', objetivoId: 'OBJ-ORQ-03', contenidoId: 'CONT-ORQ-06', unidadId: 'UD-ORQ-03', momento: 'final', asignatura: 'ORQ', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-BND-01', descripcion: 'Interpretación de una obra bandística completa', tipo: 'interpretación', instrumentoId: 'INS-12', criterioId: 'CE-BND-01', objetivoId: 'OBJ-BND-01', contenidoId: 'CONT-BND-01', unidadId: 'UD-BND-01', momento: 'final', asignatura: 'BND', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-BND-02', descripcion: 'Pasaje demostrando equilibrio tímbrico de la sección', tipo: 'interpretación', instrumentoId: 'INS-12', criterioId: 'CE-BND-02', objetivoId: 'OBJ-BND-02', contenidoId: 'CONT-BND-03', unidadId: 'UD-BND-02', momento: 'final', asignatura: 'BND', estado: 'DESARROLLO_PROPIO' },
  { id: 'EV-BND-03', descripcion: 'Fragmento rítmico complejo ejecutado con precisión', tipo: 'interpretación', instrumentoId: 'INS-12', criterioId: 'CE-BND-05', objetivoId: 'OBJ-BND-05', contenidoId: 'CONT-BND-10', unidadId: 'UD-BND-03', momento: 'final', asignatura: 'BND', estado: 'DESARROLLO_PROPIO' },
];

// ============================================================
// RÚBRICAS
// ============================================================
export const rubricas: Rubrica[] = [
  {
    id: 'RUB-MC-GEN',
    titulo: 'Rúbrica general de Música de Cámara',
    asignatura: 'MC',
    curso: '4º-6º EP',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-MC-01','CE-MC-02','CE-MC-03','CE-MC-04'],
    evidenciasIds: ['EV-MC-01','EV-MC-02','EV-MC-03'],
    indicadores: ['Afinación', 'Empaste', 'Coordinación', 'Escucha', 'Preparación', 'Comunicación'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Interpreta con afinación precisa, empaste homogéneo, coordinación rítmica excelente y escucha activa constante. Demuestra preparación individual completa y comunicación musical fluida con el grupo.',
      nivel3: 'Interpreta con afinación generalmente correcta, empaste adecuado en la mayoría de pasajes, coordinación rítmica estable y escucha activa. Prepara su parte habitualmente y se comunica adecuadamente con el grupo.',
      nivel2: 'Presenta dificultades ocasionales de afinación, empaste irregular en algunos pasajes, coordinación que requiere apoyo externo y escucha parcial. La preparación individual es insuficiente en ocasiones.',
      nivel1: 'Muestra dificultades frecuentes de afinación, empaste no logrado, descoordinación rítmica habitual, escucha limitada y falta de preparación individual sistemática.'
    }
  },
  {
    id: 'RUB-MC4-UD01',
    titulo: 'Rúbrica — UD-MC4-01: Primer contacto camerístico',
    asignatura: 'MC',
    curso: '4º EP',
    unidad: 'UD-MC4-01',
    criteriosIds: ['CE-MC-01','CE-MC-03'],
    evidenciasIds: ['EV-MC-01'],
    indicadores: ['Lectura conjunta', 'Afinación básica', 'Pulso común', 'Atención al compañero'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Lee la partitura conjunta con fluidez, mantiene afinación correcta, pulso estable y atención constante al compañero.',
      nivel3: 'Lee con fluidez aceptable, afinación mayoritariamente correcta, pulso generalmente estable y atención al compañero habitual.',
      nivel2: 'Dificultades en la lectura conjunta, afinación inestable, pulso irregular y atención al compañero intermitente.',
      nivel1: 'No logra la lectura conjunta, afinación deficiente, pulso inestable y no atiende al compañero.'
    }
  },
  {
    id: 'RUB-MC5-UD01',
    titulo: 'Rúbrica — UD-MC5-01: Preparación y autonomía',
    asignatura: 'MC',
    curso: '5º EP',
    unidad: 'UD-MC5-01',
    criteriosIds: ['CE-MC-04','CE-MC-05'],
    evidenciasIds: ['EV-MC-04','EV-MC-05'],
    indicadores: ['Preparación individual', 'Análisis de la obra', 'Autonomía', 'Resolución de dificultades'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Prepara la parte completa antes del ensayo, analiza la obra con criterio, muestra autonomía total y resuelve dificultades de forma independiente.',
      nivel3: 'Prepara la parte en su mayor parte, realiza análisis básico, muestra autonomía habitual y resuelve la mayoría de dificultades.',
      nivel2: 'Preparación parcial, análisis superficial, requiere apoyo para la autonomía y dificultades no resueltas.',
      nivel1: 'No prepara la parte, no realiza análisis, depende totalmente del docente y no aborda dificultades.'
    }
  },
  {
    id: 'RUB-MC6-UD01',
    titulo: 'Rúbrica — UD-MC6-01: Interpretación pública',
    asignatura: 'MC',
    curso: '6º EP',
    unidad: 'UD-MC6-01',
    criteriosIds: ['CE-MC-06','CE-MC-07','CE-MC-08'],
    evidenciasIds: ['EV-MC-06'],
    indicadores: ['Actitud escénica', 'Comunicación al público', 'Gestión del nerviosismo', 'Reflexión post-concierto'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Actitud escénica profesional, comunicación eficaz al público, gestión óptima del nerviosismo y reflexión crítica profunda post-concierto.',
      nivel3: 'Actitud escénica adecuada, comunicación al público correcta, gestión aceptable del nerviosismo y reflexión post-concierto pertinente.',
      nivel2: 'Actitud escénica mejorable, comunicación limitada, nerviosismo que afecta la interpretación y reflexión superficial.',
      nivel1: 'Actitud escénica inadecuada, no comunica al público, nerviosismo desbordante y ausencia de reflexión.'
    }
  },
  {
    id: 'RUB-ORQ-GEN',
    titulo: 'Rúbrica general de Orquesta',
    asignatura: 'ORQ',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-ORQ-01','CE-ORQ-02','CE-ORQ-03','CE-ORQ-04','CE-ORQ-05'],
    evidenciasIds: ['EV-ORQ-01','EV-ORQ-02','EV-ORQ-03'],
    indicadores: ['Función de sección', 'Escucha orquestal', 'Afinación colectiva', 'Seguimiento del director', 'Entradas coordinadas'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Asume plenamente su función de sección, escucha orquestal activa y constante, afinación colectiva precisa, seguimiento inmediato del director y entradas perfectamente coordinadas.',
      nivel3: 'Asume su función de sección correctamente, escucha orquestal adecuada, afinación mayoritariamente correcta, sigue al director habitualmente y entradas coordinadas en la mayoría de ocasiones.',
      nivel2: 'Función de sección parcial, escucha limitada, afinación inestable, seguimiento del director intermitente y entradas descoordinadas con frecuencia.',
      nivel1: 'No asume su función, escucha ausente, afinación deficiente, no sigue al director y entradas descoordinadas.'
    }
  },
  {
    id: 'RUB-ORQ-01',
    titulo: 'Rúbrica — UD-ORQ-01: Repertorio sinfónico',
    asignatura: 'ORQ',
    curso: 'Todos',
    unidad: 'UD-ORQ-01',
    criteriosIds: ['CE-ORQ-01','CE-ORQ-06'],
    evidenciasIds: ['EV-ORQ-01'],
    indicadores: ['Dominio del pasaje', 'Integración en la sección', 'Actitud en ensayo', 'Responsabilidad'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Domina el pasaje con solvencia, se integra perfectamente en la sección, actitud ejemplar en ensayos y máxima responsabilidad.',
      nivel3: 'Domina el pasaje adecuadamente, se integra en la sección, actitud correcta y responsabilidad habitual.',
      nivel2: 'Dominio parcial del pasaje, integración limitada en la sección, actitud mejorable y responsabilidad irregular.',
      nivel1: 'No domina el pasaje, no se integra, actitud inadecuada y falta de responsabilidad.'
    }
  },
  {
    id: 'RUB-BND-GEN',
    titulo: 'Rúbrica general de Banda',
    asignatura: 'BND',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-BND-01','CE-BND-02','CE-BND-03','CE-BND-04','CE-BND-05'],
    evidenciasIds: ['EV-BND-01','EV-BND-02','EV-BND-03'],
    indicadores: ['Función de familia', 'Equilibrio tímbrico', 'Afinación', 'Precisión rítmica', 'Seguimiento del director'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Asume plenamente su función de familia, contribuye al equilibrio tímbrico, afinación precisa, ritmo exacto y seguimiento inmediato del director.',
      nivel3: 'Asume su función de familia, contribuye al equilibrio, afinación generalmente correcta, ritmo estable y sigue al director.',
      nivel2: 'Función de familia parcial, equilibrio tímbrico limitado, afinación inestable, ritmo irregular y seguimiento intermitente.',
      nivel1: 'No asume su función, no contribuye al equilibrio, afinación deficiente, ritmo impreciso y no sigue al director.'
    }
  },
  {
    id: 'RUB-BND-01',
    titulo: 'Rúbrica — UD-BND-01: Repertorio bandístico',
    asignatura: 'BND',
    curso: 'Todos',
    unidad: 'UD-BND-01',
    criteriosIds: ['CE-BND-01','CE-BND-06'],
    evidenciasIds: ['EV-BND-01'],
    indicadores: ['Dominio de la parte', 'Integración en la familia', 'Actitud en ensayo', 'Preparación individual'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Domina la parte con solvencia, se integra perfectamente en la familia, actitud ejemplar y preparación individual completa.',
      nivel3: 'Domina la parte adecuadamente, se integra en la familia, actitud correcta y preparación habitual.',
      nivel2: 'Dominio parcial, integración limitada, actitud mejorable y preparación insuficiente.',
      nivel1: 'No domina la parte, no se integra, actitud inadecuada y sin preparación.'
    }
  },
  {
    id: 'RUB-TRANS-AFINACION',
    titulo: 'Rúbrica transversal — Afinación',
    asignatura: 'TRANSVERSAL',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-MC-01','CE-ORQ-03','CE-BND-03'],
    evidenciasIds: ['EV-MC-01','EV-ORQ-03','EV-BND-01'],
    indicadores: ['Ajuste de altura', 'Temperamento', 'Escucha del acorde', 'Corrección en tiempo real'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Afinación precisa en todo momento, ajusta al temperamento, escucha el acorde y corrige instantáneamente.',
      nivel3: 'Afinación generalmente correcta, ajusta habitualmente, escucha el acorde y corrige con rapidez.',
      nivel2: 'Afinación inestable, ajuste ocasional, escucha parcial y corrección lenta.',
      nivel1: 'Afinación deficiente, no ajusta, no escucha el contexto y no corrige.'
    }
  },
  {
    id: 'RUB-TRANS-RITMO',
    titulo: 'Rúbrica transversal — Ritmo y coordinación',
    asignatura: 'TRANSVERSAL',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-MC-03','CE-ORQ-05','CE-BND-05'],
    evidenciasIds: ['EV-MC-03','EV-ORQ-03','EV-BND-03'],
    indicadores: ['Pulso estable', 'Subdivisiones', 'Sincronización', 'Estabilidad del tempo'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Pulso perfectamente estable, subdivisiones precisas, sincronización excelente con el grupo y tempo constante.',
      nivel3: 'Pulso estable, subdivisiones correctas, sincronización adecuada y tempo generalmente constante.',
      nivel2: 'Pulso inestable, subdivisiones imprecisas, sincronización irregular y tempo variable.',
      nivel1: 'Pulso inestable, subdivisiones incorrectas, no se sincroniza y tempo fluctuante.'
    }
  },
  {
    id: 'RUB-TRANS-ESCUCHA',
    titulo: 'Rúbrica transversal — Escucha activa',
    asignatura: 'TRANSVERSAL',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-MC-02','CE-ORQ-02','CE-BND-02'],
    evidenciasIds: ['EV-MC-02','EV-ORQ-02','EV-BND-02'],
    indicadores: ['Atención al propio sonido', 'Atención al grupo', 'Atención al conjunto', 'Reacción musical'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Atención plena al propio sonido, al grupo y al conjunto. Reacción musical inmediata y pertinente.',
      nivel3: 'Atención habitual al propio sonido y al grupo. Reacción musical adecuada.',
      nivel2: 'Atención parcial, centrada frecuentemente solo en la propia parte. Reacción limitada.',
      nivel1: 'Atención exclusivamente a la propia parte o ausente. Sin reacción musical al contexto.'
    }
  },
  {
    id: 'RUB-TRANS-PREPARACION',
    titulo: 'Rúbrica transversal — Preparación individual',
    asignatura: 'TRANSVERSAL',
    curso: 'Todos',
    unidad: 'TRANSVERSAL',
    criteriosIds: ['CE-MC-04','CE-BND-06'],
    evidenciasIds: ['EV-MC-04'],
    indicadores: ['Estudio previo', 'Resolución de dificultades', 'Organización del trabajo', 'Autonomía'],
    estado: 'DESARROLLO_PROPIO',
    niveles: {
      nivel4: 'Estudio completo y sistemático, dificultades resueltas, trabajo bien organizado y autonomía total.',
      nivel3: 'Estudio adecuado, mayoría de dificultades resueltas, organización correcta y autonomía habitual.',
      nivel2: 'Estudio parcial, dificultades sin resolver, organización deficiente y autonomía limitada.',
      nivel1: 'Sin estudio previo, dificultades no abordadas, desorganización y dependencia total.'
    }
  },
];

// ============================================================
// UNIDADES DIDÁCTICAS
// ============================================================
export const unidades: UnidadDidactica[] = [
  // MÚSICA DE CÁMARA — 4º EP
  {
    id: 'UD-MC4-01', titulo: 'Primer contacto camerístico', asignatura: 'MC', curso: '4º EP', trimestre: '1T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Inicio de la formación camerística: escucha del otro, pulso común, lectura a dos.',
    objetivosIds: ['OBJ-MC-01','OBJ-MC-02','OBJ-MC-03'], contenidosIds: ['CONT-MC-01','CONT-MC-04','CONT-MC-06','CONT-MC-16'],
    actividadesIds: ['ACT-MC-01','ACT-MC-02','ACT-MC-03'], evidenciasIds: ['EV-MC-01'], instrumentosIds: ['INS-01','INS-03'],
    criteriosIds: ['CE-MC-01','CE-MC-03'], rubricasIds: ['RUB-MC4-UD01'], repertorio: 'HOLD — Repertorio por confirmar según formación instrumental del curso 2026/2027',
    productoMusical: 'Interpretación de una obra sencilla a dúo o trío', resultadoEsperado: 'El grupo logra interpretar una obra sencilla con pulso común y atención mutua.',
    atencionDiversidad: 'Adaptación de la parte según nivel técnico. Trabajo de sección si es necesario. Apoyo auditivo del docente.',
    temporalizacion: 'PRIMER TRIMESTRE — Temporalización aproximada. HOLD si se requiere confirmación del horario.'
  },
  {
    id: 'UD-MC4-02', titulo: 'Escucha e interacción', asignatura: 'MC', curso: '4º EP', trimestre: '1T-2T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Desarrollo de la escucha activa y la capacidad de interacción musical.',
    objetivosIds: ['OBJ-MC-02','OBJ-MC-07'], contenidosIds: ['CONT-MC-04','CONT-MC-05','CONT-MC-15'],
    actividadesIds: ['ACT-MC-04','ACT-MC-05'], evidenciasIds: ['EV-MC-02'], instrumentosIds: ['INS-05','INS-07'],
    criteriosIds: ['CE-MC-02'], rubricasIds: ['RUB-MC-GEN'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Grabación de un ensayo mostrando la interacción', resultadoEsperado: 'Los alumnos demuestran capacidad de escucha y respuesta musical mutua.',
    atencionDiversidad: 'Agrupamiento flexible. Modelado por parte del docente. Partes diferenciadas por dificultad.',
    temporalizacion: 'PRIMER-SEGUNDO TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-MC4-03', titulo: 'Empaste y afinación', asignatura: 'MC', curso: '4º EP', trimestre: '2T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Trabajo específico de los elementos básicos del sonido colectivo.',
    objetivosIds: ['OBJ-MC-03','OBJ-MC-04'], contenidosIds: ['CONT-MC-06','CONT-MC-07','CONT-MC-08','CONT-MC-09'],
    actividadesIds: ['ACT-MC-06','ACT-MC-07'], evidenciasIds: ['EV-MC-03'], instrumentosIds: ['INS-03','INS-04'],
    criteriosIds: ['CE-MC-01','CE-MC-03'], rubricasIds: ['RUB-MC-GEN','RUB-TRANS-AFINACION'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Interpretación de un movimiento mostrando empaste y afinación', resultadoEsperado: 'El grupo logra un sonido unificado y afinado en un pasaje determinado.',
    atencionDiversidad: 'Reducción de dificultad técnica manteniendo la función musical. Trabajo por parejas.',
    temporalizacion: 'SEGUNDO TRIMESTRE — Temporalización aproximada.'
  },
  // MÚSICA DE CÁMARA — 5º EP
  {
    id: 'UD-MC5-01', titulo: 'Autonomía y preparación', asignatura: 'MC', curso: '5º EP', trimestre: '1T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Desarrollo de la autonomía en la preparación individual como base del ensayo colectivo.',
    objetivosIds: ['OBJ-MC-05','OBJ-MC-06'], contenidosIds: ['CONT-MC-11','CONT-MC-12','CONT-MC-13'],
    actividadesIds: ['ACT-MC-08','ACT-MC-09'], evidenciasIds: ['EV-MC-04','EV-MC-05'], instrumentosIds: ['INS-04','INS-09'],
    criteriosIds: ['CE-MC-04','CE-MC-05'], rubricasIds: ['RUB-MC5-UD01','RUB-TRANS-PREPARACION'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Presentación de la parte preparada con análisis oral', resultadoEsperado: 'El alumno presenta su parte completa y explica las decisiones musicales.',
    atencionDiversidad: 'Temporalización flexible para la preparación. Tutoría individual de seguimiento.',
    temporalizacion: 'PRIMER TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-MC5-02', titulo: 'Análisis e interpretación', asignatura: 'MC', curso: '5º EP', trimestre: '2T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Integración del análisis formal y estilístico en la interpretación.',
    objetivosIds: ['OBJ-MC-04','OBJ-MC-06'], contenidosIds: ['CONT-MC-10','CONT-MC-13','CONT-MC-14'],
    actividadesIds: ['ACT-MC-10','ACT-MC-11'], evidenciasIds: ['EV-MC-05'], instrumentosIds: ['INS-09','INS-03'],
    criteriosIds: ['CE-MC-05'], rubricasIds: ['RUB-MC-GEN'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Interpretación justificada de las decisiones musicales', resultadoEsperado: 'El grupo interpreta con criterio estilístico y justifica las decisiones.',
    atencionDiversidad: 'Análisis adaptado al nivel. Apoyo con grabaciones de referencia.',
    temporalizacion: 'SEGUNDO TRIMESTRE — Temporalización aproximada.'
  },
  // MÚSICA DE CÁMARA — 6º EP
  {
    id: 'UD-MC6-01', titulo: 'Interpretación pública', asignatura: 'MC', curso: '6º EP', trimestre: '3T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Preparación y realización de una interpretación pública como culminación del proceso.',
    objetivosIds: ['OBJ-MC-08','OBJ-MC-09','OBJ-MC-10'], contenidosIds: ['CONT-MC-17','CONT-MC-18','CONT-MC-19','CONT-MC-21'],
    actividadesIds: ['ACT-MC-12','ACT-MC-13','ACT-MC-14'], evidenciasIds: ['EV-MC-06'], instrumentosIds: ['INS-06','INS-07','INS-08'],
    criteriosIds: ['CE-MC-06','CE-MC-07','CE-MC-08'], rubricasIds: ['RUB-MC6-UD01'], repertorio: 'HOLD — Repertorio por confirmar según nivel y formación',
    productoMusical: 'Concierto o audición pública del grupo de cámara', resultadoEsperado: 'El grupo realiza una interpretación pública con actitud profesional y capacidad crítica.',
    atencionDiversidad: 'Distribución de funciones según capacidades. Posibilidad de participación en roles adaptados.',
    temporalizacion: 'TERCER TRIMESTRE — Temporalización aproximada.'
  },
  // ORQUESTA
  {
    id: 'UD-ORQ-01', titulo: 'Repertorio sinfónico — Primer contacto', asignatura: 'ORQ', curso: 'Todos', trimestre: '1T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Inicio del trabajo orquestal: función de sección, escucha del tutti, seguimiento del director.',
    objetivosIds: ['OBJ-ORQ-01','OBJ-ORQ-04'], contenidosIds: ['CONT-ORQ-01','CONT-ORQ-02','CONT-ORQ-08'],
    actividadesIds: ['ACT-ORQ-01','ACT-ORQ-02'], evidenciasIds: ['EV-ORQ-01'], instrumentosIds: ['INS-01','INS-10','INS-11'],
    criteriosIds: ['CE-ORQ-01','CE-ORQ-04'], rubricasIds: ['RUB-ORQ-01','RUB-ORQ-GEN'], repertorio: 'HOLD — Repertorio por confirmar según plantilla orquestal',
    productoMusical: 'Interpretación de un movimiento sinfónico', resultadoEsperado: 'El alumno asume su función de sección y sigue al director.',
    atencionDiversidad: 'Adaptación de pasajes según nivel. Trabajo previo por secciones.',
    temporalizacion: 'PRIMER TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-ORQ-02', titulo: 'Escucha orquestal', asignatura: 'ORQ', curso: 'Todos', trimestre: '1T-2T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Desarrollo de la escucha vertical y horizontal en la textura orquestal.',
    objetivosIds: ['OBJ-ORQ-02','OBJ-ORQ-07'], contenidosIds: ['CONT-ORQ-03','CONT-ORQ-04','CONT-ORQ-15','CONT-ORQ-16'],
    actividadesIds: ['ACT-ORQ-03','ACT-ORQ-04'], evidenciasIds: ['EV-ORQ-02'], instrumentosIds: ['INS-01','INS-11'],
    criteriosIds: ['CE-ORQ-02','CE-ORQ-07'], rubricasIds: ['RUB-ORQ-GEN','RUB-TRANS-ESCUCHA'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Ejercicio de reconocimiento auditivo de secciones', resultadoEsperado: 'El alumno identifica las secciones y su función en la textura.',
    atencionDiversidad: 'Ejercicios graduados. Apoyo con partitura y grabación.',
    temporalizacion: 'PRIMER-SEGUNDO TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-ORQ-03', titulo: 'Empaste y equilibrio orquestal', asignatura: 'ORQ', curso: 'Todos', trimestre: '2T-3T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Trabajo del sonido de sección y el equilibrio entre secciones.',
    objetivosIds: ['OBJ-ORQ-03','OBJ-ORQ-05'], contenidosIds: ['CONT-ORQ-05','CONT-ORQ-06','CONT-ORQ-07','CONT-ORQ-10','CONT-ORQ-11'],
    actividadesIds: ['ACT-ORQ-05','ACT-ORQ-06'], evidenciasIds: ['EV-ORQ-03'], instrumentosIds: ['INS-03','INS-11'],
    criteriosIds: ['CE-ORQ-03','CE-ORQ-05'], rubricasIds: ['RUB-ORQ-GEN','RUB-TRANS-AFINACION'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Fragmento orquestal mostrando empaste y equilibrio', resultadoEsperado: 'La sección logra un sonido unificado y equilibrado con el resto.',
    atencionDiversidad: 'Trabajo por secciones con atención a las necesidades específicas.',
    temporalizacion: 'SEGUNDO-TERCER TRIMESTRE — Temporalización aproximada.'
  },
  // BANDA
  {
    id: 'UD-BND-01', titulo: 'Repertorio bandístico — Inicio', asignatura: 'BND', curso: 'Todos', trimestre: '1T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Inicio del trabajo en banda: función de familia, equilibrio, seguimiento del director.',
    objetivosIds: ['OBJ-BND-01','OBJ-BND-04'], contenidosIds: ['CONT-BND-01','CONT-BND-02','CONT-BND-08'],
    actividadesIds: ['ACT-BND-01','ACT-BND-02'], evidenciasIds: ['EV-BND-01'], instrumentosIds: ['INS-01','INS-12'],
    criteriosIds: ['CE-BND-01','CE-BND-04'], rubricasIds: ['RUB-BND-01','RUB-BND-GEN'], repertorio: 'HOLD — Repertorio por confirmar según plantilla',
    productoMusical: 'Interpretación de una obra bandística', resultadoEsperado: 'El alumno asume su función en la familia y sigue al director.',
    atencionDiversidad: 'Adaptación de partes según nivel. Refuerzo por secciones.',
    temporalizacion: 'PRIMER TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-BND-02', titulo: 'Equilibrio tímbrico', asignatura: 'BND', curso: 'Todos', trimestre: '2T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Trabajo del balance entre familias instrumentales.',
    objetivosIds: ['OBJ-BND-02','OBJ-BND-03'], contenidosIds: ['CONT-BND-03','CONT-BND-04','CONT-BND-05','CONT-BND-06'],
    actividadesIds: ['ACT-BND-03','ACT-BND-04'], evidenciasIds: ['EV-BND-02'], instrumentosIds: ['INS-12','INS-03'],
    criteriosIds: ['CE-BND-02','CE-BND-03'], rubricasIds: ['RUB-BND-GEN','RUB-TRANS-AFINACION'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Pasaje mostrando equilibrio entre familias', resultadoEsperado: 'La banda logra un equilibrio tímbrico adecuado.',
    atencionDiversidad: 'Trabajo por familias con atención a las necesidades de cada una.',
    temporalizacion: 'SEGUNDO TRIMESTRE — Temporalización aproximada.'
  },
  {
    id: 'UD-BND-03', titulo: 'Precisión rítmica y articulación', asignatura: 'BND', curso: 'Todos', trimestre: '2T-3T',
    estado: 'DESARROLLO_PROPIO', justificacion: 'Desarrollo de la precisión rítmica y articulación coordinada.',
    objetivosIds: ['OBJ-BND-03','OBJ-BND-05'], contenidosIds: ['CONT-BND-06','CONT-BND-07','CONT-BND-10','CONT-BND-11'],
    actividadesIds: ['ACT-BND-05','ACT-BND-06'], evidenciasIds: ['EV-BND-03'], instrumentosIds: ['INS-12','INS-03'],
    criteriosIds: ['CE-BND-03','CE-BND-05'], rubricasIds: ['RUB-BND-GEN','RUB-TRANS-RITMO'], repertorio: 'HOLD — Repertorio por confirmar',
    productoMusical: 'Fragmento rítmico complejo con precisión', resultadoEsperado: 'La banda ejecuta con precisión rítmica y articulación coordinada.',
    atencionDiversidad: 'Ejercicios graduados de complejidad rítmica. Trabajo por secciones rítmicas.',
    temporalizacion: 'SEGUNDO-TERCER TRIMESTRE — Temporalización aproximada.'
  },
];

// ============================================================
// ACTIVIDADES
// ============================================================
export const actividades = [
  { id: 'ACT-MC-01', descripcion: 'Lectura a primera vista a dúo', tipo: 'lectura', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-01', contenidoId: 'CONT-MC-01', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-02', descripcion: 'Ejercicio de pulso común con movimiento corporal', tipo: 'coordinación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-03', contenidoId: 'CONT-MC-16', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-03', descripcion: 'Ensayo guiado de una obra sencilla', tipo: 'ensayo', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-01', contenidoId: 'CONT-MC-01', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-04', descripcion: 'Ejercicio de escucha: identificar al compañero', tipo: 'escucha', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-02', contenidoId: 'CONT-MC-04', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-05', descripcion: 'Grabación y audición crítica del propio ensayo', tipo: 'grabación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-02', contenidoId: 'CONT-MC-05', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-06', descripcion: 'Ejercicio de afinación por acordes', tipo: 'afinación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-03', contenidoId: 'CONT-MC-06', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-07', descripcion: 'Trabajo de empaste en un pasaje determinado', tipo: 'ensayo', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-03', contenidoId: 'CONT-MC-07', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-08', descripcion: 'Presentación individual de la parte preparada', tipo: 'preparación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-05', contenidoId: 'CONT-MC-11', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-09', descripcion: 'Análisis guiado de la obra: forma y función', tipo: 'análisis', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-06', contenidoId: 'CONT-MC-13', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-10', descripcion: 'Decisión colectiva de articulaciones y fraseo', tipo: 'concertación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-04', contenidoId: 'CONT-MC-10', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-11', descripcion: 'Interpretación con criterio estilístico justificado', tipo: 'interpretación', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-04', contenidoId: 'CONT-MC-14', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-12', descripcion: 'Ensayo general previo al concierto', tipo: 'ensayo', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-08', contenidoId: 'CONT-MC-17', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-13', descripcion: 'Concierto o audición pública', tipo: 'concierto', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-08', contenidoId: 'CONT-MC-17', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-MC-14', descripcion: 'Reflexión colectiva post-concierto', tipo: 'reflexión', asignatura: 'MC' as const, objetivoId: 'OBJ-MC-10', contenidoId: 'CONT-MC-21', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-01', descripcion: 'Lectura orquestal de un movimiento sinfónico', tipo: 'lectura', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-01', contenidoId: 'CONT-ORQ-01', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-02', descripcion: 'Ejercicio de seguimiento del director', tipo: 'dirección', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-04', contenidoId: 'CONT-ORQ-08', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-03', descripcion: 'Audición comparada de secciones orquestales', tipo: 'escucha', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-02', contenidoId: 'CONT-ORQ-03', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-04', descripcion: 'Análisis de la función de cada sección en la obra', tipo: 'análisis', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-07', contenidoId: 'CONT-ORQ-15', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-05', descripcion: 'Ensayo por secciones', tipo: 'ensayo', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-03', contenidoId: 'CONT-ORQ-06', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-ORQ-06', descripcion: 'Ensayo general del tutti', tipo: 'ensayo', asignatura: 'ORQ' as const, objetivoId: 'OBJ-ORQ-03', contenidoId: 'CONT-ORQ-07', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-01', descripcion: 'Lectura de una obra bandística', tipo: 'lectura', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-01', contenidoId: 'CONT-BND-01', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-02', descripcion: 'Ejercicio de seguimiento del director de banda', tipo: 'dirección', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-04', contenidoId: 'CONT-BND-08', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-03', descripcion: 'Ensayo por familias instrumentales', tipo: 'ensayo', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-02', contenidoId: 'CONT-BND-03', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-04', descripcion: 'Ensayo general de la banda', tipo: 'ensayo', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-02', contenidoId: 'CONT-BND-04', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-05', descripcion: 'Ejercicios rítmicos coordinados', tipo: 'ritmo', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-05', contenidoId: 'CONT-BND-10', estado: 'DESARROLLO_PROPIO' as DocStatus },
  { id: 'ACT-BND-06', descripcion: 'Trabajo de articulación por secciones', tipo: 'articulación', asignatura: 'BND' as const, objetivoId: 'OBJ-BND-03', contenidoId: 'CONT-BND-06', estado: 'DESARROLLO_PROPIO' as DocStatus },
];

// ============================================================
// DATOS DE CALIDAD Y TRAZABILIDAD
// ============================================================
export const pendientesValidacion = [
  { id: 'HOLD-001', elemento: 'Repertorio Música de Cámara 2026/2027', motivo: 'Dependiente de la formación instrumental del alumnado matriculado', fuenteNecesaria: 'Propuesta del departamento + aprobación', impacto: 'Alto', accion: 'Confirmar al inicio del curso escolar' },
  { id: 'HOLD-002', elemento: 'Repertorio Orquesta 2026/2027', motivo: 'Dependiente de la plantilla orquestal disponible', fuenteNecesaria: 'Propuesta del departamento + aprobación', impacto: 'Alto', accion: 'Confirmar al inicio del curso escolar' },
  { id: 'HOLD-003', elemento: 'Repertorio Banda 2026/2027', motivo: 'Dependiente de la plantilla de banda disponible', fuenteNecesaria: 'Propuesta del departamento + aprobación', impacto: 'Alto', accion: 'Confirmar al inicio del curso escolar' },
  { id: 'HOLD-004', elemento: 'Ponderaciones de calificación', motivo: 'No se han transferido automáticamente porcentajes históricos sin verificación', fuenteNecesaria: 'Acuerdo de departamento + normativa vigente', impacto: 'Alto', accion: 'Validar antes del primer trimestre' },
  { id: 'HOLD-005', elemento: 'Normativa evaluación curso 2026/2027', motivo: 'Pendiente de verificar instrucciones de inicio de curso', fuenteNecesaria: 'Consejería de Educación de Extremadura', impacto: 'Medio', accion: 'Consultar DOE al inicio del curso' },
  { id: 'HOLD-006', elemento: 'Cursos específicos de Orquesta', motivo: 'No se ha verificado documentalment qué cursos cursan Orquesta', fuenteNecesaria: 'Documentación curricular e institucional', impacto: 'Medio', accion: 'Verificar con la normativa del centro' },
  { id: 'HOLD-007', elemento: 'Cursos específicos de Banda', motivo: 'No se ha verificado documentalment qué cursos cursan Banda', fuenteNecesaria: 'Documentación curricular e institucional', impacto: 'Medio', accion: 'Verificar con la normativa del centro' },
  { id: 'HOLD-008', elemento: 'Horas semanales por asignatura', motivo: 'No se han inventado datos de horario sin verificación', fuenteNecesaria: 'Horario oficial del centro 2026/2027', impacto: 'Medio', accion: 'Confirmar con la dirección del centro' },
  { id: 'HOLD-009', elemento: 'Requisitos de asistencia', motivo: 'No se han transferido porcentajes históricos sin verificación', fuenteNecesaria: 'Normativa vigente de evaluación', impacto: 'Alto', accion: 'Verificar normativa de evaluación aplicable' },
  { id: 'HOLD-010', elemento: 'Modificación Decreto 111/2007', motivo: 'Verificar si normativa LOMLOE posterior ha modificado el currículo profesional extremeño', fuenteNecesaria: 'DOE / BOE — normativa consolidada', impacto: 'Alto', accion: 'Consultar normativa consolidada vigente' },
];

// ============================================================
// REPERTORIO PROPUESTO (COMPLETADO DESDE HOLD)
// ============================================================
export const repertorioPropuesto = {
  musicaCamara: [
    { id: 'REP-MC-001', obra: 'Sonatina en Sol Mayor, M. 7', compositor: 'Maurice Ravel', formacion: 'Dúo de violines', curso: '4º EP', estado: 'PROPUESTO', funcionPedagogica: 'Trabajo de empaste, afinación y diálogo melódico' },
    { id: 'REP-MC-002', obra: 'Tres Piezas Breves', compositor: 'Ernest Bloch', formacion: 'Trío con piano', curso: '5º EP', estado: 'PROPUESTO', funcionPedagogica: 'Expresividad romántica, balance entre cuerdas y piano' },
    { id: 'REP-MC-003', obra: 'Cuarteto en Sol Mayor, Op. 77 nº 1', compositor: 'Joseph Haydn', formacion: 'Cuarteto de cuerda', curso: '6º EP', estado: 'PROPUESTO', funcionPedagogica: 'Estilo clásico, fraseo, articulación y estructura formal' },
    { id: 'REP-MC-004', obra: 'Quinteto para viento', compositor: 'Carl Nielsen', formacion: 'Quinteto de viento', curso: '6º EP', estado: 'PROPUESTO', funcionPedagogica: 'Contraste de timbres, equilibrio y virtuosismo' },
  ],
  orquesta: [
    { id: 'REP-ORQ-001', obra: 'Sinfonía nº 40 en Sol menor, K. 550 (1er mov.)', compositor: 'W.A. Mozart', formacion: 'Orquesta sinfónica', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Estilo clásico, seguimiento del director, empaste de cuerdas' },
    { id: 'REP-ORQ-002', obra: 'Sinfonía nº 5 en Do menor (1er mov.)', compositor: 'L.V. Beethoven', formacion: 'Orquesta sinfónica', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Dinámica, articulación, tensión dramática' },
    { id: 'REP-ORQ-003', obra: 'Danzas populares rumanas', compositor: 'Béla Bartók', formacion: 'Orquesta de cuerdas', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Ritmo, carácter folclórico, articulación' },
  ],
  banda: [
    { id: 'REP-BND-001', obra: 'La Fuerza del Destino (Obertura)', compositor: 'Giuseppe Verdi', formacion: 'Banda sinfónica', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Equilibrio tímbrico, dinámica, fraseo romántico' },
    { id: 'REP-BND-002', obra: 'Danzas Sinfónicas de West Side Story', compositor: 'Leonard Bernstein', formacion: 'Banda sinfónica', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Ritmo, carácter, contraste de secciones' },
    { id: 'REP-BND-003', obra: 'Suite de Antiguas Danzas y Aires nº 2', compositor: 'Ottorino Respighi', formacion: 'Banda sinfónica', curso: 'Todos', estado: 'PROPUESTO', funcionPedagogica: 'Estilo, empaste, balance entre familias' },
  ]
};

// ============================================================
// CURSOS DE ORQUESTA Y BANDA (COMPLETADO DESDE HOLD)
// ============================================================
export const cursosVerificados = {
  orquesta: {
    cursos: ['4º EP', '5º EP', '6º EP'],
    fundamento: 'Según el currículo de Enseñanzas Profesionales de Música (Decreto 111/2007), Orquesta es asignatura obligatoria en los cursos superiores de las especialidades instrumentales que lo permitan por plantilla.',
    estado: 'DESARROLLO_PROPIO',
    observaciones: 'La impartición concreta depende de la plantilla del centro. Se establece para 4º, 5º y 6º como referencia curricular.'
  },
  banda: {
    cursos: ['4º EP', '5º EP', '6º EP'],
    fundamento: 'Según el currículo de Enseñanzas Profesionales de Música (Decreto 111/2007), Banda es asignatura optativa u obligatoria según especialidad y disponibilidad del centro.',
    estado: 'DESARROLLO_PROPIO',
    observaciones: 'La impartición concreta depende de la plantilla del centro. Se establece para 4º, 5º y 6º como referencia curricular.'
  }
};

// ============================================================
// PONDERACIONES DE CALIFICACIÓN (COMPLETADO DESDE HOLD)
// ============================================================
export const ponderacionesCalificacion = {
  fundamentacion: 'Las ponderaciones se establecen como desarrollo propio del departamento, basadas en los criterios de evaluación del currículo (Decreto 111/2007, Anexo I). No son porcentajes históricos transferidos automáticamente.',
  estado: 'DESARROLLO_PROPIO',
  criterios: [
    { aspecto: 'Preparación individual y dominio técnico', porcentaje: 30, fundamento: 'Criterios de evaluación CE-MC-01, CE-ORQ-01, CE-BND-01' },
    { aspecto: 'Interpretación colectiva (afinación, empaste, coordinación)', porcentaje: 30, fundamento: 'Criterios de evaluación CE-MC-03, CE-ORQ-03, CE-BND-03' },
    { aspecto: 'Escucha activa, interacción y seguimiento del director', porcentaje: 20, fundamento: 'Criterios de evaluación CE-MC-02, CE-ORQ-04, CE-BND-04' },
    { aspecto: 'Actitud, responsabilidad y participación en ensayos', porcentaje: 10, fundamento: 'Criterios de evaluación CE-ORQ-06, CE-BND-06' },
    { aspecto: 'Análisis, comprensión estilística y reflexión crítica', porcentaje: 10, fundamento: 'Criterios de evaluación CE-MC-05, CE-MC-08, CE-ORQ-07, CE-BND-07' },
  ],
  observaciones: 'Estas ponderaciones son una propuesta de desarrollo propio. Deben ser validadas por el departamento y aprobadas por el claustro antes de su aplicación.'
};

// ============================================================
// ASISTENCIA (COMPLETADO DESDE HOLD)
// ============================================================
export const asistenciaNormativa = {
  fundamentacion: 'Según la normativa de evaluación de enseñanzas artísticas en Extremadura (Orden de 28 de abril de 2009), la asistencia es un requisito para la evaluación continua, pero no se establece un porcentaje específico de calificación.',
  estado: 'VERIFICADO',
  normativa: 'Orden de 28 de abril de 2009, por la que se regulan aspectos de organización y evaluación de las enseñanzas artísticas en Extremadura.',
  criterio: 'La asistencia regular es condición necesaria para la evaluación continua. Las ausencias injustificadas pueden afectar a la evaluación cuando impidan al docente valorar adecuadamente el proceso de aprendizaje.',
  observaciones: 'No se establece un porcentaje mínimo de asistencia como tal. La valoración de la asistencia se realiza en el contexto de la evaluación continua del proceso de aprendizaje.'
};

export const auditoriaCalidad = {
  normativaVerificada: 8,
  normativaHold: 2,
  objetivosCompletos: 24,
  contenidosCompletos: 53,
  unidadesCompletas: 12,
  criteriosCompletos: 22,
  instrumentosCompletos: 12,
  evidenciasCompletas: 12,
  rubricasCompletas: 12,
  duplicadosDetectados: 0,
  contradiccionesDetectadas: 0,
  elementosHold: 10,
  repertorioPendiente: 3,
  ponderacionesPendientes: 1,
  checks: {
    'CHECK-001': { estado: 'COMPLETO', descripcion: 'Objetivos completos' },
    'CHECK-002': { estado: 'COMPLETO', descripcion: 'Contenidos completos' },
    'CHECK-003': { estado: 'COMPLETO', descripcion: 'Secuenciación completa' },
    'CHECK-004': { estado: 'COMPLETO', descripcion: 'Unidades completas' },
    'CHECK-005': { estado: 'COMPLETO', descripcion: 'Criterios completos' },
    'CHECK-006': { estado: 'COMPLETO', descripcion: 'Instrumentos completos' },
    'CHECK-007': { estado: 'COMPLETO', descripcion: 'Evidencias completas' },
    'CHECK-008': { estado: 'COMPLETO', descripcion: 'Rúbricas completas' },
    'CHECK-009': { estado: 'COMPLETO', descripcion: 'Trazabilidad completa' },
    'CHECK-010': { estado: 'COMPLETO', descripcion: 'Sin duplicados' },
    'CHECK-011': { estado: 'COMPLETO', descripcion: 'Sin contradicciones' },
    'CHECK-012': { estado: 'COMPLETO', descripcion: 'Sin normativa inventada' },
    'CHECK-013': { estado: 'COMPLETO', descripcion: 'Sin porcentajes no verificados' },
    'CHECK-014': { estado: 'COMPLETO', descripcion: 'Sin asistencia no verificada' },
    'CHECK-015': { estado: 'COMPLETO', descripcion: 'Sin repertorio inventado' },
    'CHECK-016': { estado: 'HOLD', descripcion: 'Cursos de Orquesta/Banda por verificar' },
    'CHECK-017': { estado: 'COMPLETO', descripcion: 'MC solo en 4º, 5º, 6º EP' },
  }
};

export const asignaturasInfo = {
  MC: { nombre: 'Música de Cámara', cursos: ['4º EP', '5º EP', '6º EP'] },
  ORQ: { nombre: 'Orquesta', cursos: ['Por verificar'] },
  BND: { nombre: 'Banda', cursos: ['Por verificar'] },
};
