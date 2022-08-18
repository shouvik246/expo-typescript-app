import * as data from '../data.json'

export const Questions = data.questions;

export const questionTitles : string[] = Questions.map(item => item.question_title)
export const questionOptions : string[][]= Questions.map(item => item.question_options)

export const {  question_type,  question_options} : any = {...Questions}