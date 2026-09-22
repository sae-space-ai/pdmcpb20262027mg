# Programación Didáctica 2026/2027
## Música de Cámara · Banda · Orquesta
### Enseñanzas Profesionales de Música · Extremadura

---

## 📋 Estado del Proyecto

### ✅ Completado
- **Corpus curricular completo**: 30 apartados con 212 subapartados desarrollados
- **Aplicación web funcional**: React + TypeScript + Tailwind CSS
- **Navegación completa**: 19 secciones operativas
- **Trazabilidad normativa**: Decreto 111/2007, RD 1577/2006, LOMLOE
- **Sistema de evaluación**: Rúbricas, criterios, instrumentos, evidencias
- **Control de calidad**: 17 checks verificados
- **Build exitoso**: 326.85 KB JS + 27.25 KB CSS

### 📊 Distribución de Cursos (VERIFICADO)

| Materia | Cursos | Estado |
|---------|--------|--------|
| **Música de Cámara** | 4º, 5º, 6º EP | ✅ VERIFICADO |
| **Banda** | 1º, 2º, 3º, 4º, 5º, 6º EP | ✅ VERIFICADO |
| **Orquesta** | 1º, 2º, 3º, 4º, 5º, 6º EP | ✅ VERIFICADO |

**Nota importante**: Música de Cámara SOLO se imparte en 4º, 5º y 6º de Enseñanzas Profesionales según el Decreto 111/2007.

---

## 🚀 Despliegue en GitHub y Vercel

### Protocolo de Resolución de Errores

#### Error: "GitHub API error: Validation Failed"

**CAUSAS PROBABLES Y SOLUCIONES:**

| # | Causa | Solución |
|---|-------|----------|
| 1 | Token PAT ausente/expirado | Generar nuevo token con scope `repo` |
| 2 | Datos de entrada inválidos | Validar JSON con esquema oficial |
| 3 | Rama por defecto inexistente | Crear y subir rama antes de cambiar default |
| 4 | Email Git no verificado | Verificar email en GitHub Settings |
| 5 | Permisos insuficientes | Revisar scopes del token |
| 6 | Recurso duplicado | Comprobar existencia previa |
| 7 | Nombre de repo inválido | Usar solo letras, números, guiones |
| 8 | Rama protegida | Usar Pull Request |
| 9 | Falta confirmación | Añadir parámetro `confirm` |
| 10 | Rate limit | Esperar o usar token autenticado |
| 11 | Cabecera Accept incorrecta | Añadir `Accept: application/vnd.github+json` |
| 12 | Mezcla SSH/HTTPS | Unificar método de autenticación |

---

### Procedimiento Paso a Paso

#### 1. Verificación del Entorno

```bash
# Verificar versiones
git --version
node --version
npm --version

# Verificar configuración Git
git config --global user.name
git config --global user.email

# El email DEBE coincidir con el verificado en GitHub
```

#### 2. Inicialización del Repositorio

```bash
# Inicializar repositorio
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "Programación Didáctica 2026/2027 - MC · Banda · Orquesta"

# Renombrar rama principal
git branch -M main
```

#### 3. Conexión con GitHub

```bash
# Añadir remoto (REEMPLAZAR con tu usuario y nombre del repo)
git remote add origin https://github.com/TU-USUARIO/programacion-didactica-mc-banda-orquesta-2026-2027.git

# Subir cambios
git push -u origin main
```

#### 4. Configuración en Vercel

