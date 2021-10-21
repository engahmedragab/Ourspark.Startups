import { InjectionToken } from '@angular/core';

export interface IConst {
  patterns: any;
  others: any;
  colors?: any;
}

export let consts: IConst =
{
  patterns:
  { 
    numbers: '0-9',
    aboveZero: "^((([0-9]{0,1}[1-9])([0-9])*)((\\.[0-9]{1,})?)|([0-9])+((\\.[0-9]{1,})))$",
    twoDecimals: "^((([0-9])*)((\\.[0-9]{1,2})?)|([0-9])+((\\.[0-9]{1,2}))|([0-9])+((\\.)))$",
    englishValidationPattern: '^[a-zA-Z]+([a-zA-Z0-9 (\\\\/\n\|\\[\\]\{\}\’\`\~\!\@\#\$\%\^\&\*\+\=\'\,\.\?\"\;\:\\-\_\،\“\”)])*$',
    arabicValidationPattern: '^[\u0621-\u0658]+([\u0621-\u06580-9 (\\\\/\n\|\\[\\]\{\}\’\`\~\!\@\#\$\%\^\&\*\+\=\'\,\.\؟\"\;\:\\-\_\،\“\”)])*$',
    twoDecimalPoint: "^$|^-?\\d+(\\.\\d{1,2})?",
    arabicCharacters: 'ثبضصقفغعهخحجدطكمنتالبيسشئءؤرلاىةوزظًٌَُلإإلآآ<>؛',
    englishCharacters: 'a-zA-Z<>؛',
    postiveNumber: "^(0|[1-9][0-9]*)$",
    postiveNumberFromOneToHundred: "^(0)*[0-9][0-9]?$|^100$",
    numbersAndCharactersOnly: '[a-zA-Z0-9]+',
    NotNumbersOnly: '(?!^\\d+$)^.+$',
  },
  others: {

  },
  colors: {
    VerySoftRed: '#EFA5A5',
    SlightlyDesaturatedOrange: '#B37F68',
    DarkCyan: '#26A69A',
    DarkCyan6: 'rgba(38,166,154,0.6)',
    DarkCyan8: 'rgba(38,166,154,0.8)',
    VividOrange: '#FFA726',
    VividOrange6: 'rgba(255,167,38,0.6)',
    VividOrange8: 'rgba(255,167,38,0.8)',
    SlightlyDesaturatedBlue: '#6892B3',
    SlightlyDesaturatedBlue6: 'rgba(104, 146, 179,0.6)',
    SlightlyDesaturatedBlue8: 'rgba(104, 146, 179,0.8)',
    PureRed: '#FF1100',
    DarkLimeGreen: '#147E00',
    LightYellow: '#FFEE58',
    DarkGrayishBlue: '#86859B',
    White: '#FFF',
  }
};


export const CONSTANTS = new InjectionToken<IConst>('constants');
