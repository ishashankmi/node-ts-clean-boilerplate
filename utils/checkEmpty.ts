export default function is_empty_object(args: any): boolean {
  let isEmpty: boolean = false;

  if (typeof args === "object" && args !== null && !Array.isArray(args)) {
    for (var v in args) {
      if (["", null, undefined].includes(args[v])) {
        isEmpty = true;
        break;
      }
    }
  } else {
    isEmpty = true;
  }

  return isEmpty;
}
