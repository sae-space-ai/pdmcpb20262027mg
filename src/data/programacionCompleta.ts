// ============================================================
// PROGRAMACIÓN DIDÁCTICA 2026/2027 - CORPUS COMPLETO
// MÚSICA DE CÁMARA · BANDA · ORQUESTA
// ENSEÑANZAS PROFESIONALES DE MÚSICA · EXTREMADURA
// ============================================================

export type DocStatus = 'VERIFICADO' | 'VERIFICADO-MODIFICADO' | 'DOCUMENTADO' | 'DESARROLLO_PROPIO' | 'PROPUESTO' | 'HISTORICO' | 'HOLD';
export type DocCategory = 'NORMA_VIGENTE' | 'TEXTO_OFICIAL' | 'DESARROLLO_PROPIO' | 'EVIDENCIA' | 'HOLD';

export interface Apartado {
  id: string;
  numero: string;
  titulo: string;
  finalidad: string;
  desarrollo: string;
  aplicacionMC?: string;
  aplicacionBanda?: string;
  aplicacionOrquesta?: string;
  progresion?: string;
  relacionCurricular?: string;
  evidencias?: string;
  instrumentos?: string;
  trazabilidad?: string;
  estado: DocCategory;
  subapartados?: Subapartado[];
}

export interface Subapartado {
  id: string;
  numero: string;
  titulo: string;
  contenido: string;
  estado: DocCategory;
}

