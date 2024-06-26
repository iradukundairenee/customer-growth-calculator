import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerDocument = yaml.load(path.resolve(__dirname, 'swagger.yaml'));

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
