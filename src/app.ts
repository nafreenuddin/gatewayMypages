// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import apiRoutes from './routes/api';

// dotenv.config(); // This loads the variables from the .env file into process.env

// const app = express();

// app.use(cors()); // Enable CORS
// app.use(express.json());

// app.use('/api', apiRoutes); // Use the API routes defined in routes/api

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Gateway service running on port ${PORT}`);
// });

// export default app;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes); // Use the API routes defined in routes/api

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Gateway service running on port ${PORT}`);
});

export default app;
