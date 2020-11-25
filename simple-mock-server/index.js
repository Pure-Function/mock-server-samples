import mockserver from '@funq/mock-server';
import dotenv from "dotenv";

dotenv.config();
mockserver.startMockServer(process.env.CONFIG_PATH, process.env.DATA_PATH);