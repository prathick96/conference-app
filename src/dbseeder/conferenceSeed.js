const conference = require("../model/conference");

const memberData = [
  {
    firstName: "Rachael",
    lastName: "Green",
    gender: "Female",
    profession: "Management",
    experience: 1,
    city: "Chennai",
    address: "some street",
    contact: "9988776655"
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    gender: "Male",
    profession: "Student",
    experience: 0,
    city: "Mumbai",
    address: "some street",
    contact: "8899775566"
  },
  {
    firstName: "Mozart",
    lastName: "Bonvii",
    gender: "Female",
    profession: "IT",
    experience: 3,
    city: "Bengaluru",
    address: "some street",
    contact: "7896584125"
  },
  {
    firstName: "Moses",
    lastName: "Kent",
    gender: "Male",
    profession: "Content Writer",
    experience: 7,
    city: "Mumbai",
    address: "some street",
    contact: "9856845789"
  },
  {
    firstName: "Monica",
    lastName: "Geller",
    gender: "Female",
    profession: "Management",
    experience: 4,
    city: "Chennai",
    address: "some street",
    contact: "9658965896"
  },
  {
    firstName: "Joey",
    lastName: "TB",
    gender: "Male",
    profession: "Student",
    experience: 8,
    city: "Mumbai",
    address: "some street",
    contact: "9854785698"
  },
  {
    firstName: "James",
    lastName: "Browlin",
    gender: "Male",
    profession: "IT",
    experience: 2,
    city: "Bengaluru",
    address: "some street",
    contact: "9874587965"
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    gender: "Male",
    profession: "ContentWriter",
    experience: 5,
    city: "Mumbai",
    address: "some street",
    contact: "9874589674"
  },
  {
    firstName: "Test",
    lastName: "something",
    gender: "Female",
    profession: "Management",
    experience: 3,
    city: "Chennai",
    address: "some street",
    contact: "9523648596"
  },
  {
    firstName: "Joey",
    lastName: "TB",
    gender: "Male",
    profession: "Student",
    experience: 1,
    city: "Mumbai",
    address: "some street",
    contact: "9856896556"
  },
  {
    firstName: "James",
    lastName: "Browlin",
    gender: "Male",
    profession: "IT",
    experience: 2,
    city: "Bengaluru",
    address: "some street",
    contact: "9874125632"
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    gender: "Male",
    profession: "ContentWriter",
    experience: 5,
    city: "Mumbai",
    address: "some street",
    contact: "9856235785"
  },
  {
    firstName: "Monica",
    lastName: "Geller",
    gender: "Female",
    profession: "Management",
    experience: 4,
    city: "Chennai",
    address: "some street",
    contact: "9856321478"
  },
  {
    firstName: "Joey",
    lastName: "TB",
    gender: "Male",
    profession: "Student",
    experience: 8,
    city: "Mumbai",
    address: "some street",
    contact: "9852301458"
  },
  {
    firstName: "James",
    lastName: "Browlin",
    gender: "Male",
    profession: "IT",
    experience: 2,
    city: "Bengaluru",
    address: "some street",
    contact: "9856235896"
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    gender: "Male",
    profession: "ContentWriter",
    experience: 5,
    city: "Mumbai",
    address: "some street",
    contact: "8458965875"
  }
];

const conferenceSeed = async () => {
  try {
    await conference.sync({ force: true });
    memberData.forEach(async (element) => {
      const result = await conference.create(element);
      console.log(result.get());
    });
  } catch (e) {
    console.log(e);
  }
};

conferenceSeed();
