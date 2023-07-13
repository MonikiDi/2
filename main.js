function getCount(str) {
    let res = str.split('').forEach(element => {
        obj[element] === 0? obj[element] + 1: false
       
    });
    console.log(res);
    return res;
  }
  const obj = {
    a: 0,
    e: 0,

  }
  let str = "avbvaergsfbtjmnrsterb"
  console.log('getCount(str): ', getCount(str));