import router from './router.js';
import express from 'express';
import cors from 'cors';

const PORT = 3003;

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
