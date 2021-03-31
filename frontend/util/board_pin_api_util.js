export const createPinToBoard = (board_pin) => {
    return $.ajax({
        method: "POST",
        url: '/api/board_pins',
        data: { board_pin }
    })
}

export const unpinFromBoard = (board_pin) => {
    return $.ajax({
        method: 'DELETE',
        url:'/api/board_pins/unpin',
        data: { board_pin }
    })
}