// ============================================================
// 1. IDENTIFICACIÓN Y CONTEXTUALIZACIÓN
// ============================================================
export const apartado1: Apartado = {
  id: 'AP-01',
  numero: '1',
  titulo: 'IDENTIFICACIÓN Y CONTEXTUALIZACIÓN',
  finalidad: 'Establecer la identidad documental de la programación, su marco institucional y su función dentro del sistema educativo.',
  desarrollo: 'La presente programación didáctica constituye el documento curricular oficial del Departamento de Música de Cámara, Banda y Orquesta para el curso académico 2026/2027. Define los elementos curriculares, metodológicos y evaluativos de las tres materias de agrupaciones musicales en las Enseñanzas Profesionales de Música en Extremadura.',
  aplicacionMC: 'Música de Cámara se imparte en 4.º, 5.º y 6.º de Enseñanzas Profesionales, conforme al Decreto 111/2007.',
  aplicacionBanda: 'Banda se imparte en 1.º a 6.º de Enseñanzas Profesionales para las especialidades de viento y percusión.',
  aplicacionOrquesta: 'Orquesta se imparte en 1.º a 6.º de Enseñanzas Profesionales para las especialidades que lo permitan por plantilla.',
  estado: 'DESARROLLO_PROPIO',
  subapartados: [
    {
      id: 'AP-01.01',
      numero: '1.1',
      titulo: 'Denominación',
      contenido: `Denominación oficial: Programación Didáctica de Música de Cámara, Banda y Orquesta.
Enseñanzas: Profesionales de Música.
Curso académico: 2026/2027.
Ámbito territorial: Comunidad Autónoma de Extremadura.
Naturaleza del documento: Documento curricular de departamento.
Destinatarios: Profesorado del departamento, equipo directivo, inspección educativa.
Función institucional: Instrumento de planificación, programación, evaluación y mejora.
Relación con el departamento: Documento marco que articula la acción docente de las tres materias.
Denominación del centro: HOLD — DENOMINACIÓN DEL CENTRO PENDIENTE.`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.02',
      numero: '1.2',
      titulo: 'Enseñanzas, materias y cursos',
      contenido: `Las Enseñanzas Profesionales de Música constituyen enseñanzas de régimen especial reguladas por la LOE (modificada por LOMLOE) y desarrolladas en Extremadura por el Decreto 111/2007.

Materias objeto de programación:
• Música de Cámara: 4.º, 5.º y 6.º EP.
• Banda: 1.º, 2.º, 3.º, 4.º, 5.º y 6.º EP.
• Orquesta: 1.º, 2.º, 3.º, 4.º, 5.º y 6.º EP.

Organización de las agrupaciones:
• Música de Cámara: formaciones de dúo a noneto, con responsabilidad individual y autonomía.
• Banda: gran formación con secciones por familias instrumentales, dirigida por director.
• Orquesta: formación sinfónica con familias de cuerdas, maderas, metales y percusión.

Progresión:
• 1.º-2.º: iniciación y consolidación inicial en Banda y Orquesta.
• 3.º-4.º: desarrollo e integración.
• 5.º-6.º: autonomía avanzada, transferencia y preparación para continuidad.

Distribución por cursos:

| Materia | 1.º | 2.º | 3.º | 4.º | 5.º | 6.º |
|---------|-----|-----|-----|-----|-----|-----|
| MC | - | - | - | ✓ | ✓ | ✓ |
| Banda | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Orquesta | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

HOLD — Verificar correspondencia exacta con el referente curricular oficial.`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.03',
      numero: '1.3',
      titulo: 'Curso académico 2026/2027',
      contenido: `Periodo académico: curso 2026/2027.
Inicio y final: HOLD — FECHAS PENDIENTES DE VERIFICACIÓN OFICIAL.
Particularidades de 6.º: curso terminal, requiere especial atención a la preparación para continuidad (estudios superiores o vida profesional).
Periodización trimestral:
• Primer trimestre: septiembre-diciembre.
• Segundo trimestre: enero-marzo.
• Tercer trimestre: abril-junio.
Revisión de la programación: al final de cada trimestre y memoria final al concluir el curso.
Relación con calendario escolar: HOLD — CALENDARIO ESCOLAR 2026/2027 POR VERIFICAR.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-01.04',
      numero: '1.4',
      titulo: 'Centro, departamento y profesorado',
      contenido: `Función del centro: centro de enseñanzas artísticas profesionales.
Departamento: Departamento de Música de Cámara, Banda y Orquesta.
Profesorado: HOLD — DATOS DE PROFESORADO PENDIENTES.
Coordinación: jefe/a de departamento coordina la programación y la acción docente.
Responsabilidades:
• Profesorado: desarrollo de la programación, evaluación, atención a la diversidad.
• Jefatura de departamento: coordinación, seguimiento, memoria final.
• Equipo directivo: supervisión, aprobación, recursos.
Órganos de participación: claustro, consejo escolar, departamento.
Documentación institucional: programación, memorias, actas de departamento.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-01.05',
      numero: '1.5',
      titulo: 'Naturaleza y finalidad',
      contenido: `La programación es:
• Instrumento de planificación: define qué, cómo y cuándo enseñar.
• Instrumento de programación: concreta los elementos curriculares.
• Documento curricular: desarrolla el currículo oficial.
• Documento de coordinación: articula la acción del departamento.
• Documento de evaluación: establece criterios, instrumentos y evidencias.
• Documento de seguimiento: permite verificar el desarrollo del curso.
• Instrumento de mejora: base para la revisión y actualización.

No confundir instrumento de planificación (documento marco) con instrumento de programación (concreción operativa).`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.06',
      numero: '1.6',
      titulo: 'Criterios de elaboración y depuración',
      contenido: `Recuperación del corpus: se parte del material curricular existente.
Depuración: eliminación de duplicidades, contradicciones y elementos obsoletos.
Clasificación documental: toda información se clasifica como NORMA VIGENTE, TEXTO OFICIAL, DESARROLLO PROPIO, EVIDENCIA o HOLD.
Control normativo: cada referencia normativa se verifica en fuente oficial.
Trazabilidad: cada elemento curricular se vincula a norma, objetivo, contenido, actividad, evidencia, instrumento y criterio.
Control de versiones: se mantiene registro de cambios.
Tratamiento HOLD: cuando un dato no está verificado, se marca HOLD y no se presenta como hecho.`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.07',
      numero: '1.7',
      titulo: 'Distinción normativa / desarrollo propio / evidencias',
      contenido: `Categorías documentales:

NORMA VIGENTE: texto legal en vigor (RD 1577/2006, Decreto 111/2007, etc.).
Ejemplo: "Los objetivos generales de las Enseñanzas Profesionales de Música se establecen en el Anexo I del RD 1577/2006."

TEXTO OFICIAL: documento oficial no normativo (instrucciones, resoluciones).
Ejemplo: "Las instrucciones de inicio de curso 2026/2027 establecen..."

DESARROLLO PROPIO: concreción pedagógica del departamento.
Ejemplo: "Las ponderaciones de calificación se establecen como desarrollo propio del departamento."

EVIDENCIA: dato verificable observable.
Ejemplo: "La grabación de la interpretación muestra el nivel de empaste."

HOLD: dato pendiente de verificación.
Ejemplo: "HOLD — FECHAS DEL CURSO ESCOLAR POR VERIFICAR."`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.08',
      numero: '1.8',
      titulo: 'Contexto institucional',
      contenido: `Organización: el centro organiza las enseñanzas según el Decreto 111/2007.
Agrupaciones: Música de Cámara, Banda y Orquesta se organizan según disponibilidad de profesorado y alumnado.
Espacios: HOLD — ESPACIOS PENDIENTES DE VERIFICACIÓN.
Recursos: HOLD — RECURSOS PENDIENTES DE VERIFICACIÓN.
Coordinación: el departamento coordina las tres materias.
Actividades: audiciones, conciertos, encuentros.
Documentos institucionivos: PGA, programaciones, memorias.

VERIFICADO: estructura curricular, materias, cursos.
NO VERIFICADO: espacios concretos, recursos específicos, profesorado.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-01.09',
      numero: '1.9',
      titulo: 'Características de las Enseñanzas Profesionales de Música',
      contenido: `Estructura: seis cursos (1.º a 6.º EP).
Especialización: el alumnado cursa una especialidad instrumental.
Progresión: de la iniciación a la autonomía avanzada.
Dimensión artística: desarrollo de la sensibilidad y expresión musical.
Dimensión formativa: formación integral del músico.
Dimensión orientadora: preparación para estudios superiores o vida profesional.
Dimensión preparatoria: consolidación de hábitos y autonomía.
Práctica individual: estudio personal del instrumento.
Práctica colectiva: Música de Cámara, Banda, Orquesta.
Autonomía: progresión de la dependencia guiada a la autonomía funcional.`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.10',
      numero: '1.10',
      titulo: 'Características de las agrupaciones',
      contenido: `Música de Cámara:
• Interacción: diálogo musical entre iguales.
• Responsabilidad individual: cada músico asume su parte.
• Diálogo musical: construcción colectiva del discurso.
• Autonomía: toma de decisiones compartida.

Banda:
• Secciones: familias instrumentales (madera, metal, percusión, saxofones).
• Familias instrumentales: equilibrio tímbrico entre familias.
• Equilibrio: balance sonoro global.
• Dirección: seguimiento del director.
• Coordinación: precisión rítmica y articulación coordinada.

Orquesta:
• Familias: cuerdas, maderas, metales, percusión.
• Planos: gestión de planos sonoros.
• Texturas: construcción del sonido orquestal.
• Funciones: rol de cada sección y atril.
• Dirección: seguimiento del director.
• Concertación: integración del tutti.`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-01.11',
      numero: '1.11',
      titulo: 'Características del alumnado',
      contenido: `Diversidad: el alumnado presenta diferentes niveles, ritmos y necesidades.
Experiencia: proceden de Enseñanzas Elementales con formación instrumental.
Nivel: nivel heterogéneo según especialidad y trayectoria.
Autonomía: progresión de la dependencia a la autonomía.
Ritmo de aprendizaje: diferente según el alumnado.
Motivación: variable, requiere atención pedagógica.
Diferencias instrumentales: cada especialidad tiene características propias.
Necesidades educativas: HOLD — DATOS DE ALUMNADO PENDIENTES.
Diagnóstico inicial: evaluación inicial al inicio del curso.
Evolución: seguimiento continuo del progreso.

No se inventan perfiles individuales.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-01.12',
      numero: '1.12',
      titulo: 'Recursos, espacios y coordinación contextual',
      contenido: `Recursos previstos:
• Partituras del repertorio.
• Instrumentos musicales.
• Atriles.
• Equipos de audio.
• Grabadoras.
• Ordenadores.

Recursos efectivamente disponibles: HOLD — RECURSOS PENDIENTES DE VERIFICACIÓN.

Espacios previstos:
• Aulas de conjunto.
• Sala de ensayos.
• Auditorio.

Espacios efectivamente disponibles: HOLD — ESPACIOS PENDIENTES DE VERIFICACIÓN.

Coordinación contextual: el departamento adapta la programación a los recursos disponibles.`,
      estado: 'HOLD'
    }
  ]
};

