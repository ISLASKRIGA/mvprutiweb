/* ==========================================================================
   RUTI - MOTOR LÓGICO DE LA APLICACIÓN (METRO CDMX EN TIEMPO REAL)
   ========================================================================== */

// 1. DICCIONARIO DE LAS 12 LÍNEAS DEL METRO DE LA CIUDAD DE MÉXICO
// Contiene coordenadas geográficas reales de estaciones clave para trazar las rutas.
const METRO_LINES = {
    "L1": {
        name: "Línea 1",
        color: "#f070a1",
        colorDark: "#d04f7c",
        icon: "🚇",
        stations: [
            { name: "Observatorio", coords: [19.3982, -99.2003] },
            { name: "Tacubaya", coords: [19.4032, -99.1873] },
            { name: "Juanacatlán", coords: [19.4128, -99.1822] },
            { name: "Chapultepec", coords: [19.4206, -99.1763] },
            { name: "Sevilla", coords: [19.4219, -99.1706] },
            { name: "Insurgentes", coords: [19.4233, -99.1630] },
            { name: "Cuauhtémoc", coords: [19.4258, -99.1547] },
            { name: "Balderas", coords: [19.4273, -99.1491] },
            { name: "Salto del Agua", coords: [19.4270, -99.1423] },
            { name: "Isabel la Católica", coords: [19.4266, -99.1378] },
            { name: "Pino Suárez", coords: [19.4260, -99.1330] },
            { name: "Merced", coords: [19.4256, -99.1250] },
            { name: "Candelaria", coords: [19.4285, -99.1198] },
            { name: "San Lázaro", coords: [19.4303, -99.1147] },
            { name: "Moctezuma", coords: [19.4278, -99.1100] },
            { name: "Balbuena", coords: [19.4246, -99.1022] },
            { name: "Gómez Farías", coords: [19.4202, -99.0903] },
            { name: "Zaragoza", coords: [19.4124, -99.0823] },
            { name: "Pantitlán", coords: [19.4162, -99.0745] }
        ]
    },
    "L2": {
        name: "Línea 2",
        color: "#005f9e",
        colorDark: "#004b7e",
        icon: "🚇",
        stations: [
            { name: "Cuatro Caminos", coords: [19.4596, -99.2158] },
            { name: "Panteones", coords: [19.4586, -99.2030] },
            { name: "Tacuba", coords: [19.4595, -99.1889] },
            { name: "Cuitláhuac", coords: [19.4578, -99.1738] },
            { name: "Popotla", coords: [19.4526, -99.1678] },
            { name: "Colegio Militar", coords: [19.4492, -99.1627] },
            { name: "Normal", coords: [19.4442, -99.1601] },
            { name: "San Cosme", coords: [19.4418, -99.1539] },
            { name: "Revolución", coords: [19.4373, -99.1524] },
            { name: "Hidalgo", coords: [19.4372, -99.1472] },
            { name: "Bellas Artes", coords: [19.4362, -99.1418] },
            { name: "Allende", coords: [19.4357, -99.1373] },
            { name: "Zócalo", coords: [19.4328, -99.1332] },
            { name: "Pino Suárez", coords: [19.4260, -99.1330] },
            { name: "San Antonio Abad", coords: [19.4188, -99.1341] },
            { name: "Chabacano", coords: [19.4086, -99.1358] },
            { name: "Viaducto", coords: [19.4009, -99.1368] },
            { name: "Xola", coords: [19.3951, -99.1376] },
            { name: "Villa de Cortés", coords: [19.3879, -99.1384] },
            { name: "Nativitas", coords: [19.3795, -99.1393] },
            { name: "Portales", coords: [19.3699, -99.1402] },
            { name: "Ermita", coords: [19.3621, -99.1429] },
            { name: "General Anaya", coords: [19.3533, -99.1449] },
            { name: "Tasqueña", coords: [19.3442, -99.1426] }
        ]
    },
    "L3": {
        name: "Línea 3",
        color: "#af9b1e",
        colorDark: "#8f7f18",
        icon: "🚇",
        stations: [
            { name: "Indios Verdes", coords: [19.4975, -99.1192] },
            { name: "Deportivo 18 de Marzo", coords: [19.4839, -99.1243] },
            { name: "Potrero", coords: [19.4772, -99.1278] },
            { name: "La Raza", coords: [19.4697, -99.1358] },
            { name: "Tlatelolco", coords: [19.4549, -99.1430] },
            { name: "Guerrero", coords: [19.4449, -99.1447] },
            { name: "Hidalgo", coords: [19.4372, -99.1472] },
            { name: "Juárez", coords: [19.4332, -99.1478] },
            { name: "Balderas", coords: [19.4273, -99.1491] },
            { name: "Niños Héroes", coords: [19.4190, -99.1504] },
            { name: "Hospital General", coords: [19.4137, -99.1524] },
            { name: "Centro Médico", coords: [19.4069, -99.1547] },
            { name: "Etiopía", coords: [19.3958, -99.1560] },
            { name: "Eugenia", coords: [19.3857, -99.1578] },
            { name: "División del Norte", coords: [19.3804, -99.1593] },
            { name: "Zapata", coords: [19.3707, -99.1648] },
            { name: "Coyoacán", coords: [19.3615, -99.1706] },
            { name: "Viveros / D. H.", coords: [19.3541, -99.1762] },
            { name: "M. A. de Quevedo", coords: [19.3461, -99.1802] },
            { name: "Copilco", coords: [19.3359, -99.1822] },
            { name: "Universidad", coords: [19.3243, -99.1739] }
        ]
    },
    "L4": {
        name: "Línea 4",
        color: "#55c4c4",
        colorDark: "#3b9e9e",
        icon: "🚇",
        stations: [
            { name: "Martín Carrera", coords: [19.4851, -99.1044] },
            { name: "Talismán", coords: [19.4741, -99.1075] },
            { name: "Bondojito", coords: [19.4644, -99.1102] },
            { name: "Consulado", coords: [19.4503, -99.1136] },
            { name: "Canal del Norte", coords: [19.4414, -99.1147] },
            { name: "Morelos", coords: [19.4378, -99.1144] },
            { name: "Candelaria", coords: [19.4285, -99.1198] },
            { name: "Fray Servando", coords: [19.4206, -99.1227] },
            { name: "Jamaica", coords: [19.4089, -99.1219] },
            { name: "Santa Anita", coords: [19.4026, -99.1206] }
        ]
    },
    "L5": {
        name: "Línea 5",
        color: "#fcd116",
        colorDark: "#cfa90f",
        icon: "🚇",
        stations: [
            { name: "Politécnico", coords: [19.5009, -99.1488] },
            { name: "Instituto del Petróleo", coords: [19.4897, -99.1428] },
            { name: "Autobuses del Norte", coords: [19.4792, -99.1403] },
            { name: "La Raza", coords: [19.4697, -99.1358] },
            { name: "Misterios", coords: [19.4619, -99.1293] },
            { name: "Valle Gómez", coords: [19.4578, -99.1199] },
            { name: "Consulado", coords: [19.4503, -99.1136] },
            { name: "Eduardo Molina", coords: [19.4497, -99.0989] },
            { name: "Aragón", coords: [19.4475, -99.0886] },
            { name: "Oceanía", coords: [19.4452, -99.0872] },
            { name: "Terminal Aérea", coords: [19.4347, -99.0875] },
            { name: "Hangares", coords: [19.4244, -99.0869] },
            { name: "Pantitlán", coords: [19.4162, -99.0745] }
        ]
    },
    "L6": {
        name: "Línea 6",
        color: "#d01c1f",
        colorDark: "#a61215",
        icon: "🚇",
        stations: [
            { name: "El Rosario", coords: [19.5042, -99.2001] },
            { name: "Tezozómoc", coords: [19.4975, -99.1936] },
            { name: "UAM-Azcapotzalco", coords: [19.4907, -99.1834] },
            { name: "Ferrería / Arena CDMX", coords: [19.4904, -99.1730] },
            { name: "Norte 45", coords: [19.4894, -99.1622] },
            { name: "Vallejo", coords: [19.4896, -99.1558] },
            { name: "Instituto del Petróleo", coords: [19.4897, -99.1428] },
            { name: "Lindavista", coords: [19.4869, -99.1332] },
            { name: "Deportivo 18 de Marzo", coords: [19.4839, -99.1243] },
            { name: "La Villa-Basílica", coords: [19.4820, -99.1189] },
            { name: "Martín Carrera", coords: [19.4851, -99.1044] }
        ]
    },
    "L7": {
        name: "Línea 7",
        color: "#f37021",
        colorDark: "#c75411",
        icon: "🚇",
        stations: [
            { name: "El Rosario", coords: [19.5042, -99.2001] },
            { name: "Aquiles Serdán", coords: [19.4883, -99.1947] },
            { name: "Camarones", coords: [19.4789, -99.1896] },
            { name: "Tacuba", coords: [19.4595, -99.1889] },
            { name: "San Joaquín", coords: [19.4449, -99.1969] },
            { name: "Polanco", coords: [19.4326, -99.2039] },
            { name: "Auditorio", coords: [19.4252, -99.1999] },
            { name: "Constituyentes", coords: [19.4116, -99.1906] },
            { name: "Tacubaya", coords: [19.4032, -99.1873] },
            { name: "San Pedro de los Pinos", coords: [19.3905, -99.1864] },
            { name: "San Antonio", coords: [19.3846, -99.1866] },
            { name: "Mixcoac", coords: [19.3758, -99.1881] },
            { name: "Barranca del Muerto", coords: [19.3606, -99.1893] }
        ]
    },
    "L8": {
        name: "Línea 8",
        color: "#008d64",
        colorDark: "#006f4e",
        icon: "🚇",
        stations: [
            { name: "Garibaldi / Lagunilla", coords: [19.4443, -99.1394] },
            { name: "Bellas Artes", coords: [19.4362, -99.1418] },
            { name: "San Juan de Letrán", coords: [19.4322, -99.1422] },
            { name: "Salto del Agua", coords: [19.4270, -99.1423] },
            { name: "Doctores", coords: [19.4215, -99.1415] },
            { name: "Obrera", coords: [19.4132, -99.1399] },
            { name: "Chabacano", coords: [19.4086, -99.1358] },
            { name: "La Viga", coords: [19.4019, -99.1278] },
            { name: "Santa Anita", coords: [19.4026, -99.1206] },
            { name: "Coyuya", coords: [19.3986, -99.1130] },
            { name: "Iztacalco", coords: [19.3888, -99.1122] },
            { name: "Apatlaco", coords: [19.3789, -99.1154] },
            { name: "Aculco", coords: [19.3725, -99.1147] },
            { name: "Escuadrón 201", coords: [19.3644, -99.1102] },
            { name: "Atlalilco", coords: [19.3556, -99.1017] },
            { name: "Iztapalapa", coords: [19.3582, -99.0926] },
            { name: "Cerro de la Estrella", coords: [19.3559, -99.0818] },
            { name: "UAM-I", coords: [19.3508, -99.0747] },
            { name: "Constitución de 1917", coords: [19.3458, -99.0628] }
        ]
    },
    "L9": {
        name: "Línea 9",
        color: "#7e5109",
        colorDark: "#623e05",
        icon: "🚇",
        stations: [
            { name: "Tacubaya", coords: [19.4032, -99.1873] },
            { name: "Patriotismo", coords: [19.4061, -99.1788] },
            { name: "Chilpancingo", coords: [19.4060, -99.1684] },
            { name: "Centro Médico", coords: [19.4069, -99.1547] },
            { name: "Lázaro Cárdenas", coords: [19.4069, -99.1432] },
            { name: "Chabacano", coords: [19.4086, -99.1358] },
            { name: "Jamaica", coords: [19.4089, -99.1219] },
            { name: "Mixiuhca", coords: [19.4085, -99.1100] },
            { name: "Velódromo", coords: [19.4089, -99.0978] },
            { name: "Ciudad Deportiva", coords: [19.4083, -99.0872] },
            { name: "Puebla", coords: [19.4071, -99.0801] },
            { name: "Pantitlán", coords: [19.4162, -99.0745] }
        ]
    },
    "LA": {
        name: "Línea A",
        color: "#9b268f",
        colorDark: "#7b1971",
        icon: "🚇",
        stations: [
            { name: "Pantitlán", coords: [19.4162, -99.0745] },
            { name: "Agrícola Oriental", coords: [19.4039, -99.0744] },
            { name: "Canal de San Juan", coords: [19.3929, -99.0617] },
            { name: "Tepalcates", coords: [19.3793, -99.0465] },
            { name: "Guelatao", coords: [19.3692, -99.0347] },
            { name: "Peñón Viejo", coords: [19.3582, -99.0175] },
            { name: "Acatitla", coords: [19.3601, -98.9958] },
            { name: "Santa Marta", coords: [19.3598, -98.9800] },
            { name: "Los Reyes", coords: [19.3587, -98.9744] },
            { name: "La Paz", coords: [19.3508, -98.9608] }
        ]
    },
    "LB": {
        name: "Línea B",
        color: "#809a7a",
        colorDark: "#647b5f",
        icon: "🚇",
        stations: [
            { name: "Buenavista", coords: [19.4462, -99.1531] },
            { name: "Guerrero", coords: [19.4449, -99.1447] },
            { name: "Garibaldi / Lagunilla", coords: [19.4443, -99.1394] },
            { name: "Lagunilla", coords: [19.4429, -99.1311] },
            { name: "Tepito", coords: [19.4428, -99.1235] },
            { name: "Morelos", coords: [19.4378, -99.1144] },
            { name: "San Lázaro", coords: [19.4303, -99.1147] },
            { name: "Ricardo Flores Magón", coords: [19.4357, -99.0991] },
            { name: "Romero Rubio", coords: [19.4409, -99.0878] },
            { name: "Oceanía", coords: [19.4452, -99.0872] },
            { name: "Deportivo Oceanía", coords: [19.4533, -99.0749] },
            { name: "Bosque de Aragón", coords: [19.4636, -99.0683] },
            { name: "Villa de Aragón", coords: [19.4725, -99.0614] },
            { name: "Nezahualcóyotl", coords: [19.4828, -99.0539] },
            { name: "Impulsora", coords: [19.4939, -99.0456] },
            { name: "Río de los Remedios", coords: [19.5019, -99.0396] },
            { name: "Múzquiz", coords: [19.5161, -99.0361] },
            { name: "Ecatepec", coords: [19.5283, -99.0321] },
            { name: "Olímpica", coords: [19.5376, -99.0298] },
            { name: "Plaza Aragón", coords: [19.5469, -99.0270] },
            { name: "Ciudad Azteca", coords: [19.5539, -99.0253] }
        ]
    },
    "L12": {
        name: "Línea 12",
        color: "#dfb11b",
        colorDark: "#b58f11",
        icon: "🚇",
        stations: [
            { name: "Mixcoac", coords: [19.3758, -99.1881] },
            { name: "Insurgentes Sur", coords: [19.3742, -99.1788] },
            { name: "Hospital 20 de Nov.", coords: [19.3725, -99.1699] },
            { name: "Zapata", coords: [19.3707, -99.1648] },
            { name: "Parque de los Venados", coords: [19.3694, -99.1578] },
            { name: "Eje Central", coords: [19.3653, -99.1462] },
            { name: "Ermita", coords: [19.3621, -99.1429] },
            { name: "Mexicaltzingo", coords: [19.3598, -99.1288] },
            { name: "Atlalilco", coords: [19.3556, -99.1017] },
            { name: "Culhuacán", coords: [19.3499, -99.0934] },
            { name: "San Andrés Tomatlán", coords: [19.3439, -99.0886] },
            { name: "Lomas de Estrella", coords: [19.3339, -99.0822] },
            { name: "Calle 11", coords: [19.3243, -99.0801] },
            { name: "Periférico Oriente", coords: [19.3175, -99.0759] },
            { name: "Tezonco", coords: [19.3114, -99.0706] },
            { name: "Olivos", coords: [19.3069, -99.0641] },
            { name: "Nopalera", coords: [19.3003, -99.0519] },
            { name: "Zapotitlán", coords: [19.2966, -99.0439] },
            { name: "Tlaltenco", coords: [19.2978, -99.0249] },
            { name: "Tláhuac", coords: [19.2868, -99.0136] }
        ]
    }
};

