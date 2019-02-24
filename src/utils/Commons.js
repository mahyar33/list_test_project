export const calculatePagination = (total, limit) => {
    console.log(total / limit)
    return Math.ceil((total / limit))
}