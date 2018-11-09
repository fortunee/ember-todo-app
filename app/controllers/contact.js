import Controller from '@ember/controller';
import { gte, match, not, and } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    message: '',
    responseMessage: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte('message.length', 5),
    isBothTrue: and('isValid', 'isLongEnough'),
    isDisabled: not('isBothTrue'),

    actions: {
        sendMessage() {
            alert(`${this.get('emailAddress')} is trying to send ${this.get('message')}`);
            this.set('responseMessage', 'Message received! We will be in touch. Thanks');
            this.set('emailAddress', '')
            this.set('message', '')
        }
    },
});
