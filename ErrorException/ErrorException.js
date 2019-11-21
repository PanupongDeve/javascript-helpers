import { ERROR_EXCEPTION_TYPE } from '../Enum'

export const ERROR_TYPE = ERROR_EXCEPTION_TYPE;

class ErrorException {

    constructor(selectErorrType, functionCustomError) {
        this._responseErrorFuntionPointer = this._consoleError;
        if (selectErorrType) {
            this.selectedError(selectErorrType, functionCustomError);
        }
        
    }

    _consoleError = (errorMessage) => {
        console.log('Error Exception', errorMessage)
    }

    _alertError = (errorMessage) => {
        alert(errorMessage)
    }

    selectedError = (selectErorrType, functionCustomError) => {
        if (selectErorrType === ERROR_EXCEPTION_TYPE.CUSTOM) {
            this._responseErrorFuntionPointer = functionCustomError;
        } else if (selectErorrType === ERROR_EXCEPTION_TYPE.ALERT) {
            this._responseErrorFuntionPointer = this._alertError;
        } else {
            this._responseErrorFuntionPointer = this._consoleError;
        }
        
    }

    responseError = (errorMessage) => {
        let showErrorMessage = errorMessage;
        if (errorMessage && errorMessage.response && errorMessage.response.data && errorMessage.response.data.message) {
            showErrorMessage = errorMessage.response.data.message;
        }
        this._responseErrorFuntionPointer(showErrorMessage);
        
    }
}

export default ErrorException;