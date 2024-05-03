module.exports = class geenericResponse{
    static success(data) {
        return {
            success: true,
            data : data
        }
    }
    static error(message, statusCode) {
        return {
            success: false,
            message: message,
            code: statusCode
        }
    }
}