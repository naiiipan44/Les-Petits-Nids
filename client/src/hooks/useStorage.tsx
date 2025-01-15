function useStorage() {
  function getStorage() {
    const actualStorage = localStorage.getItem("nursery");
    if (actualStorage) {
      return JSON.parse(actualStorage);
    }
    return null;
  }
  return { getStorage };
}

export default useStorage;
