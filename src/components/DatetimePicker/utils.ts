// import { PropType } from 'vue';
// import { isNaN } from '../utils/validate/number';
// import { pickerProps } from '../picker';

// export type ColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';

// export type DatetimePickerType =
//   | 'date'
//   | 'time'
//   | 'datetime'
//   | 'datehour'
//   | 'month-day'
//   | 'year-month';

// export const sharedProps = {
//   ...pickerProps,
//   filter: Function as PropType<(type: string, values: string[]) => string[]>,
//   columnsOrder: Array as PropType<ColumnType[]>,
//   formatter: {
//     type: Function as PropType<(type: string, value: string) => string>,
//     default: (type: string, value: string) => value,
//   },
// };

// export const pickerKeys = Object.keys(pickerProps) as Array<
//   keyof typeof pickerProps
// >;

// export function times<T>(n: number, iteratee: (index: number) => T) {
//   let index = -1;
//   const result: T[] = Array(n);

//   while (++index < n) {
//     result[index] = iteratee(index);
//   }

//   return result;
// }

// export function getTrueValue(value: string | undefined): number {
//   if (!value) {
//     return 0;
//   }

//   while (isNaN(parseInt(value, 10))) {
//     if (value.length > 1) {
//       value = value.slice(1);
//     } else {
//       return 0;
//     }
//   }

//   return parseInt(value, 10);
// }

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate()
}
