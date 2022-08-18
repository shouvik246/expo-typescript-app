import React, { createContext } from "react";

export type Question = {
    id: number;
    question_type: string;
    question_title: string;
    question_options: QuestionOption[];
    answer: string[]
  };
  
export  type QuestionOption = {
    option_id : number;
    option : string;
    checked : boolean
  }
export const MyQuestionList = createContext<Question[]>([]);
export const Answers = createContext<string[]>([]);