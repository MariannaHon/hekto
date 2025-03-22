import { RootState } from '../store';

export const selectError = (state: RootState) => state.blog.error;
export const selectLoading = (state: RootState) => state.blog.loading;
export const selectPost = (state: RootState) => state.blog.items;
