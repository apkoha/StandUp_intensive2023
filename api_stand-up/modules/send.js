//день 2 виде 1 время 31:00
export const sendData = (res, data) => {
  res.writeHead(200, {
    "Content-Type": "text/json; charset=utf-8",
  });

  res.end(JSON.stringify(data));
};

export const sendError = (res, statusCode, errMessage) => {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end(errMessage);
};
