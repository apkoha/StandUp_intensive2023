import fs from "node:fs/promises";

//день 2 видео 1 время 9:00
//день 2 видео 2 время 7:30
export const checkFile = async (path, createIfMissing) => {
  if (createIfMissing) {
    try {
      await fs.acess(path);
    } catch (error) {
      console.log("error: ", error);
      await fs.writeFile(path, JSON.stringify([]));
      console.log(`Файл ${path} был создан!`);
      return true;
    }
  }

  try {
    await fs.acess(path);
  } catch (error) {
    console.log("error: ", error);
    console.error(`Файл ${path} не найден!`); //${} - интерполяция
    return false;
  }

  return true;
};
