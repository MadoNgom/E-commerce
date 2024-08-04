import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  show(message: string, type: string = 'error') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.position = 'fixed';
      toastContainer.style.top = '10px';
      toastContainer.style.right = '10px';
      toastContainer.style.zIndex = '9999';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0 show`;
    toast.style.minWidth = '200px';
    toast.style.marginBottom = '10px';

    const toastBody = document.createElement('div');
    toastBody.className = 'd-flex';
    toastBody.innerHTML = `
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    `;

    toast.appendChild(toastBody);
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 5000);
  }
}
