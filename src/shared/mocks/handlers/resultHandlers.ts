import { http, HttpResponse } from 'msw';
import { createSuccessResponse } from '../util/response';
import { ResultResponseType } from 'entities/result/types/result.type';

const result = `과민성대장증후군(IBS) 관리 가이드 💡
식습관: 규칙적인 식사, 과식 피하기. 카페인·알코올·기름진 음식·매운 음식은 줄이기.
식이섬유: 수용성 섬유(귀리, 바나나, 고구마 등)는 도움 되지만, 불용성 섬유(현미, 생채소 등)는 증상 악화 가능.
FODMAP 식단: 유당, 과당, 양파, 마늘, 밀가루 등 고FODMAP 음식 줄이기.
수분 섭취: 하루 1.5~2L 충분히 마시기.
스트레스 관리: 명상, 가벼운 운동, 규칙적인 수면 유지.
약물: 필요 시 의사 처방에 따라 장운동 조절제, 항경련제, 프로바이오틱스 등 사용.
👉 증상이 지속되거나 악화되면 소화기내과 진료를 권장합니다.`;

const department = "내과";


const response: ResultResponseType = {
  result,
  department
}

export const resultHandlers = [

  http.get(
    `${import.meta.env.VITE_API_BASE_URL}/v1/result`,
    async () => {
      const res: ResultResponseType = {
        result,
        department
      };
      return createSuccessResponse('결과 조회 성공', res);
      //return new HttpResponse(null, { status: 404 });
      // return HttpResponse.json(null);
    }
  ),

];