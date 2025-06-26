export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <h1>YouTube Media API</h1>
    <p>API para obtener enlaces de descarga MP3 y MP4 desde YouTube.</p>

    <h2>Endpoints</h2>
    <ul>
      <li><strong>GET /api/music?q=consulta</strong> — MP3</li>
      <li><strong>GET /api/video?q=consulta</strong> — MP4</li>
    </ul>

    <h3>Ejemplos</h3>
    <ul>
      <li><a href="/api/music?q=DJ%20malam%20pagi">/api/music?q=DJ malam pagi</a></li>
      <li><a href="/api/video?q=DJ%20malam%20pagi">/api/video?q=DJ malam pagi</a></li>
    </ul>`);
}
