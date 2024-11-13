import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import fs from 'fs';
import chalk from 'chalk';
import mysql from 'mysql2/promise';

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'clave_secreta_por_defecto';
const config = JSON.parse(fs.readFileSync('./config.json'));

app.use(express.json());

const dbConfig = {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
};

const verifyCaptcha = async (captchaToken) => {
  const response = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${config.hcaptcha.secretKey}&response=${captchaToken}`,
  });
  const result = await response.json();
  return result.success;
};

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, SECRET_KEY);

const isUserExists = async (username, email) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
  await connection.end();
  return rows.length > 0;
};

const createUser = async ({ username, email, password, color }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const connection = await mysql.createConnection(dbConfig);

  await connection.execute('INSERT INTO users (username, email, password, color, email_verified) VALUES (?, ?, ?, ?, ?)', 
    [username, email, hashedPassword, color, 1]);
  
  await connection.end();
  
  return { username, email, color };
};

app.post('/api/register_check', async (req, res) => {
  const { username, email, captchaToken } = req.body;
  const captchaValid = config.enableCaptcha ? await verifyCaptcha(captchaToken) : true;
  if (config.enableCaptcha && !captchaValid) {
    return res.status(400).json({ error: 'The CAPTCHA validation failed' });
  }

  if (await isUserExists(username, email)) {
    return res.status(400).json({ error: 'The username or email you entered is already in use. Please try another one.' });
  }

  res.status(200).json({ message: 'Validación exitosa' });
});

app.post('/api/register', async (req, res) => {
  const { username, email, password, color, captchaToken } = req.body;
  const captchaValid = config.enableCaptcha ? await verifyCaptcha(captchaToken) : true;
  if (config.enableCaptcha && !captchaValid) {
    return res.status(400).json({ error: 'The CAPTCHA validation failed' });
  }

  if (await isUserExists(username, email)) {
    return res.status(400).json({ error: 'The username or email you entered is already in use. Please try another one.' });
  }

  const newUser = await createUser({ username, email, password, color });
  const token = generateToken({ username: newUser.username, email: newUser.email });

  res.status(201).json({ message: 'Congratulations! Your account has been created successfully.', token });
});

app.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó ningún token' });
  }

  try {
    const user = verifyToken(token);
    res.status(200).json({ message: 'Profile Data', user });
  } catch (error) {
    res.status(403).json({ error: 'Invalid Token' });
  }
});

app.listen(PORT, () => {
  console.log(chalk.blueBright('✨ El servidor está volando alto en el puerto ') + chalk.greenBright(`${PORT} 🚀`));
});
