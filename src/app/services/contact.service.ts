import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly SERVICE_ID = 'service_pjt4rbd';
  private readonly TEMPLATE_ID = 'template_55xoold';
  private readonly PUBLIC_KEY = 'Dw8DeSl0jvSNsjF6H';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Promise<any> {
    try {
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Développeur Créatif',
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
