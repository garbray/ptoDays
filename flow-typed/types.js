// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

export type User = {
  id: number,
  name: string,
  title: string,
  startDate: string,
  pendingVacationsDays: Object,
};
