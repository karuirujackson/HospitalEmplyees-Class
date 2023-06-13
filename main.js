class HospitalEmployee {
  constructor (name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays (){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    return this._remainingVacationDays -= daysOff;
  }
  static generatePassword (){
    return Math.floor(Math.random() * 10000);
  }
};

class Nurse extends HospitalEmployee {
    constructor (name, certifications){
        super(name);
        this._certifications = certifications;
    }
    get certifications (){
        return this._certificates;
    }
    addCertification (newCertification){
        this._certifications.push(newCertification);
    }
};

const nurseMary = new Nurse ('Mary', ['Trauma', 'Padetrics']);
console.log(nurseMary._name);
console.log(nurseMary._certifications);
console.log(nurseMary._remainingVacationDays);
console.log(nurseMary.takeVacationDays(5));
nurseMary.addCertification('Genetics');
console.log(nurseMary._certifications);
console.log(HospitalEmployee.generatePassword());
