export const createPinToBoard = (board_pin) => {
    return $.ajax({
        method: "POST",
        url: '/api/board_pins',
        data: { board_pin }
    })
}