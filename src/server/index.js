import router from './router.js';
import express from 'express';
const PORT = 3002;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
