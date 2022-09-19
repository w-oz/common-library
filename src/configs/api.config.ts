import * as dotenv from 'dotenv';

dotenv.config();

export const bsUri: string = process.env.BS_URI || 'http://localhost:3045';