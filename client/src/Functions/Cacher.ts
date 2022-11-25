// Requirement #3. Functions for writing and reading downloads using local storage as cache
export const writeToCache = (url : string, data : JSON) => localStorage.setItem(url, JSON.stringify(data))
export const readFromCache = (url: any) => JSON.parse(localStorage.getItem(url) as any)  || null