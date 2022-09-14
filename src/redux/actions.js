import { createAction } from '@reduxjs/toolkit';
import { CHANGE_FILTER } from './types';

export const changeFilterInput = createAction(CHANGE_FILTER);
