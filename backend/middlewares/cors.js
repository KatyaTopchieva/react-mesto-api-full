module.exports.corsConfig = {
  origin: [
    'https://etopchieva.students.nomoredomains.sbs',
    'http://etopchieva.students.nomoredomains.sbs',
    'http://localhost:3000',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Origin', 'Referer', 'Accept', 'Authorization'],
  credentials: true,
};
