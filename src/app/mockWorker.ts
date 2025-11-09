import { worker } from '../shared/mocks/browser';

export const startMockWorker = async () => {
  if (import.meta.env.VITE_USE_MSW === 'true' && import.meta.env.DEV) {
    await worker.start({
      onUnhandledRequest: 'bypass', // 백엔드로 요청 넘기기
    });
  }
};
