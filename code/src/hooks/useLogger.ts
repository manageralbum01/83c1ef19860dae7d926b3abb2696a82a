export const useLogger = (namespace: string) => {
  return (...args) => {
    console.log(`[${namespace}]`, ...args)
  }
}
