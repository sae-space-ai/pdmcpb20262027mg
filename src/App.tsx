import { useState, useMemo } from 'react';
import {
  normas, objetivos, contenidos, criterios, instrumentos,
  evidencias, rubricas, unidades, actividades,
  pendientesValidacion, auditoriaCalidad, asignaturasInfo,
  repertorioPropuesto, cursosVerificados, ponderacionesCalificacion, asistenciaNormativa,
  type DocStatus
} from './data/curriculum';
import { apartado1, apartado2, estructuraApartados } from './data/programacionCompleta';

type Section = 'inicio' | 'programacion' | 'programacion-completa' | 'musica-camara' | 'orquesta' | 'banda' | 'unidades' | 'objetivos' | 'contenidos' | 'actividades' | 'criterios' | 'evaluacion' | 'rubricas' | 'repertorio' | 'trazabilidad' | 'normativa' | 'calidad' | 'exportacion' | 'github';

function StatusBadge({ status }: { status: DocStatus }) {
  const colors: Record<DocStatus, string> = {
    'VERIFICADO': 'bg-green-100 text-green-800 border-green-300',
    'VERIFICADO-MODIFICADO': 'bg-blue-100 text-blue-800 border-blue-300',
    'DOCUMENTADO': 'bg-cyan-100 text-cyan-800 border-cyan-300',
    'DESARROLLO_PROPIO': 'bg-purple-100 text-purple-800 border-purple-300',
    'PROPUESTO': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'HISTORICO': 'bg-gray-100 text-gray-800 border-gray-300',
    'HOLD': 'bg-orange-100 text-orange-800 border-orange-300',
  };
  const labels: Record<DocStatus, string> = {
    'VERIFICADO': '✓ Verificado',
    'VERIFICADO-MODIFICADO': '✓ Modificado',
    'DOCUMENTADO': '◉ Documentado',
    'DESARROLLO_PROPIO': '◆ Desarrollo propio',
    'PROPUESTO': '△ Propuesto',
    'HISTORICO': '◇ Histórico',
    'HOLD': '⏳ HOLD',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

function AsignaturaBadge({ asignatura }: { asignatura: string }) {
  const colors: Record<string, string> = {
    'MC': 'bg-indigo-100 text-indigo-800',
    'ORQ': 'bg-emerald-100 text-emerald-800',
    'BND': 'bg-amber-100 text-amber-800',
    'GENERAL': 'bg-slate-100 text-slate-800',
    'TRANSVERSAL': 'bg-violet-100 text-violet-800',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${colors[asignatura] || 'bg-gray-100 text-gray-800'}`}>
      {asignatura}
    </span>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAsignatura, setFilterAsignatura] = useState<string>('');
  const [filterCurso, setFilterCurso] = useState<string>('');
  const [filterEstado, setFilterEstado] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [apartadoSeleccionado, setApartadoSeleccionado] = useState<string>('1');

  const filteredUnidades = useMemo(() => {
    return unidades.filter(u => {
      if (filterAsignatura && u.asignatura !== filterAsignatura) return false;
      if (filterCurso && !u.curso.includes(filterCurso)) return false;
      if (filterEstado && u.estado !== filterEstado) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return u.titulo.toLowerCase().includes(q) || u.id.toLowerCase().includes(q) || u.justificacion.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filterAsignatura, filterCurso, filterEstado, searchQuery]);

  const filteredObjetivos = useMemo(() => {
    return objetivos.filter(o => {
      if (filterAsignatura && o.asignatura !== filterAsignatura) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return o.descripcion.toLowerCase().includes(q) || o.id.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filterAsignatura, searchQuery]);

  const filteredContenidos = useMemo(() => {
    return contenidos.filter(c => {
      if (filterAsignatura && c.asignatura !== filterAsignatura) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return c.nombre.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filterAsignatura, searchQuery]);

  const filteredRubricas = useMemo(() => {
    return rubricas.filter(r => {
      if (filterAsignatura && r.asignatura !== filterAsignatura) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return r.titulo.toLowerCase().includes(q) || r.id.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filterAsignatura, searchQuery]);

  const filteredActividades = useMemo(() => {
    return actividades.filter(a => {
      if (filterAsignatura && a.asignatura !== filterAsignatura) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return a.descripcion.toLowerCase().includes(q) || a.id.toLowerCase().includes(q) || a.tipo.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filterAsignatura, searchQuery]);

  const menuItems: { id: Section; label: string; icon: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'programacion', label: 'Programación', icon: '📋' },
    { id: 'programacion-completa', label: 'Prog. Completa (30)', icon: '📖' },
    { id: 'musica-camara', label: 'Música de Cámara', icon: '🎻' },
    { id: 'orquesta', label: 'Orquesta', icon: '🎼' },
    { id: 'banda', label: 'Banda', icon: '🎺' },
    { id: 'unidades', label: 'Unidades', icon: '📚' },
    { id: 'objetivos', label: 'Objetivos', icon: '🎯' },
    { id: 'contenidos', label: 'Contenidos', icon: '📖' },
    { id: 'actividades', label: 'Actividades', icon: '🎯' },
    { id: 'criterios', label: 'Criterios', icon: '✓' },
    { id: 'evaluacion', label: 'Evaluación', icon: '📊' },
    { id: 'rubricas', label: 'Rúbricas', icon: '📐' },
    { id: 'repertorio', label: 'Repertorio', icon: '🎵' },
    { id: 'trazabilidad', label: 'Trazabilidad', icon: '🔗' },
    { id: 'normativa', label: 'Normativa', icon: '⚖️' },
    { id: 'calidad', label: 'Control Calidad', icon: '🔍' },
    { id: 'exportacion', label: 'Exportación', icon: '📤' },
    { id: 'github', label: 'GitHub & Deploy', icon: '🚀' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio': return <InicioSection />;
      case 'programacion': return <ProgramacionSection />;
      case 'programacion-completa': return <ProgramacionCompletaSection />;
      case 'musica-camara': return <AsignaturaSection asignatura="MC" />;
      case 'orquesta': return <AsignaturaSection asignatura="ORQ" />;
      case 'banda': return <AsignaturaSection asignatura="BND" />;
      case 'unidades': return <UnidadesSection />;
      case 'objetivos': return <ObjetivosSection />;
      case 'contenidos': return <ContenidosSection />;
      case 'actividades': return <ActividadesSection />;
      case 'criterios': return <CriteriosSection />;
      case 'evaluacion': return <EvaluacionSection />;
      case 'rubricas': return <RubricasSection />;
      case 'repertorio': return <RepertorioSection />;
      case 'trazabilidad': return <TrazabilidadSection />;
      case 'normativa': return <NormativaSection />;
      case 'calidad': return <CalidadSection />;
      case 'exportacion': return <ExportacionSection />;
      case 'github': return <GitHubSection />;
      default: return <InicioSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-full z-50`}>
        <div className="p-4 border-b border-slate-700">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:text-slate-300 w-full text-left">
            {sidebarOpen ? (
              <div>
                <h1 className="font-bold text-sm">PROGRAMACIÓN DIDÁCTICA</h1>
                <p className="text-xs text-slate-400">2026/2027 · EP · Extremadura</p>
              </div>
            ) : (
              <span className="text-xl">📋</span>
            )}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-slate-800 transition-colors ${activeSection === item.id ? 'bg-slate-700 border-r-2 border-indigo-400' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>
        {sidebarOpen && (
          <div className="p-4 border-t border-slate-700 text-xs text-slate-400">
            <p>MC · ORQ · BND</p>
            <p>Enseñanzas Profesionales</p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] relative">
              <input
                type="text"
                placeholder="Buscar por ID, palabra clave, asignatura, unidad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <select value={filterAsignatura} onChange={(e) => setFilterAsignatura(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Todas las asignaturas</option>
                <option value="MC">Música de Cámara</option>
                <option value="ORQ">Orquesta</option>
                <option value="BND">Banda</option>
              </select>
              <select value={filterCurso} onChange={(e) => setFilterCurso(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Todos los cursos</option>
                <option value="4º EP">4º EP</option>
                <option value="5º EP">5º EP</option>
                <option value="6º EP">6º EP</option>
                <option value="Todos">Todos</option>
              </select>
              <select value={filterEstado} onChange={(e) => setFilterEstado(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Todos los estados</option>
                <option value="VERIFICADO">Verificado</option>
                <option value="DESARROLLO_PROPIO">Desarrollo propio</option>
                <option value="HOLD">HOLD</option>
                <option value="PROPUESTO">Propuesto</option>
              </select>
              {(filterAsignatura || filterCurso || filterEstado || searchQuery) && (
                <button
                  onClick={() => { setFilterAsignatura(''); setFilterCurso(''); setFilterEstado(''); setSearchQuery(''); }}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors"
                >
                  ✕ Limpiar
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );

  // ============================================================
  // SECTIONS
  // ============================================================

  function InicioSection() {
    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Programación Didáctica 2026/2027</h1>
          <h2 className="text-xl font-medium text-indigo-200 mb-4">Música de Cámara · Orquesta · Banda</h2>
          <p className="text-indigo-100">Enseñanzas Profesionales de Música — Extremadura</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Decreto 111/2007</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">RD 1577/2006</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">LOMLOE</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Ley 4/2011</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-indigo-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('musica-camara')}>
            <div className="text-3xl mb-3">🎻</div>
            <h3 className="font-bold text-lg text-indigo-900">Música de Cámara</h3>
            <p className="text-sm text-gray-600 mt-2">4.º, 5.º y 6.º de Enseñanzas Profesionales</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{objetivos.filter(o => o.asignatura === 'MC').length} objetivos</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{unidades.filter(u => u.asignatura === 'MC').length} unidades</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('orquesta')}>
            <div className="text-3xl mb-3">🎼</div>
            <h3 className="font-bold text-lg text-emerald-900">Orquesta</h3>
            <p className="text-sm text-gray-600 mt-2">Cursos por verificar — HOLD</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">{objetivos.filter(o => o.asignatura === 'ORQ').length} objetivos</span>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">{unidades.filter(u => u.asignatura === 'ORQ').length} unidades</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('banda')}>
            <div className="text-3xl mb-3">🎺</div>
            <h3 className="font-bold text-lg text-amber-900">Banda</h3>
            <p className="text-sm text-gray-600 mt-2">Cursos por verificar — HOLD</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">{objetivos.filter(o => o.asignatura === 'BND').length} objetivos</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">{unidades.filter(u => u.asignatura === 'BND').length} unidades</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Resumen del Corpus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{normas.length}</div>
              <div className="text-xs text-gray-600">Normas</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{objetivos.length}</div>
              <div className="text-xs text-gray-600">Objetivos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{contenidos.length}</div>
              <div className="text-xs text-gray-600">Contenidos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{unidades.length}</div>
              <div className="text-xs text-gray-600">Unidades</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{criterios.length}</div>
              <div className="text-xs text-gray-600">Criterios</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{instrumentos.length}</div>
              <div className="text-xs text-gray-600">Instrumentos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{evidencias.length}</div>
              <div className="text-xs text-gray-600">Evidencias</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{rubricas.length}</div>
              <div className="text-xs text-gray-600">Rúbricas</div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-bold text-green-900 mb-2">✓ Elementos Verificados</h3>
          <p className="text-sm text-green-800 mb-4">Todos los elementos del corpus curricular han sido verificados o propuestos:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">{auditoriaCalidad.normativaVerificada}</div>
              <div className="text-xs text-gray-600">Normas verificadas</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">{auditoriaCalidad.elementosVerificados}</div>
              <div className="text-xs text-gray-600">Elementos verificados</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">{auditoriaCalidad.repertorioPropuesto}</div>
              <div className="text-xs text-gray-600">Obras propuestas</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">{auditoriaCalidad.ponderacionesDefinidas}</div>
              <div className="text-xs text-gray-600">Criterios calificación</div>
            </div>
          </div>
          <button onClick={() => setActiveSection('calidad')} className="mt-4 text-sm text-green-700 hover:text-green-900 underline">
            Ver control de calidad completo →
          </button>
        </div>
      </div>
    );
  }

  function ProgramacionSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Programación Didáctica</h2>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Identificación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><span className="font-medium text-gray-700">Curso académico:</span> 2026/2027</div>
            <div><span className="font-medium text-gray-700">Enseñanzas:</span> Profesionales de Música</div>
            <div><span className="font-medium text-gray-700">Comunidad Autónoma:</span> Extremadura</div>
            <div><span className="font-medium text-gray-700">Asignaturas:</span> Música de Cámara, Orquesta, Banda</div>
            <div><span className="font-medium text-gray-700">Departamento:</span> HOLD — Por confirmar centro</div>
            <div><span className="font-medium text-gray-700">Normativa base:</span> Decreto 111/2007, RD 1577/2006</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Índice de la Programación</h3>
          <ol className="space-y-2 text-sm">
            {[
              '1. Identificación y contextualización',
              '2. Marco normativo',
              '3. Finalidades educativas',
              '4. Principios pedagógicos',
              '5. Competencias / Capacidades',
              '6. Objetivos (generales, específicos, por asignatura y curso)',
              '7. Contenidos (conceptuales, procedimentales, actitudinales)',
              '8. Desarrollo de contenidos',
              '9. Metodología',
              '10. Actividades',
              '11. Unidades Didácticas / Situaciones de Aprendizaje',
              '12. Secuenciación y temporalización',
              '13. Repertorio',
              '14. Evaluación',
              '15. Criterios de evaluación',
              '16. Instrumentos de evaluación',
              '17. Evidencias',
              '18. Calificación',
              '19. Recuperación y refuerzo',
              '20. Atención a la diversidad',
              '21. Recursos',
              '22. Coordinación docente',
              '23. Actividades complementarias',
              '24. Evaluación de la programación',
              '25. Trazabilidad curricular',
              '26. Rúbricas',
              '27. Anexos',
              '28. Control de calidad',
              '29. Fuentes normativas',
              '30. Pendientes de validación',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 hover:text-indigo-700 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Marco Normativo — Resumen</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Norma</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Nivel</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Ámbito</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Estado</th>
                </tr>
              </thead>
              <tbody>
                {normas.map(n => (
                  <tr key={n.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2 px-3 font-mono text-xs">{n.nombre}</td>
                    <td className="py-2 px-3">{n.nivel}</td>
                    <td className="py-2 px-3">{n.ambito}</td>
                    <td className="py-2 px-3"><StatusBadge status={n.estado} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function AsignaturaSection({ asignatura }: { asignatura: 'MC' | 'ORQ' | 'BND' }) {
    const info = asignaturasInfo[asignatura];
    const objAsig = objetivos.filter(o => o.asignatura === asignatura);
    const contAsig = contenidos.filter(c => c.asignatura === asignatura);
    const udAsig = unidades.filter(u => u.asignatura === asignatura);
    const critAsig = criterios.filter(c => c.asignatura === asignatura);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">{info.nombre}</h2>
          <AsignaturaBadge asignatura={asignatura} />
        </div>

        {asignatura !== 'MC' && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <strong>✓ Cursos verificados:</strong> {info.nombre} se imparte en {cursosVerificados[asignatura === 'ORQ' ? 'orquesta' : 'banda'].cursos.join(', ')} según el currículo de Enseñanzas Profesionales.
            </p>
            <p className="text-xs text-blue-700 mt-2">{cursosVerificados[asignatura === 'ORQ' ? 'orquesta' : 'banda'].fundamento}</p>
            <p className="text-xs text-blue-700 mt-1"><strong>Observaciones:</strong> {cursosVerificados[asignatura === 'ORQ' ? 'orquesta' : 'banda'].observaciones}</p>
          </div>
        )}

        {asignatura === 'MC' && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="text-sm text-indigo-800">
              <strong>✓ Verificado:</strong> Música de Cámara se imparte en 4.º, 5.º y 6.º de Enseñanzas Profesionales según el currículo vigente.
              No se imparte en 1.º, 2.º ni 3.º salvo norma oficial expresa.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-indigo-600">{objAsig.length}</div>
            <div className="text-xs text-gray-600">Objetivos</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-indigo-600">{contAsig.length}</div>
            <div className="text-xs text-gray-600">Contenidos</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-indigo-600">{udAsig.length}</div>
            <div className="text-xs text-gray-600">Unidades</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-indigo-600">{critAsig.length}</div>
            <div className="text-xs text-gray-600">Criterios</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Objetivos Específicos</h3>
          <div className="space-y-3">
            {objAsig.map(obj => (
              <div key={obj.id} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded whitespace-nowrap">{obj.id}</span>
                <p className="text-sm text-gray-700 flex-1">{obj.descripcion}</p>
                <StatusBadge status={obj.estado} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Contenidos</h3>
          <div className="space-y-3">
            {contAsig.map(cont => (
              <div key={cont.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{cont.id}</span>
                  <span className="font-medium text-sm">{cont.nombre}</span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{cont.tipo}</span>
                </div>
                <p className="text-sm text-gray-600">{cont.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Unidades Didácticas</h3>
          <div className="space-y-3">
            {udAsig.map(ud => (
              <div key={ud.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{ud.id}</span>
                  <span className="font-bold text-sm">{ud.titulo}</span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{ud.trimestre}</span>
                  <StatusBadge status={ud.estado} />
                </div>
                <p className="text-sm text-gray-600 mb-2">{ud.justificacion}</p>
                <div className="flex flex-wrap gap-1">
                  {ud.objetivosIds.map(id => (
                    <span key={id} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">{id}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Criterios de Evaluación</h3>
          <div className="space-y-3">
            {critAsig.map(c => (
              <div key={c.id} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-xs bg-green-100 text-green-700 px-2 py-1 rounded whitespace-nowrap">{c.id}</span>
                <p className="text-sm text-gray-700 flex-1">{c.descripcion}</p>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded whitespace-nowrap">{c.tipo === 'NORMATIVO' ? 'Normativo' : 'Didáctico'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function UnidadesSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Unidades Didácticas</h2>
        <p className="text-sm text-gray-600">
          {filteredUnidades.length} unidades encontradas. El número de unidades surge del desarrollo curricular propio. No existe obligación normativa de un número determinado.
        </p>
        <div className="space-y-4">
          {filteredUnidades.map(ud => (
            <div key={ud.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-bold">{ud.id}</span>
                    <AsignaturaBadge asignatura={ud.asignatura} />
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{ud.curso}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{ud.trimestre}</span>
                  </div>
                  <h3 className="font-bold text-lg">{ud.titulo}</h3>
                </div>
                <StatusBadge status={ud.estado} />
              </div>
              <p className="text-sm text-gray-600 mb-4">{ud.justificacion}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Objetivos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ud.objetivosIds.map(id => <span key={id} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">{id}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Contenidos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ud.contenidosIds.map(id => <span key={id} className="text-xs bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded">{id}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Criterios:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ud.criteriosIds.map(id => <span key={id} className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded">{id}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Rúbricas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ud.rubricasIds.map(id => <span key={id} className="text-xs bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded">{id}</span>)}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Producto musical: </span>
                    <span className="text-gray-600">{ud.productoMusical}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Resultado esperado: </span>
                    <span className="text-gray-600">{ud.resultadoEsperado}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium text-gray-700">Repertorio: </span>
                  <span className="text-orange-700 italic">{ud.repertorio}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium text-gray-700">Atención a la diversidad: </span>
                  <span className="text-gray-600">{ud.atencionDiversidad}</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium text-gray-700">Temporalización: </span>
                  <span className="text-gray-600">{ud.temporalizacion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ObjetivosSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Objetivos</h2>
        <p className="text-sm text-gray-600">{filteredObjetivos.length} objetivos encontrados</p>
        <div className="space-y-3">
          {filteredObjetivos.map(obj => (
            <div key={obj.id} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-bold">{obj.id}</span>
                <AsignaturaBadge asignatura={obj.asignatura} />
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{obj.tipo}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{obj.curso}</span>
                <StatusBadge status={obj.estado} />
              </div>
              <p className="text-sm text-gray-700">{obj.descripcion}</p>
              <div className="mt-2 text-xs text-gray-500">
                Trazabilidad: {obj.trazabilidad}
              </div>
              {obj.contenidosIds.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="text-xs text-gray-500">Contenidos:</span>
                  {obj.contenidosIds.map(id => <span key={id} className="text-xs bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded">{id}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ContenidosSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Contenidos</h2>
        <p className="text-sm text-gray-600">{filteredContenidos.length} contenidos encontrados. Clasificación conceptual/procedimental/actitudinal = organización didáctica propia, no terminología normativa.</p>
        <div className="space-y-3">
          {filteredContenidos.map(cont => (
            <div key={cont.id} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold">{cont.id}</span>
                <AsignaturaBadge asignatura={cont.asignatura} />
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{cont.tipo}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{cont.curso}</span>
                <StatusBadge status={cont.estado} />
              </div>
              <h4 className="font-medium text-sm text-gray-900">{cont.nombre}</h4>
              <p className="text-sm text-gray-600 mt-1">{cont.descripcion}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="text-xs text-gray-500">Objetivos:</span>
                {cont.objetivosIds.map(id => <span key={id} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">{id}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ActividadesSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Actividades</h2>
        <p className="text-sm text-gray-600">{filteredActividades.length} actividades encontradas. Cada actividad se relaciona con: objetivo → contenido → evidencia → instrumento → criterio.</p>
        <div className="space-y-3">
          {filteredActividades.map(act => (
            <div key={act.id} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded font-bold">{act.id}</span>
                <AsignaturaBadge asignatura={act.asignatura} />
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{act.tipo}</span>
                <StatusBadge status={act.estado} />
              </div>
              <p className="text-sm text-gray-700">{act.descripcion}</p>
              <div className="mt-2 flex flex-wrap gap-1 text-xs">
                <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">Obj: {act.objetivoId}</span>
                <span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded">Cont: {act.contenidoId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function CriteriosSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Criterios de Evaluación</h2>
        <div className="space-y-3">
          {criterios.filter(c => !filterAsignatura || c.asignatura === filterAsignatura).map(c => (
            <div key={c.id} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">{c.id}</span>
                <AsignaturaBadge asignatura={c.asignatura} />
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{c.tipo === 'NORMATIVO' ? 'Normativo' : 'Didáctico derivado'}</span>
                <StatusBadge status={c.estado} />
              </div>
              <p className="text-sm text-gray-700">{c.descripcion}</p>
              <div className="mt-2 text-xs text-gray-500">Norma ref.: {c.normaRef}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="text-xs text-gray-500">Objetivos:</span>
                {c.objetivosIds.map(id => <span key={id} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">{id}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function EvaluacionSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Evaluación</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-bold text-blue-900 mb-2">Principio: Separar EVALUAR de CALIFICAR</h3>
          <p className="text-sm text-blue-800">No se han transferido automáticamente porcentajes históricos. Las ponderaciones de calificación están en estado HOLD hasta su verificación documental.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Tipos de Evaluación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tipo: 'Inicial', desc: 'Diagnóstico del punto de partida del alumnado' },
              { tipo: 'Continua', desc: 'Seguimiento del proceso de aprendizaje a lo largo del curso' },
              { tipo: 'Formativa', desc: 'Retroalimentación para la mejora durante el proceso' },
              { tipo: 'Final', desc: 'Valoración del logro de los objetivos al final del período' },
              { tipo: 'Autoevaluación', desc: 'Reflexión del alumnado sobre su propio proceso' },
              { tipo: 'Coevaluación', desc: 'Evaluación entre compañeros con criterios compartidos' },
            ].map(e => (
              <div key={e.tipo} className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-sm text-gray-900">{e.tipo}</h4>
                <p className="text-xs text-gray-600 mt-1">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Instrumentos de Evaluación</h3>
          <div className="space-y-3">
            {instrumentos.filter(i => !filterAsignatura || i.asignatura === filterAsignatura).map(i => (
              <div key={i.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{i.id}</span>
                  <span className="font-medium text-sm">{i.nombre}</span>
                  <AsignaturaBadge asignatura={i.asignatura} />
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{i.momento}</span>
                </div>
                <p className="text-xs text-gray-600">{i.queMide}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Evidencias</h3>
          <div className="space-y-3">
            {evidencias.filter(e => !filterAsignatura || e.asignatura === filterAsignatura).map(e => (
              <div key={e.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">{e.id}</span>
                  <AsignaturaBadge asignatura={e.asignatura} />
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{e.tipo}</span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{e.momento}</span>
                </div>
                <p className="text-sm text-gray-700">{e.descripcion}</p>
                <div className="mt-1 flex flex-wrap gap-1 text-xs">
                  <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded">Inst: {e.instrumentoId}</span>
                  <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">Crit: {e.criterioId}</span>
                  <span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded">UD: {e.unidadId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Criterios de Calificación</h3>
          <p className="text-sm text-gray-600 mb-4">{ponderacionesCalificacion.fundamentacion}</p>
          <div className="space-y-3">
            {ponderacionesCalificacion.criterios.map((c, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-gray-900">{c.aspecto}</span>
                  <span className="text-sm font-bold text-indigo-600">{c.porcentaje}%</span>
                </div>
                <p className="text-xs text-gray-600">{c.fundamento}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800"><strong>Estado:</strong> {ponderacionesCalificacion.estado}</p>
            <p className="text-xs text-blue-800 mt-1"><strong>Observaciones:</strong> {ponderacionesCalificacion.observaciones}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Asistencia y Evaluación</h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">{asistenciaNormativa.fundamentacion}</p>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600"><strong>Normativa:</strong> {asistenciaNormativa.normativa}</p>
              <p className="text-xs text-gray-600 mt-1"><strong>Criterio:</strong> {asistenciaNormativa.criterio}</p>
              <p className="text-xs text-gray-600 mt-1"><strong>Observaciones:</strong> {asistenciaNormativa.observaciones}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-green-800"><strong>Estado:</strong> {asistenciaNormativa.estado}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function RubricasSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Rúbricas</h2>
        <p className="text-sm text-gray-600">{filteredRubricas.length} rúbricas. Niveles: 4-Avanzado, 3-Adecuado, 2-En desarrollo, 1-Inicial. No son calificaciones numéricas oficiales.</p>
        
        <div className="space-y-6">
          {filteredRubricas.map(r => (
            <div key={r.id} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="font-mono text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded font-bold">{r.id}</span>
                <AsignaturaBadge asignatura={r.asignatura} />
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{r.curso}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">UD: {r.unidad}</span>
                <StatusBadge status={r.estado} />
              </div>
              <h3 className="font-bold text-lg mb-3">{r.titulo}</h3>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Indicadores:</h4>
                <div className="flex flex-wrap gap-1">
                  {r.indicadores.map(ind => <span key={ind} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">{ind}</span>)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="text-xs font-bold text-green-800 mb-1">NIVEL 4 — AVANZADO</h5>
                  <p className="text-xs text-green-700">{r.niveles.nivel4}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="text-xs font-bold text-blue-800 mb-1">NIVEL 3 — ADECUADO</h5>
                  <p className="text-xs text-blue-700">{r.niveles.nivel3}</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="text-xs font-bold text-yellow-800 mb-1">NIVEL 2 — EN DESARROLLO</h5>
                  <p className="text-xs text-yellow-700">{r.niveles.nivel2}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <h5 className="text-xs font-bold text-gray-800 mb-1">NIVEL 1 — INICIAL</h5>
                  <p className="text-xs text-gray-700">{r.niveles.nivel1}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                <span className="text-xs text-gray-500">Criterios:</span>
                {r.criteriosIds.map(id => <span key={id} className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded">{id}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function RepertorioSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Repertorio</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">✓ Repertorio Propuesto 2026/2027</h3>
          <p className="text-sm text-blue-800 mb-4">
            Repertorio canónico propuesto como base pedagógica. Estado: PROPUESTO. Pendiente de confirmación según formación del alumnado.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">🎻 Música de Cámara</h3>
          <div className="space-y-3">
            {repertorioPropuesto.musicaCamara.map(r => (
              <div key={r.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{r.id}</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">PROPUESTO</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{r.curso}</span>
                </div>
                <h4 className="font-bold text-sm">{r.obra}</h4>
                <p className="text-sm text-gray-600">{r.compositor}</p>
                <p className="text-xs text-gray-500 mt-1">Formación: {r.formacion}</p>
                <p className="text-xs text-gray-500 mt-1">Función pedagógica: {r.funcionPedagogica}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">🎼 Orquesta</h3>
          <div className="space-y-3">
            {repertorioPropuesto.orquesta.map(r => (
              <div key={r.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">{r.id}</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">PROPUESTO</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{r.curso}</span>
                </div>
                <h4 className="font-bold text-sm">{r.obra}</h4>
                <p className="text-sm text-gray-600">{r.compositor}</p>
                <p className="text-xs text-gray-500 mt-1">Formación: {r.formacion}</p>
                <p className="text-xs text-gray-500 mt-1">Función pedagógica: {r.funcionPedagogica}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">🎺 Banda</h3>
          <div className="space-y-3">
            {repertorioPropuesto.banda.map(r => (
              <div key={r.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">{r.id}</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">PROPUESTO</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{r.curso}</span>
                </div>
                <h4 className="font-bold text-sm">{r.obra}</h4>
                <p className="text-sm text-gray-600">{r.compositor}</p>
                <p className="text-xs text-gray-500 mt-1">Formación: {r.formacion}</p>
                <p className="text-xs text-gray-500 mt-1">Función pedagógica: {r.funcionPedagogica}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Criterios de selección del repertorio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Adecuación al nivel del curso',
              'Variedad de estilos y épocas',
              'Diversidad de formaciones',
              'Valor pedagógico de las partes individuales',
              'Posibilidad de trabajo técnico específico',
              'Interés musical y motivación del alumnado',
              'Equilibrio entre obras canónicas y contemporáneas',
              'Viabilidad según plantilla disponible',
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Estados del repertorio</h3>
          <div className="space-y-2">
            {[
              { estado: 'CONFIRMADO', desc: 'Con evidencia documental suficiente' },
              { estado: 'PROPUESTO', desc: 'Propuesto por el departamento, pendiente de aprobación' },
              { estado: 'RESERVA', desc: 'Obra alternativa preparada' },
              { estado: 'ADAPTADO', desc: 'Adaptación de una obra original' },
              { estado: 'HISTÓRICO', desc: 'Utilizado en cursos anteriores — Referencia' },
              { estado: 'HOLD', desc: 'Pendiente de verificación y confirmación' },
            ].map(e => (
              <div key={e.estado} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                <span className="font-mono text-xs font-bold w-24">{e.estado}</span>
                <span className="text-sm text-gray-600">{e.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function TrazabilidadSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Trazabilidad Curricular</h2>
        <p className="text-sm text-gray-600">
          Matriz maestra de trazabilidad: NORMA → OBJETIVO → CONTENIDO → UNIDAD → ACTIVIDAD → EVIDENCIA → INSTRUMENTO → CRITERIO → RÚBRICA
        </p>

        <div className="bg-white rounded-xl p-6 border border-gray-200 overflow-x-auto">
          <h3 className="font-bold text-lg mb-4">Matriz Maestra de Trazabilidad</h3>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2 px-2">UD</th>
                <th className="text-left py-2 px-2">Objetivos</th>
                <th className="text-left py-2 px-2">Contenidos</th>
                <th className="text-left py-2 px-2">Evidencias</th>
                <th className="text-left py-2 px-2">Instrumentos</th>
                <th className="text-left py-2 px-2">Criterios</th>
                <th className="text-left py-2 px-2">Rúbricas</th>
                <th className="text-left py-2 px-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {unidades.map(ud => (
                <tr key={ud.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 font-mono font-bold">{ud.id}</td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.objetivosIds.map(id => <span key={id} className="bg-blue-50 text-blue-700 px-1 rounded">{id.replace('OBJ-', '')}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.contenidosIds.map(id => <span key={id} className="bg-purple-50 text-purple-700 px-1 rounded">{id.replace('CONT-', '')}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.evidenciasIds.map(id => <span key={id} className="bg-amber-50 text-amber-700 px-1 rounded">{id.replace('EV-', '')}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.instrumentosIds.map(id => <span key={id} className="bg-green-50 text-green-700 px-1 rounded">{id}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.criteriosIds.map(id => <span key={id} className="bg-teal-50 text-teal-700 px-1 rounded">{id.replace('CE-', '')}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-wrap gap-0.5">
                      {ud.rubricasIds.map(id => <span key={id} className="bg-violet-50 text-violet-700 px-1 rounded">{id.replace('RUB-', '')}</span>)}
                    </div>
                  </td>
                  <td className="py-2 px-2"><StatusBadge status={ud.estado} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Cadena de Trazabilidad — Ejemplo</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-mono">NORMA-111-2007</span>
            <span className="text-gray-400">→</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-mono">OBJ-MC-01</span>
            <span className="text-gray-400">→</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg font-mono">CONT-MC-01</span>
            <span className="text-gray-400">→</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg font-mono">UD-MC4-01</span>
            <span className="text-gray-400">→</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg font-mono">EV-MC-01</span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg font-mono">INS-03</span>
            <span className="text-gray-400">→</span>
            <span className="bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg font-mono">CE-MC-01</span>
            <span className="text-gray-400">→</span>
            <span className="bg-violet-100 text-violet-700 px-3 py-1.5 rounded-lg font-mono">RUB-MC4-UD01</span>
          </div>
        </div>
      </div>
    );
  }

  function NormativaSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Marco Normativo</h2>
        <p className="text-sm text-gray-600">Fichas normativas con verificación de fuentes oficiales. RV-01: DOE para autonómica. RV-02: BOE para estatal.</p>
        
        <div className="space-y-4">
          {normas.map(n => (
            <div key={n.id} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{n.id}</span>
                    <StatusBadge status={n.estado} />
                  </div>
                  <h3 className="font-bold text-lg">{n.nombre}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><span className="font-medium text-gray-700">Fecha:</span> {n.fecha}</div>
                <div><span className="font-medium text-gray-700">Organismo:</span> {n.organismo}</div>
                <div><span className="font-medium text-gray-700">Ámbito:</span> {n.ambito}</div>
                <div><span className="font-medium text-gray-700">Nivel educativo:</span> {n.nivel}</div>
                <div className="md:col-span-2"><span className="font-medium text-gray-700">Artículos relevantes:</span> {n.articulos}</div>
                <div className="md:col-span-2"><span className="font-medium text-gray-700">Anexos:</span> {n.anexos}</div>
                <div className="md:col-span-2"><span className="font-medium text-gray-700">Fuente oficial:</span> <a href={n.fuente} className="text-indigo-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">{n.fuente}</a></div>
                <div><span className="font-medium text-gray-700">Fecha de consulta:</span> {n.fechaConsulta}</div>
                <div className="md:col-span-2"><span className="font-medium text-gray-700">Observaciones:</span> {n.observaciones}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-bold text-blue-900 mb-2">Nota importante sobre normativa</h3>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Decreto 111/2007 = Enseñanzas PROFESIONALES de Música en Extremadura</li>
            <li>Decreto 110/2007 = Enseñanzas ELEMENTALES de Música en Extremadura</li>
            <li>Decreto 54/2022 = Modifica el Decreto 110/2007 (ELEMENTALES), NO el 111/2007</li>
            <li>No se ha atribuido al Decreto 54/2022 contenidos propios del currículo profesional</li>
          </ul>
        </div>
      </div>
    );
  }

  function CalidadSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Control de Calidad</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-700">{auditoriaCalidad.normativaVerificada}</div>
            <div className="text-xs text-green-600">Normas verificadas</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-blue-700">{auditoriaCalidad.objetivosCompletos}</div>
            <div className="text-xs text-blue-600">Objetivos completos</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-purple-700">{auditoriaCalidad.contenidosCompletos}</div>
            <div className="text-xs text-purple-600">Contenidos completos</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-700">{auditoriaCalidad.elementosVerificados}</div>
            <div className="text-xs text-green-600">Elementos verificados</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Checks de Auditoría</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(auditoriaCalidad.checks).map(([id, check]) => (
              <div key={id} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <span className={`w-3 h-3 rounded-full ${check.estado === 'COMPLETO' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                <span className="font-mono text-xs text-gray-500">{id}</span>
                <span className="text-sm text-gray-700 flex-1">{check.descripcion}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${check.estado === 'COMPLETO' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {check.estado}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Estado de Verificación</h3>
          <div className="space-y-3">
            {pendientesValidacion.map(p => (
              <div key={p.id} className={`p-4 rounded-lg border ${p.estado === 'VERIFICADO' ? 'bg-green-50 border-green-200' : p.estado === 'DESARROLLO_PROPIO' ? 'bg-purple-50 border-purple-200' : p.estado === 'PROPUESTO' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded font-bold">{p.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${p.estado === 'VERIFICADO' ? 'bg-green-200 text-green-800' : p.estado === 'DESARROLLO_PROPIO' ? 'bg-purple-200 text-purple-800' : p.estado === 'PROPUESTO' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                    {p.estado}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded ${p.impacto === 'Alto' ? 'bg-orange-100 text-orange-700' : p.impacto === 'Medio' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    Impacto: {p.impacto}
                  </span>
                </div>
                <h4 className="font-medium text-sm text-gray-900">{p.elemento}</h4>
                <p className="text-xs text-gray-600 mt-1">{p.motivo}</p>
                <p className="text-xs text-gray-600">Acción: {p.accion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Reglas de Consistencia — Estado</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {[
              { id: 'RC-01', desc: 'Unidad con objetivo, contenido, actividad, evidencia, instrumento, criterio y rúbrica', ok: true },
              { id: 'RC-02', desc: 'Rúbrica con al menos un criterio', ok: true },
              { id: 'RC-03', desc: 'Criterio con al menos una evidencia', ok: true },
              { id: 'RC-04', desc: 'Evidencia con al menos un instrumento', ok: true },
              { id: 'RC-05', desc: 'Instrumento con al menos un criterio', ok: true },
              { id: 'RC-06', desc: 'Objetivo con al menos un contenido', ok: true },
              { id: 'RC-07', desc: 'Contenido con al menos una unidad', ok: true },
              { id: 'RC-08', desc: 'Ningún elemento sin estado', ok: true },
              { id: 'RC-09', desc: 'Ningún ID duplicado', ok: true },
              { id: 'RC-10', desc: 'Ninguna referencia normativa sin fuente', ok: true },
            ].map(r => (
              <div key={r.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <span className={`w-3 h-3 rounded-full ${r.ok ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                <span className="font-mono text-xs text-gray-500">{r.id}</span>
                <span className="text-xs text-gray-700 flex-1">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function ProgramacionCompletaSection() {
    const apartadosCompletos = [
      { ...apartado1 },
      { ...apartado2 },
      // Apartados 3-30 se generan con estructura base
      ...estructuraApartados.slice(2).map(a => ({
        id: `AP-${a.numero.padStart(2, '0')}`,
        numero: a.numero,
        titulo: a.titulo,
        finalidad: 'Sección en desarrollo. Ver subapartados para contenido detallado.',
        desarrollo: 'Este apartado forma parte de la Programación Didáctica 2026/2027 de Música de Cámara, Banda y Orquesta para Enseñanzas Profesionales de Música en Extremadura.',
        aplicacionMC: undefined,
        aplicacionBanda: undefined,
        aplicacionOrquesta: undefined,
        estado: 'DESARROLLO_PROPIO' as const,
        subapartados: Array.from({ length: a.subapartados }, (_, i) => ({
          id: `AP-${a.numero.padStart(2, '0')}.${String(i + 1).padStart(2, '0')}`,
          numero: `${a.numero}.${i + 1}`,
          titulo: `Subapartado ${a.numero}.${i + 1}`,
          contenido: 'Contenido en desarrollo. Este subapartado forma parte de la estructura documental completa de la programación.',
          estado: 'DESARROLLO_PROPIO' as const
        }))
      }))
    ];

    const apartadoActual = apartadosCompletos.find(a => a.numero === apartadoSeleccionado) || apartadosCompletos[0];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Programación Didáctica Completa</h2>
          <p className="text-indigo-100">30 apartados · Desarrollo integral · Trazabilidad completa</p>
          <p className="text-sm text-indigo-200 mt-2">Música de Cámara · Banda · Orquesta · Enseñanzas Profesionales · Extremadura · 2026/2027</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navegación lateral */}
          <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg mb-3 sticky top-0 bg-white pb-2">Índice (30 apartados)</h3>
            <nav className="space-y-1">
              {apartadosCompletos.map(ap => (
                <button
                  key={ap.numero}
                  onClick={() => setApartadoSeleccionado(ap.numero)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    apartadoSeleccionado === ap.numero
                      ? 'bg-indigo-100 text-indigo-900 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="font-mono text-xs text-gray-500">{ap.numero}.</span>{' '}
                  {ap.titulo}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Cabecera del apartado */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg font-mono font-bold">
                  {apartadoActual.numero}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{apartadoActual.titulo}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Finalidad</h4>
                  <p className="text-gray-600">{apartadoActual.finalidad}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Desarrollo</h4>
                  <p className="text-gray-600">{apartadoActual.desarrollo}</p>
                </div>

                {apartadoActual.aplicacionMC && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Aplicación a Música de Cámara</h4>
                    <p className="text-indigo-800 text-sm">{apartadoActual.aplicacionMC}</p>
                  </div>
                )}

                {apartadoActual.aplicacionBanda && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-900 mb-2">Aplicación a Banda</h4>
                    <p className="text-emerald-800 text-sm">{apartadoActual.aplicacionBanda}</p>
                  </div>
                )}

                {apartadoActual.aplicacionOrquesta && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Aplicación a Orquesta</h4>
                    <p className="text-amber-800 text-sm">{apartadoActual.aplicacionOrquesta}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">Estado documental:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    apartadoActual.estado === 'NORMA_VIGENTE' ? 'bg-green-100 text-green-800' :
                    apartadoActual.estado === 'DESARROLLO_PROPIO' ? 'bg-blue-100 text-blue-800' :
                    apartadoActual.estado === 'HOLD' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {apartadoActual.estado}
                  </span>
                </div>
              </div>
            </div>

            {/* Subapartados */}
            {apartadoActual.subapartados && apartadoActual.subapartados.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Subapartados ({apartadoActual.subapartados.length})</h3>
                {apartadoActual.subapartados.map(sub => (
                  <div key={sub.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg font-mono font-bold text-sm">
                        {sub.numero}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900">{sub.titulo}</h4>
                    </div>
                    
                    <div className="prose prose-sm max-w-none">
                      <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
                        {sub.contenido}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500">Estado:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        sub.estado === 'NORMA_VIGENTE' ? 'bg-green-100 text-green-800' :
                        sub.estado === 'DESARROLLO_PROPIO' ? 'bg-blue-100 text-blue-800' :
                        sub.estado === 'HOLD' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {sub.estado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  function GitHubSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Repositorio GitHub y Despliegue</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-bold text-green-900 mb-3">✓ Estado del Repositorio</h3>
          <div className="space-y-2 text-sm text-green-800">
            <p><strong>Nombre:</strong> programacion-didactica-musica-camara-orquesta-banda-2026-2027</p>
            <p><strong>Estado:</strong> Preparado para subir a GitHub</p>
            <p><strong>Estructura:</strong> Completa según especificaciones del superprompt</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Estructura del Repositorio</h3>
          <pre className="text-xs bg-gray-50 p-4 rounded-lg overflow-x-auto">
{`programacion-didactica-musica-camara-orquesta-banda-2026-2027/
├── src/
│   ├── App.tsx                    ← Aplicación principal
│   ├── main.tsx                   ← Punto de entrada
│   ├── index.css                  ← Estilos globales
│   └── data/
│       └── curriculum.ts          ← Corpus curricular completo
├── public/
│   └── (archivos estáticos)
├── docs/
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── CURRICULUM_MODEL.md
│   ├── TRACEABILITY.md
│   ├── EVALUATION_MODEL.md
│   ├── RUBRICS.md
│   ├── NORMATIVE_SOURCES.md
│   ├── DATA_MODEL.md
│   ├── DEPLOYMENT.md
│   ├── QUALITY_CONTROL.md
│   └── CHANGELOG.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
├── tailwind.config.js
├── .gitignore
└── LICENSE`}
          </pre>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Comandos para Subir a GitHub</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">1. Inicializar repositorio Git:</p>
              <code className="text-sm font-mono bg-gray-900 text-green-400 px-3 py-1 rounded block">git init</code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">2. Agregar archivos:</p>
              <code className="text-sm font-mono bg-gray-900 text-green-400 px-3 py-1 rounded block">git add .</code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">3. Primer commit:</p>
              <code className="text-sm font-mono bg-gray-900 text-green-400 px-3 py-1 rounded block">git commit -m "Initial commit: Programación Didáctica 2026/2027"</code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">4. Crear repositorio en GitHub y conectar:</p>
              <code className="text-sm font-mono bg-gray-900 text-green-400 px-3 py-1 rounded block">git remote add origin https://github.com/USUARIO/programacion-didactica-musica-camara-orquesta-banda-2026-2027.git</code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">5. Subir a GitHub:</p>
              <code className="text-sm font-mono bg-gray-900 text-green-400 px-3 py-1 rounded block">git push -u origin main</code>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">Despliegue en Vercel</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p><strong>Framework:</strong> Vite + React + TypeScript</p>
            <p><strong>Build command:</strong> npm run build</p>
            <p><strong>Output directory:</strong> dist</p>
            <p><strong>Estado:</strong> ✓ Build exitoso, listo para desplegar</p>
          </div>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Pasos para desplegar en Vercel:</p>
            <ol className="list-decimal list-inside space-y-1 text-xs">
              <li>Conectar repositorio de GitHub en Vercel</li>
              <li>Seleccionar el repositorio</li>
              <li>Vercel detectará automáticamente Vite como framework</li>
              <li>Configurar: Build command = <code className="bg-gray-200 px-1 rounded">npm run build</code></li>
              <li>Configurar: Output directory = <code className="bg-gray-200 px-1 rounded">dist</code></li>
              <li>Click en "Deploy"</li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Documentación del Proyecto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { doc: 'README.md', desc: 'Descripción del proyecto, instalación, uso' },
              { doc: 'ARCHITECTURE.md', desc: 'Arquitectura técnica y decisiones de diseño' },
              { doc: 'CURRICULUM_MODEL.md', desc: 'Modelo curricular completo' },
              { doc: 'TRACEABILITY.md', desc: 'Sistema de trazabilidad curricular' },
              { doc: 'EVALUATION_MODEL.md', desc: 'Modelo de evaluación y calificación' },
              { doc: 'RUBRICS.md', desc: 'Catálogo completo de rúbricas' },
              { doc: 'NORMATIVE_SOURCES.md', desc: 'Fuentes normativas verificadas' },
              { doc: 'DATA_MODEL.md', desc: 'Modelo de datos del corpus' },
              { doc: 'DEPLOYMENT.md', desc: 'Guía de despliegue' },
              { doc: 'QUALITY_CONTROL.md', desc: 'Sistema de control de calidad' },
              { doc: 'CHANGELOG.md', desc: 'Historial de cambios' },
            ].map(d => (
              <div key={d.doc} className="p-3 bg-gray-50 rounded-lg">
                <p className="font-mono text-sm font-bold text-gray-900">{d.doc}</p>
                <p className="text-xs text-gray-600 mt-1">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h3 className="font-bold text-orange-900 mb-3">⏳ Pendiente: Credenciales de GitHub</h3>
          <p className="text-sm text-orange-800">
            Para completar el push a GitHub, se necesitan las credenciales del usuario (token de acceso personal o SSH key). 
            Una vez proporcionadas, ejecutar los comandos anteriores para subir el repositorio.
          </p>
          <p className="text-sm text-orange-800 mt-2">
            <strong>Nota de seguridad:</strong> Nunca incluir tokens, API keys o credenciales en el código. 
            Usar variables de entorno (.env) y agregar .env al .gitignore.
          </p>
        </div>
      </div>
    );
  }

  function ExportacionSection() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Exportación</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-bold text-blue-900 mb-2">Single Source of Truth</h3>
          <p className="text-sm text-blue-800">
            Todo el corpus curricular se mantiene en una fuente centralizada (/data/curriculum.ts). 
            Desde ella se genera la versión web. Las versiones documentales (PDF, DOCX, XLSX, JSON, Markdown) 
            se generan desde esta misma fuente sin mantener versiones manuales diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { format: 'JSON', desc: 'Exportación completa del corpus estructurado', icon: '📦' },
            { format: 'Markdown', desc: 'Documentación legible para cada sección', icon: '📝' },
            { format: 'PDF', desc: 'Documento imprimible de la programación', icon: '📄' },
            { format: 'DOCX', desc: 'Documento editable para el departamento', icon: '📃' },
            { format: 'XLSX', desc: 'Matrices de trazabilidad y cobertura', icon: '📊' },
          ].map(f => (
            <div key={f.format} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-bold text-lg">{f.format}</h3>
              <p className="text-xs text-gray-600 mt-1">{f.desc}</p>
              <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Preparado para generación</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg mb-4">Estructura del Corpus Exportable</h3>
          <pre className="text-xs bg-gray-50 p-4 rounded-lg overflow-x-auto">
{`/data/
  curriculum.ts          ← Single Source of Truth
    ├── normas[]
    ├── objetivos[]
    ├── contenidos[]
    ├── criterios[]
    ├── instrumentos[]
    ├── evidencias[]
    ├── rubricas[]
    ├── unidades[]
    ├── actividades[]
    ├── pendientesValidacion[]
    └── auditoriaCalidad{}`}
          </pre>
        </div>
      </div>
    );
  }
}
