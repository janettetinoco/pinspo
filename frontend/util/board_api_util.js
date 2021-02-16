export const createBoard = (board) => {
    return $.ajax({
        method: "POST",
        url: '/api/boards',
        data: {board}
    })
}

export const fetchBoard = (boardId) => {
    return $.ajax({
        method: "GET",
        url: `/api/boards/${boardId}`,
    })
}

export const updateBoard = (board) => {
    // debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: { board }
    })
}

export const destroyBoard = (boardId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/boards/${boardId}`
    })
}