import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: Response) {
        alert('unexpeted error') ;
        console.log(error) ;

    }

}