// ================= ESTADO GLOBAL DE LA APLICACIÓN =================
const AppState = {
    role: null,                  // 'passenger' o 'vehicle'
    map: null,                   // Instancia del mapa Leaflet
    selectedLine: "L1",          // ID de línea seleccionada
    userLocation: null,          // Coordenadas [lat, lng] del usuario
    userMarker: null,            // Marcador Leaflet del usuario
    
    // Rutas e infraestructura del Metro en el mapa
    drawnPolylines: {},          // Guarda las polilíneas de las líneas del metro
    drawnStations: [],           // Marcadores de estaciones de la línea activa
    
    // Variables para el Conductor (Vehículo)
    isTracking: false,           // ¿Está transmitiendo señal?
    transmissionMode: "simulate", // 'simulate' o 'gps'
    driverSelectedLine: "L1",    // Línea que opera el conductor
    simulationInterval: null,    // ID del timer de simulación
    simCurrentIndex: 0,          // Estación actual en la simulación
    simNextIndex: 1,             // Siguiente estación en la simulación
    simProgress: 0,              // Progreso entre estaciones (0 a 100)
    simSpeedMultiplier: 1,       // Multiplicador de velocidad (1, 2, 5, 10)
    gpsWatchId: null,            // WatchID del geolocalizador
    gpsHeartbeatInterval: null,  // Interval del latido de GPS (evita desconexiones por inactividad)
    vehicleCoords: null,         // Coordenadas actuales del conductor
    
    // Variables para el Pasajero (Usuario)
    activeVehicles: {},          // Diccionario de vehículos remotos activos: { id: { marker, data, lastUpdate } }
    activeFocusVehicleId: null,  // ID del vehículo enfocado

    // Variables de sincronización remota por Internet (MQTT)
    groupCode: "CDMX",           // Código de grupo/sala para sincronizar
    mqttClient: null,            // Cliente de MQTT
    mqttTopic: "",               // Topic en el que se transmiten/escuchan datos

    // Wake Lock para mantener pantalla encendida mientras se conduce
    wakeLock: null,              // WakeLockSentinel activo

    // Último paquete enviado (para re-enviar tras reconexión MQTT)
    lastBroadcastPacket: null    // Copia del último packet enviado
};

// ================= MÓDULO DE TELEMETRÍA ANÓNIMA =================
// Recopila datos de movilidad de forma anonimizada para análisis B2B.
// NUNCA recopila: nombre, email, teléfono, CURP ni ubicación exacta.
// Cumple con la LFPDPPP (México). Datos sólo se activan con consentimiento explícito.

