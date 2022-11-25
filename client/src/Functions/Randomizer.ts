// Requirement #4. Function for randomizing list recursively
export const shuffle = (arr: any[]) : any[] => {
    const recur = (arr: any[],currentIndex: number): any[] => {
      if(currentIndex===0){
        return arr;
      }
      const randomIndex = Math.floor(Math.random() * currentIndex);
      const swap = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = swap;
      return recur(
        arr,
        currentIndex - 1
      );
    }
    return recur(arr.map(x=>x),arr.length-1);
  };