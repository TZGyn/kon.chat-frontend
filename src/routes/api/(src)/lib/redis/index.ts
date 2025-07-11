import { REDIS_URL } from '$env/static/private'
import { Redis } from 'ioredis'

export const redis = new Redis(REDIS_URL)

export const createRedis = () => {
	return new Redis(REDIS_URL)
}
