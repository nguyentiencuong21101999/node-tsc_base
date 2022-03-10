import express from 'express';

const app = express();
const port = 4000;

app.use(express.json({ limit: '100mb' }));

import ApiRoute from './src/routes/api/api.route';
app.use('/api', ApiRoute.getInstance().route());

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
