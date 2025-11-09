import { setupWorker } from 'msw/browser';
import { userHandlers } from './handlers/userHandlers';
import { resultHandlers } from './handlers/resultHandlers';
import { diagnosisHandlers } from './handlers/diagnosisHandlers';


const handlers = [
  ...userHandlers,
  ...diagnosisHandlers,
  ...resultHandlers
];

export const worker = setupWorker(...handlers);