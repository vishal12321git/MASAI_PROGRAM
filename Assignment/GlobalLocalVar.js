var age = 23;

const displayAge = () => {
  console.log(age);

  // Change age function inside an object
  const changeAge = (newAge) => {
    age = newAge;
    console.log(age);
  };

  return { changeAge };
};

const obj = displayAge();
obj.changeAge(56);  // This will change the age and log the new age.
