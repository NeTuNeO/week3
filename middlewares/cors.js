<<<<<<< Updated upstream

function cors(req, res, next) {
    const { origin } = req.headers;
    const allowedCors = [
        'https://practicum.yandex.ru',
        'https://students-projects.ru',
        'localhost:3000'
      ];
    
=======
const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
  ];

function cors(req, res, next) {
    const { origin } = req.headers;
>>>>>>> Stashed changes
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
}
module.exports = cors;