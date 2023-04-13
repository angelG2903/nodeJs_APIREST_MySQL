import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express();

app.use(express.json()) /* Es para que pueda entender los objetos json */

app.use(indexRoutes)

app.use('/api', employeesRoutes)

// middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;