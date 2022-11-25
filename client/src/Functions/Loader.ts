export const loadImages = async (srcArray: string[]) => {
    const promises = await srcArray.map((src: string) => {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img.height)
        img.onerror = reject
        img.src = src
      })
    });
    await Promise.all(promises);
  };