const Telemetry = {

    // ─── Configuración Supabase ───────────────────────────────────────────────────
    ENDPOINT: 'https://owvqycupqtcerirfnxtm.supabase.co/rest/v1/ruti_events',
    API_KEY:  'sb_publishable__oSpjLyfepXXGVzZwG8Iag___BOIsNI',  // anon key (segura en frontend)

    // ─── Estado interno ──────────────────────────────────────────────────────────
    enabled:      false,
    userId:       null,   // UID anónimo persistente (no vinculable a persona real)
    sessionId:    null,   // ID de sesión por apertura de la app
    sessionStart: null,
    sessionLines: new Set(),   // Líneas vistas en esta sesión
    eventQueue:   [],          // Cola de eventos pendientes de enviar

    // ─── Inicialización ──────────────────────────────────────────────────────────
    init() {
        const consent = localStorage.getItem('ruti_consent');
        const toggle  = document.getElementById('toggle-analytics');
        if (consent === 'granted') {
            if (toggle) toggle.checked = true;
            this._activate();
        } else if (consent === 'denied' && toggle) {
            toggle.checked = false;
        }
    },

    // Llamar cuando el usuario cambia el toggle
    setConsent(granted) {
        localStorage.setItem('ruti_consent', granted ? 'granted' : 'denied');
        if (granted) {
            this._activate();
            this.track('consent_granted');
            showTelemetryToast('📊 ¡Gracias! Tus datos ayudan a mejorar la movilidad');
        } else {
            this.track('consent_revoked');
            this.enabled = false;
            showTelemetryToast('🔒 Telemetría desactivada. No se recopilarán datos.');
        }
    },

    _activate() {
        this.enabled = true;

        // Generar o recuperar UID anónimo persistente
        this.userId = localStorage.getItem('ruti_uid');
        if (!this.userId) {
            this.userId = 'u_' + this._genId();
            localStorage.setItem('ruti_uid', this.userId);
        }

        // Nueva sesión por cada apertura
        this.sessionId    = 's_' + this._genId();
        this.sessionStart = Date.now();
        this.sessionLines.clear();

        this.track('session_start', {
            platform: this._platform(),
            sw:       window.screen.width,
            sh:       window.screen.height,
            tz:       Intl.DateTimeFormat().resolvedOptions().timeZone
        });
    },

    // ─── Registro de evento ──────────────────────────────────────────────────────
    track(eventName, props = {}) {
        if (!this.enabled && eventName !== 'consent_granted') return;

        const ev = {
            uid:   this.userId,
            sid:   this.sessionId,
            ev:    eventName,
            ts:    Date.now(),
            hour:  new Date().getHours(),
            dow:   new Date().getDay(),   // 0=Dom … 6=Sáb
            ...props
        };

        this._persist(ev);
        this.eventQueue.push(ev);
        if (this.ENDPOINT) this._flush();
    },

    // ─── Helpers internos ────────────────────────────────────────────────────────
    _genId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    },

    _platform() {
        const ua = navigator.userAgent;
        if (/iPhone|iPad/.test(ua)) return 'ios';
        if (/Android/.test(ua))     return 'android';
        return 'desktop';
    },

    _persist(ev) {
        try {
            const stored = JSON.parse(localStorage.getItem('ruti_events') || '[]');
            stored.push(ev);
            if (stored.length > 1000) stored.splice(0, stored.length - 1000);
            localStorage.setItem('ruti_events', JSON.stringify(stored));
        } catch (_) { /* localStorage lleno o bloqueado */ }
    },

    _flush() {
        if (!this.ENDPOINT || this.eventQueue.length === 0) return;
        const batch = this.eventQueue.splice(0);

        // Supabase PostgREST requiere: apikey + Authorization Bearer + Prefer: return=minimal
        const headers = {
            'Content-Type':  'application/json',
            'apikey':        this.API_KEY,
            'Authorization': `Bearer ${this.API_KEY}`,
            'Prefer':        'return=minimal'
        };

        fetch(this.ENDPOINT, {
            method:    'POST',
            headers,
            body:      JSON.stringify(batch),   // Array → insert múltiple en Supabase
            keepalive: true
        }).catch(() => {
            // Si falla la red, reencolar para el próximo evento
            this.eventQueue.unshift(...batch);
        });
    },

    // ─── API pública de utilidad ─────────────────────────────────────────────────

    // Resumen de datos guardados localmente (para mostrar transparencia al usuario)
    getStats() {
        try {
            const evs      = JSON.parse(localStorage.getItem('ruti_events') || '[]');
            const sessions = new Set(evs.map(e => e.sid)).size;
            const lines    = [...new Set(evs.filter(e => e.line).map(e => e.line))];
            return { total: evs.length, sessions, lines };
        } catch (_) {
            return { total: 0, sessions: 0, lines: [] };
        }
    },

    // Borrar todo rastro local del usuario
    clearAll() {
        ['ruti_events', 'ruti_uid', 'ruti_consent'].forEach(k => localStorage.removeItem(k));
        this.enabled      = false;
        this.userId       = null;
        this.sessionId    = null;
        this.eventQueue   = [];
        this.sessionLines.clear();
        const toggle = document.getElementById('toggle-analytics');
        if (toggle) toggle.checked = false;
        showTelemetryToast('🗑️ Datos locales eliminados correctamente');
    }
};

// Toast ligero para feedback de telemetría
function showTelemetryToast(msg) {
    let toast = document.getElementById('telemetry-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'telemetry-toast';
        toast.className = 'telemetry-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('visible'), 3200);
}

// ================= CANAL DE COMUNICACIÓN EN TIEMPO REAL =================
// Usamos BroadcastChannel para sincronizar ventanas del mismo navegador.
// Agregamos respaldo en LocalStorage para garantizar soporte universal multiplataforma.
const REALTIME_CHANNEL_NAME = 'ruti_realtime_v1';
let realtimeChannel;

try {
    realtimeChannel = new BroadcastChannel(REALTIME_CHANNEL_NAME);
    realtimeChannel.onmessage = (event) => handleIncomingMessage(event.data);
} catch (e) {
    console.warn("BroadcastChannel no soportado. Usando fallback de localStorage.");
}

// Fallback de LocalStorage para recibir mensajes de otros tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'ruti_packet' && e.newValue) {
        try {
            const data = JSON.parse(e.newValue);
            handleIncomingMessage(data);
        } catch (err) {}
    }
});

// ID único de conductor para esta sesión/pestaña (permite múltiples conductores simultáneos)
const DRIVER_SESSION_ID = 'driver_' + Math.random().toString(36).substring(2, 9);

// Función para enviar paquetes a través del canal en tiempo real
function broadcastMessage(packet) {
    packet.timestamp = Date.now();
    packet.senderId = DRIVER_SESSION_ID;
    
    // Guardar una copia del último paquete para poder reenviarlo al reconectar
    AppState.lastBroadcastPacket = { ...packet };
    
    // 1. Enviar por BroadcastChannel
    if (realtimeChannel) {
        realtimeChannel.postMessage(packet);
    }
    
    // 2. Enviar por LocalStorage (Fallback y redundancia)
    localStorage.setItem('ruti_packet', JSON.stringify(packet));
    
    // 3. Enviar por Internet (MQTT) a otros dispositivos
    if (AppState.mqttClient && AppState.mqttClient.connected) {
        // QoS 1 garantiza que el mensaje llegue al menos una vez
        AppState.mqttClient.publish(AppState.mqttTopic, JSON.stringify(packet), { qos: 1, retain: false });
    } else if (AppState.mqttClient && !AppState.mqttClient.connected) {
        // Si no estamos conectados pero el cliente existe, intentar reconectar
        try { AppState.mqttClient.reconnect(); } catch(e) {}
    }
}

// ================= CONTROLADOR DE ESTADO DE CONEXIÓN (MQTT STATUS) =================
function updateConnectionStatus(status, details = "") {
    const badge = document.getElementById('badge-conn');
    if (!badge) return;
    
    badge.className = 'badge'; // Reiniciar clases
    
    if (status === 'connected') {
        badge.classList.add('badge-conn-connected');
        badge.innerText = `🌐 ${AppState.groupCode}`;
        badge.title = `Conectado al servidor. Grupo: ${AppState.groupCode}`;
    } else if (status === 'connecting') {
        badge.classList.add('badge-conn-connecting');
        badge.innerText = "🌐 ...";
        badge.title = "Estableciendo conexión en tiempo real...";
    } else {
        badge.classList.add('badge-conn-offline');
        badge.innerText = "🌐 Offline";
        badge.title = `Desconectado: ${details || 'Revisa tu red o Brave Shields'}.`;
    }
}

