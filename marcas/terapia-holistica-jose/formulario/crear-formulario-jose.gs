/**
 * Crea el Google Form "Cuestionario para potenciar tu marca · José Herrera".
 * Uso: script.google.com > Nuevo proyecto > pegar todo > Guardar > Ejecutar "crearFormulario".
 * Al terminar, abre Ver > Registros (o "Registro de ejecución") para copiar los enlaces.
 */
function crearFormulario() {
  var form = FormApp.create('Cuestionario para potenciar tu marca · José Herrera');
  form.setDescription(
    'Hola José. Estas respuestas nos ayudan a que tu Instagram y tu web traigan más personas a tus sesiones 1 a 1. ' +
    'Toma unos 15 minutos. Si no sabes un dato, escribe "no sé" y seguimos. ' +
    'Las capturas de pantalla de Instagram envíalas por WhatsApp a Santi.'
  );
  form.setProgressBar(true);
  form.setCollectEmail(false);

  // 1. Marca y cuentas
  form.addPageBreakItem().setTitle('1. Tu marca y tus cuentas');
  form.addMultipleChoiceItem().setTitle('¿Con qué nombre quieres que te reconozcan?').setChoiceValues([
    'José Herrera · Terapia Holística', 'Sadhana Reiki', 'José tu coach de vida', 'Potencial Humano'
  ]).showOtherOption(true).setRequired(true);
  form.addCheckboxItem().setTitle('¿Qué cuentas de Instagram siguen activas?').setChoiceValues([
    '@josetucoachdevida', '@terapiaholistica_by_jose', '@sadhana.reiki'
  ]).showOtherOption(true);
  form.addParagraphTextItem().setTitle('¿Cuántos seguidores tiene cada cuenta activa? ¿Tienes acceso (usuario y contraseña) a todas?');
  form.addMultipleChoiceItem().setTitle('¿Tu Instagram es cuenta profesional (Creador o Empresa)?').setChoiceValues(['Sí', 'No', 'No sé']);
  form.addMultipleChoiceItem().setTitle('¿Tienes perfil en Google Maps (Perfil de Empresa de Google)?').setChoiceValues(['Sí', 'No', 'No sé']);
  form.addMultipleChoiceItem().setTitle('¿Atiendes en un consultorio propio en Manizales?').setChoiceValues(['Sí, consultorio propio', 'Atiendo en mi casa', 'Voy a domicilio', 'Solo online']).showOtherOption(true);
  form.addTextItem().setTitle('Dirección o barrio donde atiendes (si quieres que aparezca en la web y en Google)');

  // 2. Servicios y precios
  form.addPageBreakItem().setTitle('2. Tus servicios y precios');
  form.addCheckboxItem().setTitle('¿Qué servicios te piden más hoy? (marca máximo 3)').setChoiceValues([
    'Reiki presencial', 'Reiki a distancia', 'Acompañamiento en duelo', 'Ansiedad / estrés',
    'Coaching de vida', 'Biodescodificación', 'Cursos de Reiki', 'Talleres'
  ]).showOtherOption(true).setRequired(true);
  form.addMultipleChoiceItem().setTitle('¿Cuál servicio te gustaría vender más?').setChoiceValues([
    'Reiki', 'Acompañamiento en duelo', 'Ansiedad / estrés', 'Coaching de vida', 'Biodescodificación', 'Cursos de Reiki'
  ]).showOtherOption(true);
  form.addTextItem().setTitle('Precio de una sesión 1 a 1 presencial (COP)').setRequired(true);
  form.addTextItem().setTitle('Precio de una sesión 1 a 1 online (COP)');
  form.addTextItem().setTitle('¿Cuánto dura una sesión?');
  form.addTextItem().setTitle('¿Cuántas sesiones suele tomar una persona en un proceso?');
  form.addParagraphTextItem().setTitle('¿Tienes paquetes o descuentos? Descríbelos');
  form.addTextItem().setTitle('¿Cuántas sesiones 1 a 1 haces hoy por semana (en promedio)?').setRequired(true);
  form.addTextItem().setTitle('¿Cuántas sesiones más por semana podrías atender?').setRequired(true);
  form.addTextItem().setTitle('¿Cuántos mensajes nuevos (WhatsApp + Instagram) recibes por semana?');
  form.addTextItem().setTitle('De cada 10 personas que te escriben, ¿cuántas terminan agendando?');
  form.addParagraphTextItem().setTitle('Describe en tus palabras tu método de "reconocer, responsabilizarse, reconciliarse y repararse". ¿Cómo lo aplicas en una sesión?');

  // 3. Clientes
  form.addPageBreakItem().setTitle('3. Tus clientes').setHelpText('No pongas nombres. Solo datos generales.');
  form.addParagraphTextItem().setTitle('Tus últimos 10 clientes: para cada uno, edad aproximada, profesión, ciudad y por qué llegó')
    .setHelpText('Ejemplo: "45 años, contadora, Manizales, duelo por su mamá y no duerme"').setRequired(true);
  form.addCheckboxItem().setTitle('¿Cómo te conocieron la mayoría?').setChoiceValues([
    'Recomendación de otro cliente', 'Instagram', 'Facebook', 'Google', 'Mi página web', 'Cursos o talleres', 'Conferencias'
  ]).showOtherOption(true);
  form.addParagraphTextItem().setTitle('¿Qué habían intentado antes de llegar contigo? (psicólogo, medicación, otras terapias, nada)');
  form.addParagraphTextItem().setTitle('¿Qué dudas o miedos te ponen antes de agendar? (precio, "¿el Reiki sí sirve?", online o presencial…)');
  form.addParagraphTextItem().setTitle('¿Qué frase exacta suele usar la gente en su primer mensaje?');
  form.addMultipleChoiceItem().setTitle('¿Tienes clientes que darían un testimonio (escrito o en video) con su permiso?').setChoiceValues([
    'Sí, varios', 'Sí, uno o dos', 'No por ahora'
  ]);

  // 4. Temas sensibles
  form.addPageBreakItem().setTitle('4. Casos delicados');
  form.addMultipleChoiceItem().setTitle('¿Trabajas con algún psicólogo, psiquiatra o médico al que derives casos de crisis?').setChoiceValues(['Sí', 'No', 'A veces']);
  form.addParagraphTextItem().setTitle('¿Qué haces cuando llega alguien con ideas suicidas o en crisis?');

  // 5. Instagram y contenido
  form.addPageBreakItem().setTitle('5. Instagram y contenido')
    .setHelpText('En Instagram: Panel profesional > Estadísticas > últimos 30 días. Si no sabes dónde está, envía capturas por WhatsApp.');
  form.addTextItem().setTitle('Cuentas alcanzadas (últimos 30 días)');
  form.addTextItem().setTitle('Visitas al perfil (últimos 30 días)');
  form.addTextItem().setTitle('Toques en el enlace de la bio (últimos 30 días)');
  form.addTextItem().setTitle('Mensajes directos recibidos en Instagram por semana');
  form.addMultipleChoiceItem().setTitle('¿Quién publica hoy en tu Instagram?').setChoiceValues(['Yo mismo', 'Un familiar o amigo', 'Una persona contratada']).showOtherOption(true);
  form.addScaleItem().setTitle('¿Qué tan cómodo te sientes grabándote en video hablando a cámara?').setBounds(1, 5).setLabels('Nada cómodo', 'Muy cómodo');
  form.addMultipleChoiceItem().setTitle('¿Cuánto tiempo a la semana puedes dedicar a grabar contenido?').setChoiceValues([
    'Menos de 1 hora', '1 a 2 horas', '2 a 4 horas', 'Más de 4 horas'
  ]);
  form.addParagraphTextItem().setTitle('¿Hay temas que NO quieres tocar en redes? (religión, política, algún tema personal…)');

  // 6. Web, pauta y metas
  form.addPageBreakItem().setTitle('6. Web, pauta y metas');
  form.addMultipleChoiceItem().setTitle('¿Tienes acceso para editar tu página web (WordPress)?').setChoiceValues(['Sí, yo lo tengo', 'Lo tiene otra persona', 'No sé']);
  form.addMultipleChoiceItem().setTitle('¿Tu web tiene Google Analytics o Search Console instalados?').setChoiceValues(['Sí', 'No', 'No sé']);
  form.addMultipleChoiceItem().setTitle('¿Cuánto podrías invertir al mes en publicidad en Instagram/Facebook?').setChoiceValues([
    'Nada por ahora', 'Hasta $200.000 COP', '$200.000 a $500.000 COP', '$500.000 a $1.000.000 COP', 'Más de $1.000.000 COP'
  ]);
  form.addTextItem().setTitle('En 3 meses, ¿cuántas sesiones 1 a 1 por semana te gustaría tener?').setRequired(true);
  form.addParagraphTextItem().setTitle('¿Hay terapeutas o cuentas que admires o consideres tu competencia? (nombres o enlaces)');
  form.addParagraphTextItem().setTitle('¿Algo más que debamos saber?');

  form.setConfirmationMessage('¡Gracias, José! Con esto armamos tu plan. Recuerda enviar las capturas de Instagram por WhatsApp.');

  var hoja = SpreadsheetApp.create('Respuestas · Cuestionario José Herrera');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  Logger.log('Enlace para enviar a José: ' + form.getPublishedUrl());
  Logger.log('Enlace para editar el formulario: ' + form.getEditUrl());
  Logger.log('Hoja de respuestas: ' + hoja.getUrl());
}
