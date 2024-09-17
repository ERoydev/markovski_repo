import { Injectable } from '@angular/core';

// Since i need dialog methods to be reused in every component that use Dialog

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogOpen = false;

  // Operational functions
  openDialog(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.dialogOpen = true;
  }

  closeDialog(): void {
    this.dialogOpen = false;
  }

  
  submitDialog(): void {
    this.closeDialog();
  }
  // End

  // Getter function 
  isDialogOpen(): boolean {
    return this.dialogOpen;
  }
}
