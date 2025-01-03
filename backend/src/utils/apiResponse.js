class apiResponse {
    constructor (
        statuscode,
        data,
        message = "success",
    ) {
        this.statusCode = statusCode
        this.data = data,
        this.message = message
        this.success = statuscode<400
    }
}

export default apiResponse