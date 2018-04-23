import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  headerMessage: 'Comming Soon',

  responseMessage: '',
  emailAddress:'',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    },

    sendMessage() {
      alert(`${this.get('emailAdd')}, ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
      this.set('emailAdd', '');
      this.set('message', '');
    }
  }

});
