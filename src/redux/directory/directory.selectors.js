import {createSelector} from 'reselect';

const selectDirectory = rootReducer => rootReducer.directoryReducer;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)