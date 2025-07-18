
import { createClient } from "redis";

const URL_REDIS = process.env.URL_REDIS || 'localhost';
const PORT_REDIS = Number(process.env.PORT_REDIS) || 6379;

export const redis = createClient({
  socket: {
    host: URL_REDIS,
    port: PORT_REDIS,
  },
  
});

await redis.connect();
