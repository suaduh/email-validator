import axios from 'axios';

export default async function handler(req, res) {
  const { email } = req.query;
  if (req.method !== 'GET') {
    return res.status(400).send('Invalid request method');
  }
  try {
    const response = await axios.get('https://mailcheck.p.rapidapi.com/', {
      params: { domain: email },
      headers: {
        'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(400).send('Failed to validate email');
  }
}

