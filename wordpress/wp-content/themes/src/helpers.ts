export const eliminate = (array: Array<any>, element: any) => {
    array.splice(array.indexOf(element), 1)
}
