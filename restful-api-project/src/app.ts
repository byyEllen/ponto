import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.yaml';
import usuarioRoutes from './routes/usuario.routes';
import pontoRoutes from './routes/ponto.routes';
import departamentoRoutes from './routes/departamento.routes';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/usuarios', usuarioRoutes);
app.use('/pontos', pontoRoutes);
app.use('/departamentos', departamentoRoutes);

app.use(errorMiddleware);

export default app;