const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};
// Sem Object.values
console.log(listSkillsValuesWithFor(student));



const listSkillsValuesWithValues = (student) => Object.values(student);

// Com Object.values
console.log(listSkillsValuesWithValues(student));