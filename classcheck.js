class human {
  name ='';
  job='';
  skills=[];



getJob (x){
 
    this.Job=x;
}

leaveJob (x){
  
    this.job='unemployed'

}

learnNewskills (x){

    this.skills.push(x);


}

forgetSkills(x){

this.Skills=this.skills.filtre(res=>res!=x)

}
}
class Student extends Human{


  


   }

const mar = new Student ();
mar.getJob('Web developer');

mar.learnNewSkill('React');

mar.forgetSkill('React');

mar.leaveJob();






