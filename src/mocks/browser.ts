import { setupWorker } from 'msw/browser'; // import MSW browser worker setup
import { handlers } from './handlers'; // import all request handlers

export const worker = setupWorker(...handlers); // create and configure the service worker 