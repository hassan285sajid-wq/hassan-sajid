class ApiError extends Error {
    constructor(
        statusCode,
        message= "something went wrong",
        error= [],
        stack= ""
    ) {
       super(Message)
        this.statusCode= statuscode
        this.data = null
        this.message = message
        this.success = false;
        this.error = error
    }
}