function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageMilliseconds = today - birthDate;
    const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return ageYears.toFixed(10);
  }

  function displayAndUpdateAge() {
    const birthdate = new Date('2008-04-29');
    const ageElement = document.getElementById('age');

    function updateAge() {
      const age = calculateAge(birthdate);
      ageElement.textContent = `${age}`;
    }

    updateAge();
    setInterval(updateAge, 1);
  }