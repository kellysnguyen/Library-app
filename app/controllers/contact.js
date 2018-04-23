import {computed} from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({

  responseMessage: '',
  emailAdd:'',
  messageText:'',

  isDisabled: computed('emailAdd', 'messageText', function() {
    var isValidEmail = /\S+@\S+\.\S+/.test(this.get('emailAdd'));
    var criteria = (!isValidEmail || this.get('messageText') === '');
    return criteria;
  }),

  actions: {
    sendMessage() {
      alert(`email: ${this.get('emailAdd')}\nmessage: ${this.get('messageText')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
      this.set('emailAdd', '');
      this.set('messageText', '');
    }
  }
});
