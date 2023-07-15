import { format, addDays, subDays, subMonths, startOfMonth, endOfMonth } from "date-fns"

/**
 * This module exports several constants related to dates, including today's date, yesterday's date, the last seven days, the last thirty days, the start and end of the current month, and the start and end of the previous month.
 * @module utils/index
 */

export const formatDate = (date, dateFormat) => format(date, dateFormat);
export const dateFormat = "MM/dd/yyyy";
export const today = new Date();
export const yesterday = subDays(today, 1);
export const tomorrow = addDays(today, 1);
export const lastSevenDays = subDays(today, 7);
export const lastThirtyDays = subDays(today, 30);
export const monthStart = startOfMonth(today);
export const monthEnd = endOfMonth(today);
export const lastMonthStart = subMonths(monthStart, 1);
export const lastMonthEnd = subMonths(monthEnd, 1);