export function getEnumMembers(e: object) {
  return Object.keys(e)
    .filter(key => !isNaN(Number(e[ key ])))
}