export const successResponse = (req, res, data, code = 200) => res.status(code).send(data);

export const errorResponse = (
    req,
    res,
    errorMessage = 'Something went wrong',
    code = 500,
    error = {},
) => res.status(code).json({
    errorMessage,
    error,
    data: null,
    success: false,
});

export const uniqueId = (length = 13) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };