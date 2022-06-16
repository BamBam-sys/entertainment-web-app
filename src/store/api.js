import { createAction } from '@reduxjs/toolkit';

export const apiRequested = createAction('api/Requested');
export const apiRequestSuccess = createAction('api/RequestSuccess');
export const apiRequestFailed = createAction('api/RequestFailed');
