import ru from './ru.json';
import uk from './uk.json';
import en from './en.json';

export const dict = { ru, uk, en } as const;
export type Dict = typeof dict;