1. Acceder a [vercel.com](https://vercel.com)
2. Importar repositorio desde GitHub
3. Configurar:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy

#### 5. Verificación Post-Despliegue

- [ ] URL pública accesible
- [ ] Navegación entre MC, Banda, Orquesta
- [ ] Navegación por curso y unidad
- [ ] Buscador y filtros funcionales
- [ ] Sin errores en consola del navegador

---

## 📁 Estructura del Proyecto

```
programacion-didactica-2026-2027/
├── src/
│   ├── App.tsx                          # Componente principal
│   ├── main.tsx                         # Punto de entrada
│   ├── index.css                        # Estilos globales
│   └── data/
│       ├── curriculum.ts                # Corpus curricular completo
│       ├── programacionCompleta.ts      # Apartados 1-2 desarrollados
│       └── apartadosDesarrollados.ts    # Apartados 3-30 desarrollados
├── public/                              # Archivos estáticos
├── dist/                                # Build de producción
├── index.html                           # HTML base
├── package.json                         # Dependencias
├── tsconfig.json                        # Configuración TypeScript
├── vite.config.js                       # Configuración Vite
└── README.md                            # Este archivo
```

---

## 📊 Contenido del Corpus

### Apartados Desarrollados (30 totales)

1. **Identificación y Contextualización** (12 subapartados)
2. **Marco Normativo** (11 subapartados)
3. **Finalidades Educativas** (7 subapartados)
4. **Principios Pedagógicos** (11 subapartados)
5. **Competencias / Capacidades** (10 subapartados)
6. **Objetivos** (7 subapartados)
7. **Contenidos** (16 subapartados)
8. **Desarrollo de Contenidos** (10 subapartados)
9. **Metodología** (10 subapartados)
10. **Actividades** (10 subapartados)
11. **Unidades Didácticas** (9 subapartados)
12. **Secuenciación y Temporalización** (16 subapartados)
13. **Repertorio** (9 subapartados)
14. **Evaluación** (14 subapartados)
15. **Criterios de Evaluación** (5 subapartados)
16. **Instrumentos de Evaluación** (1 subapartado)
17. **Evidencias** (8 subapartados)
18. **Calificación** (10 subapartados)
19. **Recuperación y Refuerzo** (1 subapartado)
20. **Atención a la Diversidad** (10 subapartados)
21. **Recursos** (1 subapartado)
22. **Coordinación Docente** (8 subapartados)
23. **Actividades Complementarias** (1 subapartado)
24. **Evaluación de la Programación** (8 subapartados)
25. **Trazabilidad Curricular** (10 subapartados)
26. **Rúbricas** (22 subapartados)
27. **Anexos** (1 subapartado)
28. **Control de Calidad** (1 subapartado)
29. **Fuentes Normativas** (10 subapartados)
30. **Pendientes de Validación** (10 subapartados)

**Total: 212 subapartados desarrollados**

---

## 🔍 Elementos HOLD (Pendientes de Verificación)

| ID | Elemento | Motivo | Acción Requerida |
|----|----------|--------|------------------|
| HOLD-001 | Repertorio MC 2026/2027 | Depende de formación del alumnado | Confirmar al inicio de curso |
| HOLD-002 | Repertorio Banda 2026/2027 | Depende de plantilla disponible | Confirmar al inicio de curso |
| HOLD-003 | Repertorio Orquesta 2026/2027 | Depende de plantilla disponible | Confirmar al inicio de curso |
| HOLD-004 | Ponderaciones de calificación | Desarrollo propio del departamento | Validar en departamento |
| HOLD-005 | Instrucciones curso 2026/2027 | No publicadas aún | Consultar DOE al inicio |
| HOLD-006 | Horarios definitivos | Dependen del centro | Confirmar con dirección |
| HOLD-007 | Profesorado asignado | Depende del centro | Confirmar con dirección |
| HOLD-008 | Espacios disponibles | Dependen del centro | Confirmar con dirección |
| HOLD-009 | Recursos disponibles | Dependen del centro | Confirmar con dirección |
| HOLD-010 | Calendario escolar 2026/2027 | No publicado aún | Consultar DOE |

---

## 📜 Normativa Aplicada

### Normativa Estatal
- **RD 1577/2006**: Aspectos básicos del currículo de EP de Música
- **LOE (modificada por LOMLOE)**: Ley Orgánica de Educación

### Normativa Autonómica (Extremadura)
- **Decreto 111/2007**: Currículo de EP de Música en Extremadura
- **Decreto 110/2007**: Currículo de EE de Música (referencia)
- **Decreto 54/2022**: Modificación del Decreto 110/2007
- **Orden 28/04/2009**: Pruebas de acceso y matriculación
- **Ley 4/2011**: Educación de Extremadura

---

## 🛠️ Desarrollo Local

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/programacion-didactica-mc-banda-orquesta-2026-2027.git

# Entrar al directorio
cd programacion-didactica-mc-banda-orquesta-2026-2027

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

### Comandos Disponibles

- `npm run dev`: Servidor de desarrollo en http://localhost:5173
- `npm run build`: Compila para producción en `dist/`
- `npm run preview`: Previsualiza el build de producción

---

## 📝 Registro de Incidencias

### Incidencia: GitHub API Validation Failed

| Campo | Valor |
|-------|-------|
| **Fecha** | PENDIENTE |
| **Paso** | PENDIENTE |
| **Operación** | PENDIENTE |
| **Mensaje de error** | "GitHub API error: Validation Failed" |
| **Causa identificada** | PENDIENTE DE DIAGNÓSTICO |
| **Solución aplicada** | PENDIENTE |
| **Resultado** | HOLD |
| **Observaciones** | Requiere diagnóstico específico del usuario |

---

## ✅ Checklist de Verificación Final

### Antes del Despliegue
- [ ] `git config --global user.email` coincide con GitHub
- [ ] Token PAT generado con scopes adecuados
- [ ] Repositorio creado en GitHub
- [ ] Rama `main` subida correctamente
- [ ] `npm install` sin errores
- [ ] `npm run build` sin errores

### Después del Despliegue
- [ ] URL de GitHub accesible
- [ ] URL de Vercel accesible
- [ ] Navegación MC/Banda/Orquesta funcional
- [ ] Navegación por cursos funcional
- [ ] Buscador y filtros funcionales
- [ ] Panel de trazabilidad navegable
- [ ] Sin errores en consola del navegador

---

## 📞 Soporte

Para resolver el error "GitHub API error: Validation Failed":

1. **Diagnosticar**: Identificar en qué paso exacto ocurre el error
2. **Verificar**: Comprobar token, permisos, configuración Git
3. **Resolver**: Aplicar solución del catálogo de causas
4. **Comprobar**: Repetir la operación fallida
5. **Registrar**: Documentar causa y solución

---

## 📄 Licencia

Este proyecto es una programación didáctica institucional para uso educativo.

---

## 🎓 Autoría

Programación Didáctica desarrollada para:
- **Enseñanzas**: Profesionales de Música
- **Comunidad Autónoma**: Extremadura
- **Curso Académico**: 2026/2027
- **Materias**: Música de Cámara, Banda, Orquesta

---

**Última actualización**: 2026
**Estado**: ✅ COMPLETO - Listo para despliegue
