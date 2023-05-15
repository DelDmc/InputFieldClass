/**
 * Represents an input field.
 * @class
 */
class InputField {
  /**
     * Creates an instance of InputField.
     * @constructor
     * @param {string} id - The ID attribute for the input field.
     */
  constructor(id) {
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('id', id);
    this.element.setAttribute('placeholder', 'your input here');
    this.element.setAttribute('style', 'margin: 10px');
  }

  /**
     * Sets the value of the input field.
     * @param {string} value - The value to set.
     * @return {void}
     */
  setValue(value) {
    this.element.value = value;
  }

  /**
     * Checks if the input field is empty.
     * @returns {boolean} - True if the input field is empty, false otherwise.
     */
  isEmpty() {
    const { value } = this.element;
    return value.trim() === '';
  }

  /**
     * Checks if the input field contains a valid phone number.
     * @return {boolean} - True if the input field contains a valid phone number, false otherwise.
     */
  isPhone() {
    const { value } = this.element;
    const phoneNumber = value.replace(/\D/g, '');
    return phoneNumber.length === 10;
  }

  /**
     * Adds the input field to a specified HTML element.
     * @param {string} elementId - The ID of the HTML element to which the input field will be added
     * @return {void}
     */
  addToElement(elementId) {
    const parentElement = document.getElementById(elementId);
    parentElement.appendChild(this.element);
  }
}

// Usage example:
const field = new InputField('myIdNo1');
const field2 = new InputField('myIdNo2');
const field3 = new InputField('myIdNo3');

field.addToElement('first');
field2.addToElement('second');
field3.addToElement('second');
