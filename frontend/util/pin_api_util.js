
export const createPin = (pin) => (
    $.ajax({
        url: '/api/pins',
        method: 'POST',
        data : pin,
        contentType: false,
        processData: false
    })
)

export const fetchAllPins = () => (
    $.ajax({
        url: '/api/pins',
        method: 'GET'
    })
)

export const fetchPin = (pinId) => {
    $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'GET'
    })
}