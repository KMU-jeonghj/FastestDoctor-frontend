import { http } from 'msw';
import { createSuccessResponse } from '../util/response';
import { AnswerRequestType, QuestionResponseType } from 'entities/diagnosis/types/diagnosis.type';

// 질문 데이터 
const MOCK_QUESTIONS: QuestionResponseType[] = [
  {
    question: "1. 어떤 부위의 증상으로 상담을 원하시나요?",
    answer: [
      "머리/두통 관련",
      "목/경추 관련",
      "가슴/흉부 관련",
      "복부/소화기 관련",
      "기타"
    ]
  },
  {
    question: "2. 증상이 언제부터 시작되었나요?",
    answer: [
      "오늘 갑자기 시작됨",
      "일주일 전부터",
      "한 달 이상 지속됨",
      "잘 모르겠음"
    ]
  },
  {
    question: "3. 통증의 정도는 어느 정도인가요? (1~10)",
    answer: [
      "약함 (1-3)",
      "중간 (4-6)",
      "심함 (7-8)",
      "극심함 (9-10)"
    ]
  }
];

// 진행 포인터
let currentStep = 0;

export const diagnosisHandlers = [

  // GET: 현재 단계(currentStep)에 맞는 질문을 반환
  http.get(
    `${import.meta.env.VITE_API_BASE_URL}/v1/question`,
    async () => {

      // 포인터가 2를 넘어가면 인덱스를 0으로 초기화
      const safeIndex = currentStep < MOCK_QUESTIONS.length ? currentStep : 0;

      const res: QuestionResponseType = MOCK_QUESTIONS[safeIndex];

      console.log(`[MSW] 질문 조회 요청. 현재 단계: ${currentStep + 1}/${MOCK_QUESTIONS.length}`);

      return createSuccessResponse('질문 조회 성공', res);
    }
  ),

  // POST: 답변을 받으면 다음 단계로 넘김 (currentStep + 1)
  http.post(
    `${import.meta.env.VITE_API_BASE_URL}/v1/question`,
    async ({ request }) => {
      const body = (await request.json()) as AnswerRequestType;

      console.log(`[MSW] 답변 수신: ${body.answer}`);

      // 단계 증가
      currentStep += 1;

      // 모든 질문(3개)을 다 거쳤는지 확인
      const isClear = currentStep >= MOCK_QUESTIONS.length;

      if (isClear) {
        console.log('[MSW] 모든 질문 완료! 결과 페이지로 이동 신호 보냄');
        // 다음 테스트를 위해 단계를 다시 0으로 초기화 (선택 사항)
        currentStep = 0;
      } else {
        console.log('[MSW] 다음 질문으로 넘어갑니다.');
      }

      return createSuccessResponse('답변 성공', { isClear });
    },
  )
];