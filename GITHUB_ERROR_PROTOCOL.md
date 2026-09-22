# Protocolo de Resolución: GitHub API Validation Failed

## 🎯 Objetivo

Diagnosticar y resolver el error **"GitHub API error: Validation Failed"** que puede aparecer durante:
- Creación de repositorios
- Push de cambios
- Cambio de rama por defecto
- Creación de Pull Requests
- Configuración de workflows
- Despliegue en Vercel

---

## 🔍 Paso 1: Diagnóstico Inicial

### Preguntas Clave

Antes de intentar cualquier solución, responde:

1. **¿En qué paso exacto aparece el error?**
   - [ ] Creación de repositorio
   - [ ] Push inicial (`git push -u origin main`)
   - [ ] Cambio de rama por defecto
   - [ ] Creación de Pull Request
   - [ ] Configuración de GitHub Actions
   - [ ] Despliegue en Vercel
   - [ ] Otro: _______________

2. **¿Qué operación concreta se estaba ejecutando?**
   ```bash
   # Ejemplo: git push -u origin main
   # Ejemplo: curl -X POST https://api.github.com/user/repos ...
   ```

3. **¿Qué mensaje adicional acompaña al error?**
   ```json
   // Copiar el mensaje completo, especialmente si incluye:
   {
     "message": "Validation Failed",
     "errors": [
       {
         "resource": "...",
         "field": "...",
         "code": "..."
       }
     ],
     "documentation_url": "..."
   }
   ```

4. **¿Qué método se está usando?**
   - [ ] API REST (curl, fetch, axios)
   - [ ] CLI `gh` (GitHub CLI)
   - [ ] Interfaz web de GitHub
   - [ ] Script automatizado
   - [ ] Git CLI estándar

---

## 📋 Paso 2: Verificaciones Básicas

### 2.1 Verificar Identidad Git

```bash
# Ver nombre de usuario
git config --global user.name

# Ver email
git config --global user.email
```

**✅ CORRECTO**: El email coincide con uno verificado en GitHub
**❌ INCORRECTO**: El email no está verificado

**Solución**:
```bash
# Configurar email correcto
git config --global user.email "tu-email-verificado@ejemplo.com"

# Verificar en GitHub:
# Settings → Emails → Verificar que el email está marcado como "Verified"
```

### 2.2 Verificar Token de Acceso (si aplica)

```bash
# Si usas API REST, verifica el token
echo $GITHUB_TOKEN

# O verifica en la configuración
cat ~/.gitconfig
```

**✅ CORRECTO**: Token existe, no expirado, con scopes adecuados
**❌ INCORRECTO**: Token ausente, expirado o sin permisos

**Solución**:
1. Ir a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generar nuevo token con scopes:
   - `repo` (para repos privados)
   - `public_repo` (para repos públicos)
   - `workflow` (si usas GitHub Actions)
3. Guardar el token de forma segura

### 2.3 Verificar Remoto

```bash
# Ver configuración de remotos
git remote -v
```

**✅ CORRECTO**:
```
origin  https://github.com/TU-USUARIO/TU-REPO.git (fetch)
origin  https://github.com/TU-USUARIO/TU-REPO.git (push)
```

**❌ INCORRECTO**: URL incorrecta o ausente

**Solución**:
```bash
# Eliminar remoto incorrecto
git remote remove origin

# Añadir remoto correcto
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
```

### 2.4 Verificar Ramas

```bash
# Ver ramas locales
git branch -a

# Ver ramas remotas
git ls-remote origin
```

**✅ CORRECTO**: Existe al menos una rama (main o master)
**❌ INCORRECTO**: No hay ramas o la rama por defecto no existe

**Solución**:
```bash
# Crear y subir rama main
git checkout -b main
git push -u origin main
```

---

## 🎯 Paso 3: Catálogo de Causas y Soluciones

### Causa 1: Autenticación Incorrecta

**Síntomas**:
- Error 401 Unauthorized
- Error 403 Forbidden
- "Bad credentials"

**Solución**:
```bash
# Regenerar token PAT
# GitHub → Settings → Developer settings → Personal access tokens

# Usar el nuevo token
git remote set-url origin https://TU-TOKEN@github.com/TU-USUARIO/TU-REPO.git
```

### Causa 2: Datos de Entrada Inválidos

**Síntomas**:
- Error 422 Unprocessable Entity
- Campo `errors` en la respuesta

**Solución**:
```bash
# Validar JSON antes de enviar
cat request.json | jq .

# Verificar esquema oficial en:
# https://docs.github.com/en/rest
```

**Ejemplo correcto para crear repositorio**:
```bash
curl -X POST \
  -H "Authorization: token TU_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "nombre-valido",
    "description": "Descripción válida",
    "private": false,
    "auto_init": true
  }'
```

### Causa 3: Rama por Defecto Inexistente

**Síntomas**:
- Error al cambiar `default_branch`
- "Branch not found"

**Solución**:
```bash
# 1. Crear y subir la rama PRIMERO
git checkout -b main
git push -u origin main

# 2. DESPUÉS cambiar la rama por defecto
curl -X PATCH \
  -H "Authorization: token TU_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/TU-USUARIO/TU-REPO \
  -d '{"default_branch": "main"}'
```

### Causa 4: Configuración Git Incorrecta

**Síntomas**:
- Error de firma de commits
- "Committer identity unknown"

**Solución**:
```bash
# Configurar identidad
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# Verificar
git config --list
```

### Causa 5: Permisos Insuficientes

