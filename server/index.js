import express from 'express';

const app =express()
const PORT = 8000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Api Home page')
})

app.get('/api/v1/', (req, res) => {
	res.send('Api v1 page')
})

app.get('/api/v2/', (req, res) => {
	res.send('Api v2 page')
})

app.post('/api/v3/', (req, res) => {
	const { username, password }  = req.body;
	if (username == 'Test' && password == 'test_password'){
		res.send('Api v3 page')
	}
	else res.send('Unauthorized to access this page')
})

const server = app.listen (PORT, () => console.log(`Server running on port ${PORT}`))

process.on("unhandledREjection", (err, promise) => {
	console.log(`Logged error: ${err}`)
	server.close(() => process.exit(1))
})
