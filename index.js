function InputField(id){
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('id', id);
    this.element.setAttribute('placeholder', "your input here");
    this.element.setAttribute("style", "margin: 10px");
}

InputField.prototype.setValue = function(value) {
    this.element.value = value;
};

InputField.prototype.isEmpty = function() {
    const value = this.element.value;
    return value.trim() === '';
};

InputField.prototype.isPhone = function() {
    const value = this.element.value;
    const phoneNumber = value.replace(/\D/g, '');
    return phoneNumber.length === 10; 
};      

InputField.prototype.addToElement = function(elementId){
    const parentElement = document.getElementById(elementId);
    parentElement.appendChild(this.element);
};


const field = new InputField('myIdNo1');
const field2 = new InputField('myIdNo2');
const field3 = new InputField('myIdNo3');

field.addToElement("first");
field2.addToElement("second");
field3.addToElement("second");

console.log(field.value);
field.setValue("54");

console.log(field.isEmpty());
field.setValue("0541231234");
console.log(field.isPhone());


