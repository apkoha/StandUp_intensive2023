import fs from "node:fs/promises";

//день 2 видео 1 время 9:00
//день 2 видео 2 время 7:30
export const checkFileExist = async (path) => {
  try {
    await fs.access(path);
  } catch (error) {
    console.log("error: ", error);
    console.error(`Файл ${path} не найден!`);
    return false;
  }

  return true;
};

export const createFileIfNotExist = async (path) => {
  try {
    await fs.access(path);
  } catch (error) {
    console.log("error: ", error);
    await fs.writeFile(path, JSON.stringify([]));
    console.log(`Файл ${path} был создан!`);
    return true;
  }
};
