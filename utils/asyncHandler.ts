export async function asyncHandler(query: Promise<any>): Promise<any> {
  return query
    .then((data) => {
      return [data, null];
    })
    .catch((error) => {
      return [null, error.message];
    });
}
