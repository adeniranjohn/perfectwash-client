import { ErrorHandler } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


export class CatchError implements ErrorHandler {
  handleError(error: any): void {
    alert(`Error: ${error}`);
  }

}
