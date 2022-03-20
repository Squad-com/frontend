import { SxProps, Theme } from '@mui/material';

export type StylesType<K extends string | number | symbol> = Partial<
  Record<K, SxProps<Theme>>
>;
