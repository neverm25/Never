import store, { actions } from "@Redux";

const enableLoading = () => {
  store.dispatch(actions.loading.setIsLoading(true));
};
const disableLoading = () => {
  store.dispatch(actions.loading.setIsLoading(false));
};
const enableHomepageLoading = () => {
  store.dispatch(actions.loading.setIsHomepageLoading(true));
};
const disableHomepageLoading = () => {
  store.dispatch(actions.loading.setIsHomepageLoading(false));
};

export const loading = {
  enableLoading,
  disableLoading,
  enableHomepageLoading,
  disableHomepageLoading,
};