// ================= NOTIFICACIÓN DE CONDUCTORES EN OTRAS LÍNEAS =================
function updateOtherLinesBanner() {
    const banner = document.getElementById('passenger-other-lines-banner');
    const listContainer = document.getElementById('other-lines-list');
    if (!banner || !listContainer) return;
    
    // En modo ALL, el resumen global ya muestra todo. Ocultamos el banner.
    if (AppState.selectedLine === 'ALL') {
        banner.classList.add('hidden');
        return;
    }
    
    // Buscar todas las líneas con conductores activos que no sean la seleccionada actual
    const activeLines = new Set();
    Object.values(AppState.activeVehicles).forEach(vehicle => {
        if (vehicle.lineId && vehicle.lineId !== AppState.selectedLine) {
            activeLines.add(vehicle.lineId);
        }
    });
    
    if (activeLines.size > 0) {
        listContainer.innerHTML = '';
        activeLines.forEach(lineId => {
            const line = METRO_LINES[lineId];
            if (!line) return;
            
            const btn = document.createElement('button');
            btn.className = 'other-line-chip-btn';
            btn.style.backgroundColor = line.color;
            btn.style.boxShadow = `0 3px 0 ${line.colorDark}`;
            btn.innerText = `Ver ${line.name}`;
            
            btn.addEventListener('click', () => {
                selectMetroLine(lineId);
                updatePassengerUIForLineChange(lineId);
            });
            
            listContainer.appendChild(btn);
        });
        
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
}

// ================= SISTEMA DE COMUNICACIÓN POR INTERNET (MQTT) =================
function initMQTT() {
    // Si ya existe un cliente activo, terminarlo limpiamente
    if (AppState.mqttClient) {
        try { AppState.mqttClient.end(true); } catch (e) {}
        AppState.mqttClient = null;
    }
    
    // Obtener y sanitizar el código de grupo
    let inputCode = document.getElementById('input-group-code').value.trim().toUpperCase();
    if (!inputCode) inputCode = "CDMX";
    AppState.groupCode = inputCode;
    
    // El topic será único para el grupo seleccionado
    AppState.mqttTopic = `ruti/groups/${AppState.groupCode}/trains`;
    
    console.log(`Conectando a broker MQTT en el canal: ${AppState.mqttTopic}`);
    updateConnectionStatus('connecting');
    
    try {
        // Conectar al broker EMQX público sobre puerto WSS (seguro para HTTPS)
        // reconnectPeriod: 1500ms = reconecta agresivamente si se cae la conexión
        AppState.mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
            keepalive: 20,
            clientId: 'ruti_' + DRIVER_SESSION_ID,
            clean: true,
            connectTimeout: 6000,
            reconnectPeriod: 1500    // Reintentar cada 1.5s en caso de caída
        });
        
        AppState.mqttClient.on('connect', () => {
            console.log("¡Conexión exitosa al broker de internet MQTT!");
            updateConnectionStatus('connected');
            
            // Suscribirse al topic con QoS 1
            AppState.mqttClient.subscribe(AppState.mqttTopic, { qos: 1 }, (err) => {
                if (err) console.error("Error al suscribirse al topic:", err);
                else console.log(`Suscrito con éxito a: ${AppState.mqttTopic}`);
            });
            
            // Re-enviar el último paquete del conductor tras reconexión para que los pasajeros
            // sepan inmediatamente que volvemos a estar en línea
            if (AppState.role === 'vehicle' && AppState.isTracking && AppState.lastBroadcastPacket) {
                setTimeout(() => {
                    const resendPacket = { ...AppState.lastBroadcastPacket, timestamp: Date.now() };
                    try {
                        AppState.mqttClient.publish(AppState.mqttTopic, JSON.stringify(resendPacket), { qos: 1, retain: false });
                        console.log("Re-enviado paquete de reconexión del conductor.");
                    } catch(e) {}
                }, 500);
            }
        });
        
        AppState.mqttClient.on('message', (topic, message) => {
            if (topic === AppState.mqttTopic) {
                try {
                    const packet = JSON.parse(message.toString());
                    // Evitar procesar nuestros propios paquetes (filtrado por senderId)
                    if (packet.senderId !== DRIVER_SESSION_ID) {
                        handleIncomingMessage(packet);
                    }
                } catch (e) {
                    console.error("Error al decodificar mensaje MQTT:", e);
                }
            }
        });
        
        AppState.mqttClient.on('error', (err) => {
            console.error("Error de conexión MQTT:", err);
            updateConnectionStatus('offline', err.message);
        });
        
        AppState.mqttClient.on('offline', () => {
            updateConnectionStatus('offline', 'Red offline');
            // mqtt.js auto-reconecta con reconnectPeriod; solo actualizamos el badge
        });
        
        AppState.mqttClient.on('reconnect', () => {
            updateConnectionStatus('connecting');
            console.log("Intentando reconectar al broker MQTT...");
        });
        
        AppState.mqttClient.on('close', () => {
            updateConnectionStatus('offline', 'Conexión cerrada');
        });
        
    } catch (e) {
        console.error("No se pudo iniciar el cliente MQTT:", e);
        updateConnectionStatus('offline', e.message);
    }
}

// ================= VIGILANTE DE VISIBILIDAD DE PESTAÑA (Wake-Up Guard) =================
// Cuando el usuario vuelve a la pestaña tras haberla minimizado, podría haber perdido
// la conexión MQTT. Este listener la reestablece si es necesario.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        const client = AppState.mqttClient;
        if (client && !client.connected && typeof mqtt !== 'undefined') {
            console.log("Pestaña volvió a primer plano. Reconectando MQTT...");
            updateConnectionStatus('connecting');
            try { client.reconnect(); } catch(e) { initMQTT(); }
        }
    }
});


// ================= INICIALIZACIÓN DEL MAPA =================
function initMap() {
    // Coordenadas iniciales: Centro de la Ciudad de México (Zócalo)
    const cdmxCenter = [19.4328, -99.1332];
    
    AppState.map = L.map('map', {
        zoomControl: true,
        attributionControl: true
    }).setView(cdmxCenter, 12);
    
    // Usamos el estilo Voyager de CartoDB (Limpio, elegante, colores tipo iOS)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(AppState.map);
    
    // Dibujar todas las líneas del metro en el mapa en un estado inicial transparente
    drawAllMetroLines();
    
    // Seleccionar la Línea 1 por defecto al arrancar
    selectMetroLine("L1");
}

// Dibujar la infraestructura completa de las 12 líneas
function drawAllMetroLines() {
    Object.keys(METRO_LINES).forEach(lineId => {
        const line = METRO_LINES[lineId];
        const latLngs = line.stations.map(station => station.coords);
        
        // Polilínea de fondo (resplandor)
        const glowPolyline = L.polyline(latLngs, {
            color: line.color,
            weight: 8,
            opacity: 0.15
        }).addTo(AppState.map);
        
        // Polilínea principal (sutil inicialmente)
        const mainPolyline = L.polyline(latLngs, {
            color: line.color,
            weight: 4,
            opacity: 0.4
        }).addTo(AppState.map);
        
        // Guardamos las referencias para poder alternar su visibilidad
        AppState.drawnPolylines[lineId] = {
            glow: glowPolyline,
            main: mainPolyline
        };
    });
}

// Cambiar la visualización a una única línea del metro (Requerimiento del usuario)
function selectMetroLine(lineId) {
    if (lineId !== 'ALL' && !METRO_LINES[lineId]) return;

    // 📊 Telemetría: línea seleccionada
    Telemetry.track('line_selected', {
        line:  lineId,
        role:  AppState.role || 'none',
        prev:  AppState.selectedLine
    });
    if (lineId !== 'ALL') Telemetry.sessionLines.add(lineId);

    AppState.selectedLine = lineId;
    
    // Actualizar dinámicamente las trazas de las líneas en base a conductores activos
    updateMapStyles();
    
    if (lineId === 'ALL') {
        // Ocultar marcadores de estaciones para evitar saturación visual
        clearStationMarkers();
        
        // Centrar en la CDMX globalmente
        if (AppState.map) {
            AppState.map.setView([19.4328, -99.1332], 12, {
                animate: true,
                duration: 1.2
            });
        }
    } else {
        // Dibujar estaciones solo de la línea seleccionada
        clearStationMarkers();
        drawStationMarkers(lineId);
        
        // Enfocar el mapa en la línea seleccionada de forma suave
        if (AppState.map) {
            const activeLinePoly = AppState.drawnPolylines[lineId].main;
            AppState.map.fitBounds(activeLinePoly.getBounds(), {
                padding: [30, 30],
                maxZoom: 14,
                animate: true,
                duration: 1.2
            });
        }
    }
    
    // Actualizar chips de la barra superior
    updateActiveChipUI(lineId);
    
    // Si estamos en modo "Todas", poblar listado
    if (AppState.role === 'passenger' && lineId === 'ALL') {
        updateAllSummaryCard();
    }
}

// Dibujar marcadores circulares para las estaciones de la línea activa
function drawStationMarkers(lineId) {
    const line = METRO_LINES[lineId];
    if (!line) return;
    
    line.stations.forEach((station, index) => {
        // Estilo limpio, circular y tipo Duolingo
        const marker = L.circleMarker(station.coords, {
            radius: 6,
            fillColor: "#ffffff",
            color: line.color,
            weight: 3,
            fillOpacity: 1,
            zIndexOffset: 100
        }).addTo(AppState.map);
        
        // Tooltip elegante
        marker.bindTooltip(`<strong>${station.name}</strong>`, {
            permanent: false,
            direction: 'top',
            offset: [0, -5],
            className: 'custom-leaflet-tooltip'
        });
        
        AppState.drawnStations.push(marker);
    });
}

function clearStationMarkers() {
    AppState.drawnStations.forEach(marker => {
        AppState.map.removeLayer(marker);
    });
    AppState.drawnStations = [];
}

