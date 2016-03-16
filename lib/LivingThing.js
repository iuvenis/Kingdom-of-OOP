'Use strict';

export default  class LivingThing {

constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
this._name = name;
this._uniCellular = uniCellular;
this._trueNucleus = trueNucleus;
this._anaerobic = anaerobic;
this._asexual = asexual;
this._mobile = mobile;
}


get name(){
  return this._name;
}
set name (name ) {
  if (typeof(name) === 'string' ){
    this._name = name;
  }
  else {
    throw new TypeError('LivingThing.name must be a string');
  }
}

get uniCellular(){
  return this._uniCellular;
}

set uniCellular (uniCellular) {
    this._uniCellular = uniCellular;
}

get multiCellular(){
 if (this.uniCellular === true){
    return false;
}
else{
  return true;
}
}

set multiCellular (uniCellular) {
    this._uniCellular = !uniCellular;
}

get eukaryote (){
  return this._trueNucleus;
}

set eukaryote (trueNucleus ) {
    this._trueNucleus = trueNucleus;
}

get prokaryote (){
  if (this._trueNucleus === true){
    return false;
  }
  else{
    return true;
  }
}
set prokaryote(trueNucleus){
  this._trueNucleus =  !trueNucleus;
}



get anaerobic(){
  return this._anaerobic;
}

set anaerobic (anaerobic) {
    this._anaerobic =anaerobic;
}

get asexual(){
  return this._asexual;
}

set asexual (asexual ) {
    this._asexual =asexual;
  }

get mobile(){
  return this._mobile;
}

set mobile (mobile ) {
    this._mobile =mobile;
}
}