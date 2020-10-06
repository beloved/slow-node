function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const myEnvVar = process.env.VARIABLE_NAME;
    console.log('${myEnvVar} Containers rule!');
    await sleep(5000);
  }
}

main();