// Actualiza de forma ultra-ligera los opacidades y visibilidad de las vías según el modo de selección
function updateMapStyles() {
    const lineId = AppState.selectedLine;
    
    // Obtener todas las líneas que tienen conductores activos actualmente
    const activeLines = new Set();
    Object.values(AppState.activeVehicles).forEach(v => {
        if (v.lineId) activeLines.add(v.lineId);
    });
    
    if (lineId === 'ALL') {
        Object.keys(METRO_LINES).forEach(id => {
            const polylines = AppState.drawnPolylines[id];
            if (!polylines) return;
            
            if (activeLines.has(id)) {
                // Línea activa: resalta sutilmente sobre el fondo
                polylines.glow.setStyle({ opacity: 0.25, weight: 10 });
                polylines.main.setStyle({ opacity: 0.75, weight: 5 });
                polylines.main.bringToFront();
            } else {
                // Red general de fondo
                polylines.glow.setStyle({ opacity: 0.1, weight: 6 });
                polylines.main.setStyle({ opacity: 0.35, weight: 3.5 });
            }
        });
    } else {
        Object.keys(METRO_LINES).forEach(id => {
            const polylines = AppState.drawnPolylines[id];
            if (!polylines) return;
            
            if (id === lineId) {
                // Línea enfocada: Brillo máximo
                polylines.glow.setStyle({ opacity: 0.45, weight: 12 });
                polylines.main.setStyle({ opacity: 1, weight: 5 });
                polylines.main.bringToFront();
            } else if (activeLines.has(id)) {
                // Línea secundaria con conductor: Dibuja semi-transparente para evitar "flotación"
                polylines.glow.setStyle({ opacity: 0.15, weight: 6 });
                polylines.main.setStyle({ opacity: 0.5, weight: 3 });
                polylines.main.bringToFront();
            } else {
                // Línea inactiva vacía: Se oculta para limpieza visual
                polylines.glow.setStyle({ opacity: 0 });
                polylines.main.setStyle({ opacity: 0 });
            }
        });
    }
}

// Rellena dinámicamente el listado del panel de control de Red Completa en la Bottom Sheet
function updateAllSummaryCard() {
    const listContainer = document.getElementById('all-summary-trains-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    // Filtrar los conductores activos reales omitiendo el conductor local
    const activeVehiclesList = Object.entries(AppState.activeVehicles)
        .filter(([id, v]) => id !== 'local-driver' && v.lineId)
        .map(([id, v]) => ({ id, ...v }));
        
    if (activeVehiclesList.length === 0) {
        listContainer.innerHTML = `
            <div class="summary-empty-state">
                <div class="empty-emoji">🛸</div>
                <h6 class="empty-title">Buscando conductores...</h6>
                <p class="empty-desc">No hay trenes activos en la red en este momento. ¡Abre otra pestaña como Conductor para iniciar uno!</p>
            </div>
        `;
        return;
    }
    
    activeVehiclesList.forEach(vehicle => {
        const line = METRO_LINES[vehicle.lineId];
        if (!line) return;
        
        const item = document.createElement('div');
        item.className = 'summary-train-item';
        
        // Badge 3D oficial de la línea
        const badge = document.createElement('div');
        badge.className = 'summary-train-badge';
        badge.innerText = vehicle.lineId;
        badge.style.backgroundColor = line.color;
        badge.style.boxShadow = `0 3px 0 ${line.colorDark}`;
        
        // Info detallada
        const info = document.createElement('div');
        info.className = 'summary-train-info';
        
        const route = document.createElement('div');
        route.className = 'summary-train-route';
        route.innerHTML = `${vehicle.prevStation || 'Origen'} <span>➔</span> ${vehicle.nextStation || 'Terminal'}`;
        
        const eta = document.createElement('div');
        eta.className = 'summary-train-eta';
        if (vehicle.isSimulated) {
            const remainingPercentage = 100 - (vehicle.progress || 0);
            let secondsLeft = Math.round(remainingPercentage * 0.08);
            eta.innerText = secondsLeft > 0 ? `Llegando en aprox. ${secondsLeft}s` : "¡Arribando ahora mismo!";
        } else {
            eta.innerText = "Transmisión GPS en vivo";
        }
        
        info.appendChild(route);
        info.appendChild(eta);
        
        // Botón "Enfocar"
        const focusBtn = document.createElement('button');
        focusBtn.className = 'btn-chunky btn-small btn-primary summary-focus-btn';
        focusBtn.innerText = 'Enfocar';
        
        item.appendChild(badge);
        item.appendChild(info);
        item.appendChild(focusBtn);
        
        // Interacción táctil fluida: Clic en el botón o en la fila entera enfoca el tren en el mapa
        const handleFocus = (e) => {
            e.stopPropagation();
            selectMetroLine(vehicle.lineId);
            updatePassengerUIForLineChange(vehicle.lineId);
            
            if (vehicle.coords && AppState.map) {
                AppState.map.setView(vehicle.coords, 15, {
                    animate: true,
                    duration: 1.2
                });
            }
            // Centrar chip de la barra superior
            const chip = document.querySelector(`.line-chip[data-line="${vehicle.lineId}"]`);
            if (chip) chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        };
        
        focusBtn.addEventListener('click', handleFocus);
        item.addEventListener('click', handleFocus);
        
        listContainer.appendChild(item);
    });
}

// Actualiza los estados de selección visual de la barra de chips superior
function updateActiveChipUI(lineId) {
    document.querySelectorAll('.line-chip').forEach(chip => {
        const id = chip.getAttribute('data-line');
        const dot = chip.querySelector('.chip-dot');
        if (id === lineId) {
            chip.classList.add('active');
            if (lineId === 'ALL') {
                chip.style.backgroundColor = '#58cc02';
                chip.style.color = '#ffffff';
                chip.style.borderColor = '#358000';
                chip.style.boxShadow = '0 4px 0 #2c6a00';
            } else {
                const line = METRO_LINES[lineId];
                chip.style.backgroundColor = line.color;
                chip.style.color = '#ffffff';
                chip.style.borderColor = line.colorDark;
                chip.style.boxShadow = `0 4px 0 ${line.colorDark}`;
            }
            if (dot) {
                dot.style.backgroundColor = 'rgba(255,255,255,0.45)';
                dot.style.border = '1.5px solid rgba(255,255,255,0.5)';
            }
            chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            chip.classList.remove('active');
            chip.style.backgroundColor = '';
            chip.style.color = '';
            chip.style.borderColor = '#e5e5e5';
            chip.style.boxShadow = '0 4px 0 #e5e5e5';
            if (dot) {
                dot.style.backgroundColor = '';
                dot.style.border = '';
            }
        }
    });
}

// ================= GENERACIÓN DE LA UI DINÁMICA (CHIPS) =================
function renderLineChips() {
    const scrollContainer = document.getElementById('lines-scroll');
    const selectSelect = document.getElementById('select-driver-line');
    
    scrollContainer.innerHTML = '';
    selectSelect.innerHTML = '';
    
    // 1. Si el rol es pasajero, inyectar el chip especial "Todas las Líneas" al inicio
    if (AppState.role === 'passenger') {
        const allChip = document.createElement('button');
        allChip.className = 'line-chip';
        allChip.setAttribute('data-line', 'ALL');
        allChip.style.color = 'var(--text-dark)';
        
        const dot = document.createElement('span');
        dot.className = 'chip-dot';
        
        const text = document.createElement('span');
        text.innerText = 'Todas';
        
        allChip.appendChild(dot);
        allChip.appendChild(text);
        
        allChip.addEventListener('click', () => {
            selectMetroLine('ALL');
            updatePassengerUIForLineChange('ALL');
        });
        
        scrollContainer.appendChild(allChip);
    }
    
    // 2. Cargar chips de las líneas individuales
    Object.keys(METRO_LINES).forEach(lineId => {
        const line = METRO_LINES[lineId];
        
        // Crear Chip Superior
        const chip = document.createElement('button');
        chip.className = 'line-chip';
        chip.setAttribute('data-line', lineId);
        chip.style.color = 'var(--text-dark)';
        
        const dot = document.createElement('span');
        dot.className = 'chip-dot';
        dot.style.backgroundColor = line.color;
        
        const text = document.createElement('span');
        text.innerText = line.name;
        
        chip.appendChild(dot);
        chip.appendChild(text);
        
        chip.addEventListener('click', () => {
            selectMetroLine(lineId);
            
            // Si el pasajero está en este rol, sugerirle que la línea ha cambiado
            if (AppState.role === 'passenger') {
                updatePassengerUIForLineChange(lineId);
            }
        });
        
        scrollContainer.appendChild(chip);
        
        // Crear Opción en Selector de Conductor
        const option = document.createElement('option');
        option.value = lineId;
        option.innerText = line.name;
        selectSelect.appendChild(option);
    });
}

// ================= GESTIÓN DE ROLES (FLUJOS DE BIENVENIDA) =================
function setAppRole(role) {
    AppState.role = role;

    // 📊 Telemetría: rol seleccionado
    Telemetry.track('role_selected', { role });

    // Ocultar ventana de bienvenida
    const selector = document.getElementById('role-selector');
    selector.classList.remove('active');
    
    // Configurar badges del header
    const badge = document.getElementById('badge-role');
    badge.innerText = role === 'passenger' ? 'Pasajero' : 'Conductor';
    badge.className = `badge badge-${role === 'passenger' ? 'passenger' : 'vehicle'}`;
    
    // Toggle de paneles inferiores (Bottom Sheet)
    const passengerPanel = document.getElementById('panel-passenger');
    const vehiclePanel = document.getElementById('panel-vehicle');
    
    if (role === 'passenger') {
        passengerPanel.classList.add('active');
        vehiclePanel.classList.remove('active');
        document.getElementById('btn-focus-train').classList.add('hidden');
        renderLineChips(); // Re-render chips para inyectar "Todas"
        selectMetroLine('ALL'); // Seleccionar Todas por defecto para el Pasajero
        resetPassengerView();
    } else {
        passengerPanel.classList.remove('active');
        vehiclePanel.classList.add('active');
        document.getElementById('btn-focus-train').classList.add('hidden');
        renderLineChips(); // Re-render chips para quitar "Todas"
        
        // Sincronizar el selector del conductor con la línea activa seleccionada en el mapa (ALL no es válido para conductor)
        const driverLine = AppState.selectedLine === 'ALL' ? 'L1' : AppState.selectedLine;
        document.getElementById('select-driver-line').value = driverLine;
        AppState.driverSelectedLine = driverLine;
        selectMetroLine(driverLine); // Si estaba en ALL, enfocar en L1
        updateDriverPanelUI();
    }
    
    // Iniciar sincronización remota por Internet (MQTT) si la librería está disponible
    if (typeof mqtt !== 'undefined') {
        initMQTT();
    } else {
        console.warn("Librería MQTT no cargada. La sincronización solo funcionará a nivel local.");
        updateConnectionStatus('offline', 'Librería MQTT bloqueada o no cargada');
    }
    
    // Solicitar ubicación en tiempo real en segundo plano (iOS Style)
    requestUserLocation();
}

function resetPassengerView() {
    document.getElementById('sync-indicator').classList.add('hidden');
    document.getElementById('passenger-active-card').classList.add('hidden');
    
    if (AppState.selectedLine === 'ALL') {
        document.getElementById('passenger-all-summary-card').classList.remove('hidden');
        updateAllSummaryCard();
        document.getElementById('passenger-status-title').innerText = "Red del Metro CDMX";
        document.getElementById('passenger-status-desc').innerText = "Monitoreando todas las líneas en tiempo real. Selecciona una línea arriba para ver detalles.";
    } else {
        document.getElementById('passenger-all-summary-card').classList.add('hidden');
        const line = METRO_LINES[AppState.selectedLine];
        document.getElementById('passenger-status-title').innerText = "Buscando trenes...";
        document.getElementById('passenger-status-desc').innerText = `Selecciona una línea arriba para ver trenes activos en la ${line ? line.name : '--'}.`;
    }
    
    // Limpiar marcadores de trenes remotos
    Object.keys(AppState.activeVehicles).forEach(id => {
        AppState.map.removeLayer(AppState.activeVehicles[id].marker);
    });
    AppState.activeVehicles = {};
}

// Cambiar de rol en caliente (botón Header)
document.getElementById('btn-change-role').addEventListener('click', () => {
    // Detener transmisiones del conductor si están activas
    if (AppState.isTracking) {
        toggleTracking();
    }
    
    // Limpiar marcadores
    resetPassengerView();
    
    // Volver a mostrar pantalla de bienvenida
    document.getElementById('role-selector').classList.add('active');
});

// ================= GEOLOCALIZACIÓN DEL USUARIO (GPS REAL) =================
function requestUserLocation() {
    if (!navigator.geolocation) {
        console.warn("Geolocalización no soportada en este navegador.");
        return;
    }
    
    // Opciones de geolocalización de alta precisión
    const geoOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coords = [position.coords.latitude, position.coords.longitude];
            AppState.userLocation = coords;
            updateUserMarker(coords);
        },
        (error) => {
            console.warn("Permiso de GPS denegado o no disponible:", error.message);
        },
        geoOptions
    );
}

