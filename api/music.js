import axios from 'axios';

export default async function handler(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "error" });
  }

  const apiUrl = `https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.status !== 200 || !data.result?.status) {
      return res.status(500).json({ error: "error" });
    }

    res.status(200).json({
      type: 'audio',
      title: data.result.metadata.title,
      author: data.result.metadata.author.name,
      videoUrl: data.result.metadata.url,
      thumbnail: data.result.metadata.thumbnail,
      duration: data.result.metadata.duration.timestamp,
      download: {
        quality: data.result.download.quality,
        url: data.result.download.url,
        filename: data.result.download.filename
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "error" });
  }
}
