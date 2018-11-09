import Controller from '@ember/controller';
import { gte, match, not, and } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    message: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte('message.length', 5),
    isBothTrue: and('isValid', 'isLongEnough'),
    isDisabled: not('isBothTrue'),

});