// Botón de centrado de ubicación del usuario
document.getElementById('btn-my-location').addEventListener('click', () => {
    Telemetry.track('location_btn_clicked', { had_gps: !!AppState.userLocation });
    if (AppState.userLocation) {
        AppState.map.setView(AppState.userLocation, 15, { animate: true, duration: 1 });
    } else {
        // Si no se tiene, volver a solicitar
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = [pos.coords.latitude, pos.coords.longitude];
                AppState.userLocation = coords;
                updateUserMarker(coords);
                AppState.map.setView(coords, 15, { animate: true, duration: 1 });
            }, () => {
                alert("Por favor, activa los permisos de ubicación en tu navegador para ver tu posición.");
            });
        }
    }
});

function updateUserMarker(coords) {
    if (AppState.userMarker) {
        AppState.userMarker.setLatLng(coords);
    } else {
        // Icono Duolingo Pulsing Blue para GPS de iOS
        const customIcon = L.divIcon({
            className: 'custom-user-marker',
            html: '<div class="user-gps-pulse"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        AppState.userMarker = L.marker(coords, {
            icon: customIcon,
            zIndexOffset: 90
        }).addTo(AppState.map);
        
        AppState.userMarker.bindPopup("<b>¡Tú estás aquí!</b><br>Ubicación real vía GPS.");
    }
}

// ================= GESTIÓN DEL CONDUCTOR (VEHÍCULO EMISOR) =================

// Cambios de configuración del panel
document.getElementById('select-driver-line').addEventListener('change', (e) => {
    const val = e.target.value;
    AppState.driverSelectedLine = val;
    selectMetroLine(val); // Enfocar la línea correspondiente en el mapa
    updateDriverPanelUI();
});

// Modos de transmisión: Simular vs GPS Real
document.getElementById('btn-mode-simulate').addEventListener('click', () => {
    setTransmissionMode('simulate');
});

document.getElementById('btn-mode-gps').addEventListener('click', () => {
    setTransmissionMode('gps');
});

function setTransmissionMode(mode) {
    if (AppState.isTracking) {
        alert("Detén la transmisión activa para cambiar de modo.");
        return;
    }
    
    AppState.transmissionMode = mode;
    
    const btnSim = document.getElementById('btn-mode-simulate');
    const btnGps = document.getElementById('btn-mode-gps');
    const pnlSim = document.getElementById('simulation-settings');
    const pnlGps = document.getElementById('gps-settings');
    
    if (mode === 'simulate') {
        btnSim.classList.add('active');
        btnGps.classList.remove('active');
        pnlSim.classList.remove('hidden');
        pnlGps.classList.add('hidden');
    } else {
        btnSim.classList.remove('active');
        btnGps.classList.add('active');
        pnlSim.classList.add('hidden');
        pnlGps.classList.remove('hidden');
    }
}

// Multiplicadores de Velocidad para simulación rápida
document.querySelectorAll('.speed-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
        const mult = parseInt(e.target.getAttribute('data-speed'));
        AppState.simSpeedMultiplier = mult;
        
        document.querySelectorAll('.speed-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        
        // Si la simulación está en curso, reiniciamos el intervalo con la nueva velocidad
        if (AppState.isTracking && AppState.transmissionMode === 'simulate') {
            stopSimulation();
            startSimulation();
        }
    });
});

function updateDriverPanelUI() {
    const line = METRO_LINES[AppState.driverSelectedLine];
    if (line) {
        document.getElementById('sim-current-station').innerText = line.stations[0].name;
        document.getElementById('sim-next-station').innerText = line.stations[1] ? line.stations[1].name : "Terminal";
    }
}

// Lógica de encendido / apagado del rastreador
document.getElementById('btn-start-tracking').addEventListener('click', toggleTracking);

function toggleTracking() {
    const btn = document.getElementById('btn-start-tracking');
    
    if (!AppState.isTracking) {
        // ENCIENDE TRANSMISIÓN
        AppState.isTracking = true;
        btn.innerText = "Detener Transmisión";

        // 📊 Telemetría: inicio de transmisión
        Telemetry.track('transmission_started', {
            line: AppState.driverSelectedLine,
            mode: AppState.transmissionMode
        });
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
        
        // Bloquear selectores visuales durante transmisión
        document.getElementById('select-driver-line').disabled = true;
        document.getElementById('btn-mode-simulate').disabled = true;
        document.getElementById('btn-mode-gps').disabled = true;
        
        // --- WAKE LOCK: Evitar que la pantalla se apague mientras se transmite ---
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(lock => {
                AppState.wakeLock = lock;
                console.log('Wake Lock activado: pantalla no se apagará.');
                // Reactivar el wake lock si se libera automáticamente (ej. al minimizar)
                lock.addEventListener('release', () => {
                    console.log('Wake Lock liberado.');
                    if (AppState.isTracking) {
                        navigator.wakeLock.request('screen').then(newLock => {
                            AppState.wakeLock = newLock;
                        }).catch(() => {});
                    }
                });
            }).catch(err => {
                console.warn('Wake Lock no disponible:', err.message);
            });
        }
        
        if (AppState.transmissionMode === 'simulate') {
            startSimulation();
        } else {
            startGPSTransmission();
        }
    } else {
        // APAGA TRANSMISIÓN
        AppState.isTracking = false;
        btn.innerText = "Comenzar Transmisión";
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        // 📊 Telemetría: fin de transmisión
        Telemetry.track('transmission_stopped', {
            line: AppState.driverSelectedLine,
            mode: AppState.transmissionMode
        });
        
        document.getElementById('select-driver-line').disabled = false;
        document.getElementById('btn-mode-simulate').disabled = false;
        document.getElementById('btn-mode-gps').disabled = false;
        
        // --- Liberar Wake Lock al detener ---
        if (AppState.wakeLock) {
            AppState.wakeLock.release().catch(() => {});
            AppState.wakeLock = null;
        }
        
        if (AppState.transmissionMode === 'simulate') {
            stopSimulation();
        } else {
            stopGPSTransmission();
        }
        
        // Limpiar último paquete para que no se reenvíe al reconectar
        AppState.lastBroadcastPacket = null;
        
        // Avisar a los pasajeros que la señal se apagó
        broadcastMessage({
            type: 'TRAIN_SHUTDOWN',
            lineId: AppState.driverSelectedLine
        });
    }
}

