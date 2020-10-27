import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import 'dotenv/config';

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/', routes);

// Heroku Deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
	);
}

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
	.connect(process.env.MONGO_URI!, options)
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		)
	)
	.catch((error) => {
		throw error;
	});
