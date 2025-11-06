
export interface QuestionResponseType {
  question: string;
  answer: string[];

}

export interface AnswerRequestType {
    question: string;
    answer: string;
}

export interface AnswerResponseType {
    isClear: boolean;
}