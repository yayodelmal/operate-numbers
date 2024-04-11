import express from 'express';
import { handleOperations } from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/operate', handleOperations);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
