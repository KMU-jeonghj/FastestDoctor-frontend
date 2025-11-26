
export interface QuestionResponseType {
  step: number;
  question: string;
  options: string[];

}

export interface AnswerRequestType {
    question: string;
    answer: string;
}

export interface AnswerResponseType {
    isClear: boolean;
}