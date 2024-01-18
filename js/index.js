const Name = document.querySelector(".name");
const email = document.querySelector(".email");

Name.value = '';
email.value = '';


// The Actives

const activePlacer = document.querySelector(".ActivePla");

function submit() {
  console.log(`Name : ${Name.value}`);
  console.log(`Email : ${email.value}`);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ValidateEmail = emailRegex.test(email.value);

  console.log(ValidateEmail);

  if (ValidateEmail /* && Name.value.length > 0*/) {
    email.classList.add("activeY");
    Name.classList.add("activeY");
  } else {
    email.classList.add("activeN");
    Name.classList.add("activeY");
    activePlacer.style.opacity = 1;
  }
}
