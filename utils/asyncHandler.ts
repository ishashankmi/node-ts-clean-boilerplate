export async function asyncHandler(query: Promise<Function>): Promise<any> {
  return query
    .then((data) => {
      return [data, null];
    })
    .catch((error) => {
      return [null, error.message];
    });
}
