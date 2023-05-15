class InputField {
  constructor(id) {
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('id', id);
    this.element.setAttribute('placeholder', 'your input here');
    this.element.setAttribute('style', 'margin: 10px');
  }

  setValue(value) {
    this.element.value = value;
  }

  isEmpty() {
    const { value } = this.element;
    return value.trim() === '';
  }

  isPhone() {
    const { value } = this.element;
    const phoneNumber = value.replace(/\D/g, '');
    return phoneNumber.length === 10;
  }

  addToElement(elementId) {
    const parentElement = document.getElementById(elementId);
    parentElement.appendChild(this.element);
  }
}

const field = new InputField('myIdNo1');
const field2 = new InputField('myIdNo2');
const field3 = new InputField('myIdNo3');

field.addToElement('first');
field2.addToElement('second');
field3.addToElement('second');