**Síntomas**:
- Error 403 Forbidden
- "Resource not accessible by integration"

**Solución**:
1. Verificar scopes del token:
   - `repo` para repos privados
   - `public_repo` para repos públicos
   - `workflow` para GitHub Actions

2. Verificar permisos en el repositorio:
   - GitHub → Repositorio → Settings → Collaborators and teams
   - Confirmar que tienes rol de Admin o Write

### Causa 6: Recurso Ya Existente

**Síntomas**:
- Error 422 Unprocessable Entity
- "name already exists on this account"

**Solución**:
```bash
# Comprobar si el repositorio existe
curl -H "Authorization: token TU_TOKEN" \
  https://api.github.com/repos/TU-USUARIO/TU-REPO

# Si existe, usar otro nombre o eliminar el existente
```

### Causa 7: Nombre de Repositorio Inválido

**Síntomas**:
- Error 422 Unprocessable Entity
- "name is invalid"

**Reglas**:
- Solo letras, números, guiones (-) y guiones bajos (_)
- Longitud: 1-100 caracteres
- No puede empezar con guión
- No puede ser nombre reservado

**Ejemplos válidos**:
```
programacion-didactica-2026
mc-banda-orquesta-ep
mi_repositorio_123
```

**Ejemplos inválidos**:
```
-repositorio (empieza con guión)
repositorio especial (espacios)
repositorio/slash (caracteres especiales)
```

### Causa 8: Protección de Rama

**Síntomas**:
- Error 403 Forbidden
- "protected branch hook declined"

**Solución**:
```bash
# Opción 1: Usar Pull Request
git checkout -b nueva-rama
git push -u origin nueva-rama
# Crear PR en GitHub

# Opción 2: Ajustar reglas de protección (requiere admin)
# GitHub → Repositorio → Settings → Branches → Edit reglas
```

### Causa 9: Falta de Confirmación

**Síntomas**:
- Error 422 Unprocessable Entity
- "Requires confirmation"

**Solución**:
```bash
# Añadir parámetro de confirmación
curl -X DELETE \
  -H "Authorization: token TU_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/TU-USUARIO/TU-REPO \
  -d '{"confirm": "TU-USUARIO/TU-REPO"}'
```

### Causa 10: Rate Limit o Abuso

**Síntomas**:
- Error 403 Forbidden
- "API rate limit exceeded"

**Solución**:
```bash
# Verificar límites
curl -H "Authorization: token TU_TOKEN" \
  https://api.github.com/rate_limit

# Esperar al restablecimiento o usar token autenticado
# Límite sin token: 60 peticiones/hora
# Límite con token: 5000 peticiones/hora
```

### Causa 11: Cabecera Accept Incorrecta

**Síntomas**:
- Error 415 Unsupported Media Type
- "Media type not accepted"

**Solución**:
```bash
# Añadir cabeceras correctas
curl -X POST \
  -H "Authorization: token TU_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/...
```

### Causa 12: Mezcla SSH vs HTTPS

**Síntomas**:
- Error de autenticación
- "Permission denied (publickey)"

**Solución**:
```bash
# Opción 1: Usar HTTPS con token
git remote set-url origin https://TU-TOKEN@github.com/TU-USUARIO/TU-REPO.git

# Opción 2: Usar SSH con clave
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# Añadir clave a GitHub
cat ~/.ssh/id_ed25519.pub
# GitHub → Settings → SSH and GPG keys → New SSH key

# Cambiar remoto a SSH
git remote set-url origin git@github.com:TU-USUARIO/TU-REPO.git
```

---

## 🧪 Paso 4: Reproducir el Error con Comando Mínimo

### Para API REST

```bash
# Crear repositorio (ejemplo)
curl -v -X POST \
  -H "Authorization: token TU_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -H "Content-Type: application/json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "test-repo",
    "private": false
  }'
```

### Para Git CLI

```bash
# Push con verbose
git push -u origin main --verbose

# Ver detalles de conexión
GIT_CURL_VERBOSE=1 git push -u origin main
```

---

## 📝 Paso 5: Registro de Incidencias

Para cada incidencia, completar esta tabla:

| Campo | Valor |
|-------|-------|
| **Fecha** | YYYY-MM-DD |
| **Paso** | (ej: push inicial) |
| **Operación** | (ej: git push -u origin main) |
| **Mensaje de error** | (copiar mensaje completo) |
| **Causa identificada** | (ej: token expirado) |
| **Solución aplicada** | (ej: regenerar token) |
| **Resultado** | VERIFICADO / HOLD |
| **Observaciones** | (notas adicionales) |

---

## ✅ Paso 6: Verificar Resolución

```bash
# Repetir la operación que falló
git push -u origin main

# Verificar éxito
git status
git log --oneline
```

**✅ ÉXITO**: Operación completada sin errores
**❌ FALLO**: Error persiste → volver al Paso 1

---

## 📚 Recursos Adicionales

- [Documentación oficial de GitHub API](https://docs.github.com/en/rest)
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [Status Codes HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [GitHub Community Forum](https://github.community/)

---

## 🆘 Soporte

Si después de seguir este protocolo el error persiste:

1. **Recopilar información**:
   - Comando exacto ejecutado
   - Mensaje de error completo
   - Configuración Git (`git config --list`)
   - Versión de Git (`git --version`)

2. **Buscar en**:
   - [GitHub Community Forum](https://github.community/)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/github-api)

3. **Crear issue** en el repositorio del proyecto con toda la información recopilada.

---

**Última actualización**: 2026
**Estado**: Protocolo completo y verificado
