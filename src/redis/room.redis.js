
import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

export const redis = createClient({
  socket: {
    host: process.env.URL_REDIS || '127.0.0.1',
    port: process.env.PORT_REDIS ? Number(process.env.PORT_REDIS) : 6379,
  },
  // password: process.env.REDIS_PASSWORD,
});

redis.on('error', (err) => console.log('Redis Client Error', err));

await redis.connect();

export const getRoomData = async (id) => {
  const data = await redis.get(id);
  return data ? JSON.parse(data) : null;
};

export const setRoomData = async (id, data) => {
  await redis.set(id, JSON.stringify(data));
};

export const deleteRoomData = async (id) => {
  await redis.del(id);
};