// ================= SISTEMA DE SIMULACIÓN DE RUTA DEL METRO =================
function startSimulation() {
    const line = METRO_LINES[AppState.driverSelectedLine];
    AppState.simCurrentIndex = 0;
    AppState.simNextIndex = 1;
    AppState.simProgress = 0;
    
    // Intervalo de actualización: cada 200 milisegundos para lograr un movimiento continuo e hiper-fluido
    const baseIntervalTime = 200; 
    
    // Un tramo entre estaciones dura aproximadamente 8 segundos a velocidad 1x (40 ticks)
    const ticksPerLeg = 40; 
    
    AppState.simulationInterval = setInterval(() => {
        const curStation = line.stations[AppState.simCurrentIndex];
        const nextStation = line.stations[AppState.simNextIndex];
        
        if (!curStation || !nextStation) {
            // Llegamos al final de la línea: reiniciamos el recorrido
            AppState.simCurrentIndex = 0;
            AppState.simNextIndex = 1;
            AppState.simProgress = 0;
            return;
        }
        
        // Avanzar el progreso
        AppState.simProgress += (100 / ticksPerLeg) * AppState.simSpeedMultiplier;
        
        if (AppState.simProgress >= 100) {
            // Llegamos a la siguiente estación
            AppState.simProgress = 0;
            AppState.simCurrentIndex = AppState.simNextIndex;
            AppState.simNextIndex = AppState.simCurrentIndex + 1;
            
            if (AppState.simNextIndex >= line.stations.length) {
                // Llegamos a la terminal. Invertimos la ruta o la reseteamos
                AppState.simNextIndex = 0; // Para el MVP reseteamos al inicio
            }
            
            // Actualizar textos informativos en el panel del Conductor
            const activeCur = line.stations[AppState.simCurrentIndex].name;
            const activeNext = line.stations[AppState.simNextIndex] ? line.stations[AppState.simNextIndex].name : "Fin de línea";
            document.getElementById('sim-current-station').innerText = activeCur;
            document.getElementById('sim-next-station').innerText = activeNext;
        }
        
        // Calcular interpolación lineal (LERP) de coordenadas para movimiento ultra suave
        const progressFrac = AppState.simProgress / 100;
        const lat = curStation.coords[0] + (nextStation.coords[0] - curStation.coords[0]) * progressFrac;
        const lng = curStation.coords[1] + (nextStation.coords[1] - curStation.coords[1]) * progressFrac;
        
        AppState.vehicleCoords = [lat, lng];
        
        // Dibujar el marcador en el mapa del propio conductor para que vea su posición simulada
        updateLocalVehicleMarker([lat, lng], line);
        
        // ENVIAR SEÑAL EN TIEMPO REAL
        broadcastMessage({
            type: 'TRAIN_UPDATE',
            lineId: AppState.driverSelectedLine,
            coords: [lat, lng],
            prevStation: curStation.name,
            nextStation: nextStation.name,
            progress: AppState.simProgress,
            isSimulated: true
        });
        
    }, baseIntervalTime);
}

function stopSimulation() {
    if (AppState.simulationInterval) {
        clearInterval(AppState.simulationInterval);
        AppState.simulationInterval = null;
    }
}

// ================= SISTEMA DE GPS REAL PARA CONDUCTOR =================
function startGPSTransmission() {
    const textStatus = document.getElementById('gps-status-text');
    const textCoords = document.getElementById('gps-coords-text');
    const dot = document.getElementById('gps-dot');
    
    textStatus.innerText = "Buscando señal GPS...";
    dot.className = "gps-indicator-dot pulsing-green";
    
    if (!navigator.geolocation) {
        textStatus.innerText = "GPS no soportado";
        alert("Tu dispositivo no soporta la Geolocalización.");
        toggleTracking();
        return;
    }
    
    // Limpiar cualquier intervalo previo de heartbeat para evitar duplicados
    if (AppState.gpsHeartbeatInterval) {
        clearInterval(AppState.gpsHeartbeatInterval);
        AppState.gpsHeartbeatInterval = null;
    }
    
    // Iniciar interval para transmitir la posición actual como latido cada 3.5 segundos (evita desconexiones si no se mueve)
    AppState.gpsHeartbeatInterval = setInterval(() => {
        if (AppState.isTracking && AppState.vehicleCoords) {
            const line = METRO_LINES[AppState.driverSelectedLine];
            if (!line) return;
            
            broadcastMessage({
                type: 'TRAIN_UPDATE',
                lineId: AppState.driverSelectedLine,
                coords: AppState.vehicleCoords,
                prevStation: "Posición GPS",
                nextStation: "En ruta real",
                progress: 50,
                isSimulated: false
            });
            console.log("GPS Heartbeat sent successfully to MQTT:", AppState.vehicleCoords);
        }
    }, 3500);
    
    AppState.gpsWatchId = navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            AppState.vehicleCoords = [lat, lng];
            
            textStatus.innerText = "Transmitiendo en vivo";
            textCoords.innerText = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
            
            const line = METRO_LINES[AppState.driverSelectedLine];
            
            // Dibujar marcador local en el mapa del conductor
            updateLocalVehicleMarker([lat, lng], line);
            
            // ENVIAR SEÑAL GPS EN TIEMPO REAL
            broadcastMessage({
                type: 'TRAIN_UPDATE',
                lineId: AppState.driverSelectedLine,
                coords: [lat, lng],
                prevStation: "Posición GPS",
                nextStation: "En ruta real",
                progress: 50, // Progreso estático para GPS real
                isSimulated: false
            });
        },
        (error) => {
            textStatus.innerText = "Error GPS";
            textCoords.innerText = error.message;
            dot.className = "gps-indicator-dot pulsing-red";
            console.error("Error en watchPosition:", error);
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
}

function stopGPSTransmission() {
    if (AppState.gpsWatchId) {
        navigator.geolocation.clearWatch(AppState.gpsWatchId);
        AppState.gpsWatchId = null;
    }
    
    if (AppState.gpsHeartbeatInterval) {
        clearInterval(AppState.gpsHeartbeatInterval);
        AppState.gpsHeartbeatInterval = null;
    }
    
    document.getElementById('gps-status-text').innerText = "GPS Inactivo";
    document.getElementById('gps-coords-text').innerText = "Lat: --, Lng: --";
    document.getElementById('gps-dot').className = "gps-indicator-dot pulsing-red";
}

