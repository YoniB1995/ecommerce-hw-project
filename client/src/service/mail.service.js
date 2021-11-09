import {API_CLEAN} from './api.service';
import axios from 'axios';

export const sendMail = async (email,text,subject) => {
     try {
      await axios.post(`${API_CLEAN}/send_mail`, {
        text: text,
        email: email,
        subject: subject,
      });
    } catch (error) {
      console.log(error);
    }
}