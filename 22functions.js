let fortune = null;

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  fortune = `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;

  return fortune;
}

tellFortune("programmer", "New York", "Rana", 2);

console.log(fortune);