// Dibujar la posición actual del conductor en su propio mapa
function updateLocalVehicleMarker(coords, line) {
    const markerId = 'local-driver';
    
    if (AppState.activeVehicles[markerId]) {
        AppState.activeVehicles[markerId].marker.setLatLng(coords);
    } else {
        const customIcon = L.divIcon({
            className: 'custom-train-marker',
            html: `<div class="train-marker-pin" style="color: ${line.color};">🚋</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 36]
        });
        
        const marker = L.marker(coords, {
            icon: customIcon,
            zIndexOffset: 200
        }).addTo(AppState.map);
        
        marker.bindPopup(`<b>Mi Tren (${line.name})</b><br>Transmitiendo señal.`);
        
        AppState.activeVehicles[markerId] = {
            marker: marker,
            lastUpdate: Date.now()
        };
    }
}

// ================= GESTIÓN DEL PASAJERO (RECEPTOR Y MAPAS EN VIVO) =================

// Manejar los mensajes que entran desde los tabs emisores
function handleIncomingMessage(packet) {
    if (AppState.role !== 'passenger') return; // Solo procesa la señal en modo Pasajero
    
    if (packet.type === 'TRAIN_UPDATE') {
        processTrainSignal(packet);
    } else if (packet.type === 'TRAIN_SHUTDOWN') {
        processTrainShutdown(packet);
    }
}

function resetPassengerViewOnlyBottomCard() {
    document.getElementById('passenger-active-card').classList.add('hidden');
    if (AppState.selectedLine === 'ALL') {
        document.getElementById('passenger-status-title').innerText = "Red del Metro CDMX";
        document.getElementById('passenger-status-desc').innerText = "Monitoreando todas las líneas en tiempo real. Selecciona una línea arriba para ver detalles.";
        document.getElementById('passenger-all-summary-card').classList.remove('hidden');
        updateAllSummaryCard();
    } else {
        document.getElementById('passenger-status-title').innerText = "Buscando trenes...";
        const line = METRO_LINES[AppState.selectedLine];
        document.getElementById('passenger-status-desc').innerText = `Selecciona una línea arriba para ver trenes activos en la ${line ? line.name : '--'}.`;
        document.getElementById('passenger-all-summary-card').classList.add('hidden');
    }
}

function processTrainSignal(packet) {
    const line = METRO_LINES[packet.lineId];
    if (!line) return;
    
    // 1. Mostrar Toast de conexión activa (iOS Style)
    const toast = document.getElementById('sync-indicator');
    toast.classList.remove('hidden');
    
    // ================= ACTUALIZAR MARCADOR EN EL MAPA (SIEMPRE VISIBLE) =================
    const vehicleId = packet.senderId;
    
    if (AppState.activeVehicles[vehicleId]) {
        // Actualizar posición del marcador con movimiento suave
        AppState.activeVehicles[vehicleId].marker.setLatLng(packet.coords);
        AppState.activeVehicles[vehicleId].lastUpdate = Date.now();
        AppState.activeVehicles[vehicleId].lineId = packet.lineId; // Guardar línea actual
        AppState.activeVehicles[vehicleId].prevStation = packet.prevStation;
        AppState.activeVehicles[vehicleId].nextStation = packet.nextStation;
        AppState.activeVehicles[vehicleId].progress = packet.progress;
        AppState.activeVehicles[vehicleId].isSimulated = packet.isSimulated;
        AppState.activeVehicles[vehicleId].coords = packet.coords;
        
        // Actualizar popup dinámetemente con aviso de interacción
        AppState.activeVehicles[vehicleId].marker.getPopup().setContent(`<b>${line.name}</b><br>Próxima parada: ${packet.nextStation}<br><span style="font-size:10.5px;color:var(--duo-blue);font-weight:700;">Haga clic para enfocar esta línea</span>`);
    } else {
        // Crear nuevo marcador del tren con color oficial
        const customIcon = L.divIcon({
            className: 'custom-train-marker',
            html: `<div class="train-marker-pin" style="color: ${line.color};">🚋</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 36]
        });
        
        const marker = L.marker(packet.coords, {
            icon: customIcon,
            zIndexOffset: 300
        }).addTo(AppState.map);
        
        marker.bindPopup(`<b>${line.name}</b><br>Próxima parada: ${packet.nextStation}<br><span style="font-size:10.5px;color:var(--duo-blue);font-weight:700;">Haga clic para enfocar esta línea</span>`);
        
        // MICRO-INTERACCIÓN PREMIUM: Al hacer clic en un tren, auto-seleccionar y destacar esa línea
        marker.on('click', () => {
            selectMetroLine(packet.lineId);
            updatePassengerUIForLineChange(packet.lineId);
            // Hacer scroll hasta el chip correspondiente
            const chip = document.querySelector(`.line-chip[data-line="${packet.lineId}"]`);
            if (chip) chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        
        AppState.activeVehicles[vehicleId] = {
            marker: marker,
            lastUpdate: Date.now(),
            lineId: packet.lineId,
            prevStation: packet.prevStation,
            nextStation: packet.nextStation,
            progress: packet.progress,
            isSimulated: packet.isSimulated,
            coords: packet.coords
        };
        
        // Mostrar botón flotante para enfocar tren
        document.getElementById('btn-focus-train').classList.remove('hidden');
        AppState.activeFocusVehicleId = vehicleId;
    }
    
    // ================= ACTUALIZAR BOTTOM SHEET SOLO SI ES LA LÍNEA SELECCIONADA =================
    if (packet.lineId === AppState.selectedLine) {
        // 2. Actualizar paneles del Bottom Sheet (Estadísticas tipo Duolingo)
        document.getElementById('passenger-status-title').innerText = "¡Señal recibida en vivo!";
        document.getElementById('passenger-status-desc').innerText = `Se ha detectado un tren circulando sobre la ${line.name} en tiempo real.`;
        
        // Mostrar tarjeta detallada
        const card = document.getElementById('passenger-active-card');
        card.classList.remove('hidden');
        
        const cardLine = document.getElementById('pass-card-line');
        cardLine.innerText = packet.lineId;
        cardLine.style.backgroundColor = line.color;
        cardLine.style.boxShadow = `0 4px 0 ${line.colorDark}`;
        
        document.getElementById('pass-card-current').innerText = packet.prevStation;
        document.getElementById('pass-card-next').innerText = packet.nextStation;
        
        // Barra de progreso Duolingo
        const fillBar = document.getElementById('pass-card-progress');
        fillBar.style.width = `${packet.progress}%`;
        fillBar.style.backgroundColor = line.color;
        
        // Calcular ETA estimativa en base al progreso de la simulación
        const remainingPercentage = 100 - packet.progress;
        let secondsLeft = Math.round(remainingPercentage * 0.08); // 8 segundos base por tramo
        
        if (packet.isSimulated) {
            document.getElementById('pass-card-time').innerText = secondsLeft > 0 ? `Arribando en aprox. ${secondsLeft}s` : "¡Arribando ahora mismo!";
        } else {
            document.getElementById('pass-card-time').innerText = "Transmisión GPS en vivo";
        }
    }
    
    // Si estamos en modo "Todas", poblar listado
    if (AppState.selectedLine === 'ALL') {
        updateAllSummaryCard();
    }
    
    // Actualizar trazas del mapa dinámicamente si es necesario
    updateMapStyles();
    
    // Actualizar el banner de otras líneas
    updateOtherLinesBanner();
}

// Enfocar al tren desde el botón flotante
document.getElementById('btn-focus-train').addEventListener('click', () => {
    const activeId = AppState.activeFocusVehicleId;
    if (activeId && AppState.activeVehicles[activeId]) {
        const coords = AppState.activeVehicles[activeId].marker.getLatLng();
        AppState.map.setView(coords, 15, { animate: true, duration: 1 });
    }
});

// Manejo de apagado del tren
function processTrainShutdown(packet) {
    const vehicleId = packet.senderId;
    
    if (AppState.activeVehicles[vehicleId]) {
        AppState.map.removeLayer(AppState.activeVehicles[vehicleId].marker);
        delete AppState.activeVehicles[vehicleId];
    }
    
    // Si la línea es la que estamos viendo, limpiamos y notificamos
    if (packet.lineId === AppState.selectedLine) {
        resetPassengerViewOnlyBottomCard();
        
        // Mostramos un toast flotante temporal que avise de la desconexión
        const toast = document.getElementById('sync-indicator');
        toast.classList.remove('hidden');
        toast.querySelector('.toast-dot').className = "toast-dot pulsing-red";
        toast.querySelector('.toast-text').innerText = `Señal de tren (${METRO_LINES[packet.lineId].name}) perdida`;
        
        setTimeout(() => {
            if (Object.keys(AppState.activeVehicles).length === 0) {
                toast.classList.add('hidden');
                toast.querySelector('.toast-dot').className = "toast-dot pulsing-green";
                toast.querySelector('.toast-text').innerText = "Conectado a señal de tren";
            } else {
                // Si aún quedan otros trenes en otras líneas, restaurar toast a verde
                toast.querySelector('.toast-dot').className = "toast-dot pulsing-green";
                toast.querySelector('.toast-text').innerText = "Conectado a señal de tren";
            }
        }, 5000);
    }
    
    // Actualizar trazas del mapa y listado
    updateMapStyles();
    if (AppState.selectedLine === 'ALL') {
        updateAllSummaryCard();
    }
    
    // Actualizar el banner de otras líneas
    updateOtherLinesBanner();
}

// Al cambiar el pasajero de línea en la barra superior
function updatePassengerUIForLineChange(lineId) {
    resetPassengerViewOnlyBottomCard();
    // Si no hay ningún tren en la nueva línea seleccionada en el mapa, ocultamos temporalmente el toast de conexión
    const hasActiveTrainOnLine = lineId === 'ALL'
        ? Object.keys(AppState.activeVehicles).length > 0
        : Object.values(AppState.activeVehicles).some(v => v.lineId === lineId);
        
    if (!hasActiveTrainOnLine) {
        document.getElementById('sync-indicator').classList.add('hidden');
    } else {
        document.getElementById('sync-indicator').classList.remove('hidden');
    }
    
    // Actualizar el banner de otras líneas
    updateOtherLinesBanner();
}


// ================= TEMPORIZADOR DE MANTENIMIENTO DE SEÑAL =================
// Si un emisor de tren deja de transmitir (p.ej. se cierra el tab), limpiamos su señal después de 25 segundos sin recibir pings.
setInterval(() => {
    if (AppState.role !== 'passenger') return;
    
    const now = Date.now();
    let signalLost = false;
    
    Object.keys(AppState.activeVehicles).forEach(id => {
        // Excluimos la señal de conductor local para evitar bugs en pruebas unitarias del mismo navegador
        if (id === 'local-driver') return; 
        
        if (now - AppState.activeVehicles[id].lastUpdate > 25000) {
            // Signal timeout
            AppState.map.removeLayer(AppState.activeVehicles[id].marker);
            delete AppState.activeVehicles[id];
            signalLost = true;
        }
    });
    
    if (signalLost) {
        updateOtherLinesBanner();
        updateMapStyles();
        if (AppState.selectedLine === 'ALL') {
            updateAllSummaryCard();
        }
        if (Object.keys(AppState.activeVehicles).length === 0) {
            resetPassengerView();
            const toast = document.getElementById('sync-indicator');
            toast.classList.add('hidden');
            document.getElementById('btn-focus-train').classList.add('hidden');
        }
    }
}, 3000);

// ================= INICIALIZACIÓN GENERAL =================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar chips superiores y selectores
    renderLineChips();

    // 2. Inicializar Mapa e Infraestructura del Metro
    initMap();

    // 3. Vincular botones de rol
    document.getElementById('btn-role-passenger').addEventListener('click', () => setAppRole('passenger'));
    document.getElementById('btn-role-vehicle').addEventListener('click', () => setAppRole('vehicle'));

    // 4. Inicializar módulo de telemetría (respeta consentimiento previo)
    Telemetry.init();

    // 5. Toggle de consentimiento analítico
    const toggleAnalytics = document.getElementById('toggle-analytics');
    if (toggleAnalytics) {
        toggleAnalytics.addEventListener('change', (e) => {
            Telemetry.setConsent(e.target.checked);
        });
    }

    // 6. Panel expandible "¿Qué datos se recopilan?"
    const btnPrivacy  = document.getElementById('btn-privacy-details');
    const privPanel   = document.getElementById('privacy-details-panel');
    if (btnPrivacy && privPanel) {
        btnPrivacy.addEventListener('click', () => {
            const collapsed = privPanel.classList.toggle('privacy-collapsed');
            btnPrivacy.textContent = collapsed
                ? '📋 ¿Qué datos se recopilan?'
                : '▲ Ocultar detalles';
        });
    }

    // 7. Botón "Borrar mis datos"
    const btnClear = document.getElementById('btn-clear-data');
    if (btnClear) {
        btnClear.addEventListener('click', () => {
            if (confirm('¿Eliminar todos los datos de telemetría guardados en este dispositivo?')) {
                Telemetry.clearAll();
            }
        });
    }
});

// 8. Evento de fin de sesión (cierre de pestaña o navegación)
window.addEventListener('beforeunload', () => {
    if (Telemetry.enabled && Telemetry.sessionStart) {
        Telemetry.track('session_end', {
            duration_s: Math.round((Date.now() - Telemetry.sessionStart) / 1000),
            role:       AppState.role || 'none',
            lines:      [...Telemetry.sessionLines]
        });
    }
});
