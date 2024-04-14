import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { store } from '.';
import type { RootState } from './Models';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
