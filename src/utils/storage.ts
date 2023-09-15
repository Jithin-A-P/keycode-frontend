const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item || '');
  } catch {
    return item;
  }
};

const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : `${value}`
  );
};

const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

const clearAllLocalStorageItems = () => {
  localStorage.clear();
  window.location.reload();
};

export {
  clearAllLocalStorageItems,
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
};
