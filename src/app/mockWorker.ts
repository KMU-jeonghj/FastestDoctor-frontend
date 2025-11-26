
export const startMockWorker = async () => {
  //DEV 모드 일 때만 -> MSW 실행
  if (import.meta.env.VITE_USE_MSW === 'true' && import.meta.env.DEV) {
    // ▼ 여기서 import를 하면, 배포 시에는 이 코드가 아예 포함되지 않습니다 (Tree-shaking)
    const { worker } = await import('../shared/mocks/browser');

    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
  // 배포 환경이면 아무것도 하지 않고 함수 종료 (Promise.resolve)
};