// ============================================================
// 2. MARCO NORMATIVO
// ============================================================
export const apartado2: Apartado = {
  id: 'AP-02',
  numero: '2',
  titulo: 'MARCO NORMATIVO',
  finalidad: 'Establecer el marco jurídico que regula las Enseñanzas Profesionales de Música y las materias objeto de programación.',
  desarrollo: 'La programación se fundamenta en la normativa estatal y autonómica vigente. Se establece un protocolo de verificación para cada referencia normativa.',
  estado: 'NORMA_VIGENTE',
  subapartados: [
    {
      id: 'AP-02.01',
      numero: '2.1',
      titulo: 'Normativa estatal',
      contenido: `Normativa estatal aplicable:

1. Ley Orgánica 2/2006, de 3 de mayo, de Educación (LOE), modificada por LOMLOE.
   - Rango: Ley orgánica.
   - Objeto: ordenación general del sistema educativo.
   - Artículos relevantes: 45-49 (Enseñanzas artísticas).
   - Estado: VIGENTE (modificada).

2. Real Decreto 1577/2006, de 22 de diciembre.
   - Rango: Real decreto.
   - Objeto: aspectos básicos del currículo de Enseñanzas Profesionales de Música.
   - Artículos relevantes: 4-8, Anexo I.
   - Estado: VIGENTE.

3. Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE).
   - Rango: Ley orgánica.
   - Objeto: modificación de la LOE.
   - Estado: VIGENTE.`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.02',
      numero: '2.2',
      titulo: 'RD 1577/2006',
      contenido: `Real Decreto 1577/2006, de 22 de diciembre, por el que se fijan los aspectos básicos del currículo de las Enseñanzas Profesionales de Música.

Objeto: establecer los aspectos básicos del currículo.
Estructura:
• Artículo 4: Objetivos generales.
• Artículo 5: Contenidos.
• Artículo 6: Criterios de evaluación.
• Artículo 7: Evaluación.
• Artículo 8: Promoción y permanencia.
• Anexo I: Objetivos, contenidos y criterios de evaluación.

Asignaturas: Lengua e Interpretación, Música de Cámara, Banda, Orquesta, etc.
Organización: seis cursos.
Evaluación: continua, formativa, integradora.
Promoción: valoración positiva de todos los objetivos.
Documentación: actas de evaluación.
Escala de calificación: Insuficiente, Suficiente, Bien, Notable, Sobresaliente.

No se atribuyen al Real Decreto contenidos que no aparezcan en el texto.`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.03',
      numero: '2.3',
      titulo: 'Decreto 111/2007',
      contenido: `Decreto 111/2007, de 22 de mayo, por el que se establece el currículo de las Enseñanzas Profesionales de Música en Extremadura.

I. Objeto: desarrollar el currículo de Enseñanzas Profesionales en Extremadura.
II. Estructura: artículos y Anexo I.
III. Finalidad: formación artística de calidad.
IV. Ordenación: seis cursos, especialidades instrumentales.
V. Objetivos generales: Anexo I.
VI. Contenidos: Anexo I.
VII. Criterios: Anexo I.
VIII. Anexos: Anexo I (currículo completo).
IX. Especialidad Clarinete: currículo específico.
X. Materias colectivas: Música de Cámara, Banda, Orquesta.
XI. Distribución: por cursos y especialidades.
XII. Carga lectiva: HOLD — CARGA LECTIVA POR VERIFICAR.

Cada afirmación se localiza en el texto oficial del DOE.`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.04',
      numero: '2.4',
      titulo: 'Normativa autonómica complementaria',
      contenido: `Decreto 110/2007, de 22 de mayo:
- Objeto: currículo de Enseñanzas ELEMENTALES de Música.
- Ámbito: Enseñanzas Elementales, NO Profesionales.
- Estado: VIGENTE (modificado por Decreto 54/2022).

Decreto 54/2022, de 18 de mayo:
- Objeto: modifica el Decreto 110/2007 (ELEMENTALES).
- IMPORTANTE: NO modifica el Decreto 111/2007 (PROFESIONALES).
- Estado: VIGENTE.

Orden de 28 de abril de 2009:
- Objeto: pruebas de acceso y matriculación.
- Estado: VIGENTE.

Ley 4/2011, de 24 de marzo:
- Objeto: Educación de Extremadura.
- Artículos relevantes: 37-40 (Enseñanzas artísticas).
- Estado: VIGENTE.

No se asume que una norma modifica otra sin comprobarlo.`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.05',
      numero: '2.5',
      titulo: 'Normativa de evaluación',
      contenido: `Evaluación continua: seguimiento del proceso de aprendizaje (RD 1577/2006, art. 7).
Evaluación formativa: retroalimentación para la mejora.
Evaluación final: valoración del logro de objetivos.
Promoción: requiere valoración positiva de todos los objetivos (RD 1577/2006, art. 8).
Recuperación: convocatoria extraordinaria en junio (RD 1577/2006, art. 13).
Pruebas extraordinarias: para materias no superadas.
Documentación: actas de evaluación.
Comunicación: al alumnado y familias.`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.06',
      numero: '2.6',
      titulo: 'Normativa de inclusión',
      contenido: `Decreto 228/2014:
- HOLD — VERIFICAR APLICACIÓN A ENSEÑANZAS ARTÍSTICAS.

Ley 11/2014:
- HOLD — VERIFICAR APLICACIÓN A ENSEÑANZAS ARTÍSTICAS.

Principios: inclusión, equidad, atención a la diversidad.
Medidas: ordinarias y específicas.
Aplicación a agrupaciones: adaptación de partes, trabajo de sección, agrupamiento flexible.
Documentación: registros de adaptación.
Coordinación: con orientadores y equipos docentes.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-02.07',
      numero: '2.7',
      titulo: 'Normativa de organización',
      contenido: `Centros: conservatorios profesionales de música.
Órganos: equipo directivo, claustro, departamento.
Departamentos: unidades de coordinación docente.
Conservatorios: centros de enseñanzas artísticas.
Organización docente: según Decreto 111/2007 y normativa de organización.
Resoluciones aplicables: HOLD — RESOLUCIONES POR VERIFICAR.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-02.08',
      numero: '2.8',
      titulo: 'Aplicación al curso 2026/2027',
      contenido: `Normativa permanente:
- RD 1577/2006.
- Decreto 111/2007.
- Ley 4/2011.

Disposiciones anuales:
- HOLD — INSTRUCCIONES DE INICIO DE CURSO 2026/2027 POR VERIFICAR.

Instrucciones específicas:
- HOLD — RESOLUCIONES ESPECÍFICAS POR VERIFICAR.

No se asume que una resolución anual existe si no ha sido verificada.`,
      estado: 'HOLD'
    },
    {
      id: 'AP-02.09',
      numero: '2.9',
      titulo: 'Jerarquía y control de vigencia',
      contenido: `Protocolo de verificación:
1. Localizar la norma.
2. Comprobar rango (ley, decreto, orden, resolución).
3. Comprobar vigencia (no derogada).
4. Comprobar modificaciones (textos consolidados).
5. Comprobar derogaciones.
6. Consultar texto consolidado (BOE/DOE).
7. Comprobar aplicación territorial (Estatal/Autonómica).
8. Registrar evidencia (URL, fecha de consulta).`,
      estado: 'DESARROLLO_PROPIO'
    },
    {
      id: 'AP-02.10',
      numero: '2.10',
      titulo: 'Tabla normativa general',
      contenido: `| ID | Norma | Fecha | Rango | Ámbito | Materia | Artículos | Estado | Evidencia | Aplicación |
|-----|-------|-------|-------|--------|---------|-----------|--------|-----------|------------|
| NORMA-01 | RD 1577/2006 | 22/12/2006 | Real Decreto | Estatal | EP Música | Art. 4-8, Anexo I | VIGENTE | BOE | Currículo básico |
| NORMA-02 | Decreto 111/2007 | 22/05/2007 | Decreto | Autonómico | EP Música | Anexo I | VIGENTE | DOE | Currículo Extremadura |
| NORMA-03 | Decreto 110/2007 | 22/05/2007 | Decreto | Autonómico | EE Música | Anexo | VIGENTE | DOE | EE (no EP) |
| NORMA-04 | Decreto 54/2022 | 18/05/2022 | Decreto | Autonómico | EE Música | Modifica 110/2007 | VIGENTE | DOE | Solo EE |
| NORMA-05 | Orden 28/04/2009 | 28/04/2009 | Orden | Autonómico | EP/EE | Acceso y matrícula | VIGENTE | DOE | Matriculación |
| NORMA-06 | Ley 4/2011 | 24/03/2011 | Ley | Autonómico | Educación | Art. 37-40 | VIGENTE | DOE | Marco general |`,
      estado: 'NORMA_VIGENTE'
    },
    {
      id: 'AP-02.11',
      numero: '2.11',
      titulo: 'Fichas normativas',
      contenido: `FICHA NORMATIVA: NORMA-1577-2006

Identificación: Real Decreto 1577/2006, de 22 de diciembre.
Título: Aspectos básicos del currículo de las Enseñanzas Profesionales de Música.
Fecha: 22/12/2006.
Órgano: Ministerio de Educación y Ciencia.
Rango: Real decreto.
Objeto: Fijar los aspectos básicos del currículo.
Artículos relevantes: 4-8, Anexo I.
Aplicación: Todo el territorio nacional.
Modificaciones: Ninguna registrada.
Vigencia: VIGENTE.
Fuente: https://www.boe.es/eli/rd/2006/12/22/1577
Estado: VERIFICADO.

FICHA NORMATIVA: NORMA-111-2007

Identificación: Decreto 111/2007, de 22 de mayo.
Título: Currículo de las Enseñanzas Profesionales de Música en Extremadura.
Fecha: 22/05/2007.
Órgano: Junta de Extremadura.
Rango: Decreto.
Objeto: Desarrollar el currículo de EP de Música.
Artículos relevantes: Anexo I.
Aplicación: Extremadura.
Modificaciones: Ninguna registrada.
Vigencia: VIGENTE.
Fuente: DOE nº 63, de 29 de mayo de 2007.
Estado: VERIFICADO.`,
      estado: 'NORMA_VIGENTE'
    }
  ]
};

