import express from 'express';

const app =express()
const PORT = 8000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Api Home page')
})

const server = app.listen (PORT, () => console.log(`Server running on port ${PORT}`))

process.on("unhandledREjection", (err, promise) => {
	console.log(`Logged error: ${err}`)
	server.close(() => process.exit(1))
})
