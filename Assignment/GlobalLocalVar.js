var age = 23;

const displayAge = () => {
  console.log(age);

  const changeAge = (newAge) => {
    age = newAge;
    console.log(age);
  };

  return { changeAge };
};

const obj = displayAge();
obj.changeAge(56);  