// ============================================================
// ARRAY DE TODOS LOS APARTADOS
// ============================================================
export const todosLosApartados: Apartado[] = [
  apartado1,
  apartado2,
  // Los apartados 3-30 se generan dinámicamente en la interfaz
];

// ============================================================
// ESTRUCTURA DE LOS 30 APARTADOS
// ============================================================
export const estructuraApartados = [
  { numero: '1', titulo: 'IDENTIFICACIÓN Y CONTEXTUALIZACIÓN', subapartados: 12 },
  { numero: '2', titulo: 'MARCO NORMATIVO', subapartados: 11 },
  { numero: '3', titulo: 'FINALIDADES EDUCATIVAS', subapartados: 7 },
  { numero: '4', titulo: 'PRINCIPIOS PEDAGÓGICOS', subapartados: 11 },
  { numero: '5', titulo: 'COMPETENCIAS / CAPACIDADES', subapartados: 10 },
  { numero: '6', titulo: 'OBJETIVOS', subapartados: 7 },
  { numero: '7', titulo: 'CONTENIDOS', subapartados: 16 },
  { numero: '8', titulo: 'DESARROLLO DE CONTENIDOS', subapartados: 10 },
  { numero: '9', titulo: 'METODOLOGÍA', subapartados: 10 },
  { numero: '10', titulo: 'ACTIVIDADES', subapartados: 10 },
  { numero: '11', titulo: 'UNIDADES DIDÁCTICAS / SITUACIONES DE APRENDIZAJE', subapartados: 9 },
  { numero: '12', titulo: 'SECUENCIACIÓN Y TEMPORALIZACIÓN', subapartados: 16 },
  { numero: '13', titulo: 'REPERTORIO', subapartados: 9 },
  { numero: '14', titulo: 'EVALUACIÓN', subapartados: 14 },
  { numero: '15', titulo: 'CRITERIOS DE EVALUACIÓN', subapartados: 5 },
  { numero: '16', titulo: 'INSTRUMENTOS DE EVALUACIÓN', subapartados: 1 },
  { numero: '17', titulo: 'EVIDENCIAS', subapartados: 8 },
  { numero: '18', titulo: 'CALIFICACIÓN', subapartados: 10 },
  { numero: '19', titulo: 'RECUPERACIÓN Y REFUERZO', subapartados: 1 },
  { numero: '20', titulo: 'ATENCIÓN A LA DIVERSIDAD', subapartados: 10 },
  { numero: '21', titulo: 'RECURSOS', subapartados: 1 },
  { numero: '22', titulo: 'COORDINACIÓN DOCENTE', subapartados: 8 },
  { numero: '23', titulo: 'ACTIVIDADES COMPLEMENTARIAS', subapartados: 1 },
  { numero: '24', titulo: 'EVALUACIÓN DE LA PROGRAMACIÓN', subapartados: 8 },
  { numero: '25', titulo: 'TRAZABILIDAD CURRICULAR', subapartados: 10 },
  { numero: '26', titulo: 'RÚBRICAS', subapartados: 22 },
  { numero: '27', titulo: 'ANEXOS', subapartados: 1 },
  { numero: '28', titulo: 'CONTROL DE CALIDAD', subapartados: 1 },
  { numero: '29', titulo: 'FUENTES NORMATIVAS', subapartados: 10 },
  { numero: '30', titulo: 'PENDIENTES DE VALIDACIÓN', subapartados: 10 },
];
