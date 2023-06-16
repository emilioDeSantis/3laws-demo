import fetch from 'node-fetch';

export default async (req, res) => {
  const url = 'https://www.3lawsrobotics.io/' + req.url;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  res.status(response.status).json(data);
};
