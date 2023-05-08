function test() {
  const str = `const a = require('xxx')`
  const regE = /require\(\'(.+)\'\)$/g
  const testres = regE.test(str)
  const res1 = str.match(regE)
  const execres = regE.exec(str)
  const res2 = str.search(regE)
  const resx = str.replace(regE, (_, val) => {
    return val
  })
  const line = `
  testres:${testres}
  execres:${execres}
  res1:${res1}
  res2:${res2}
  resx:${resx}
  `
  console.log(line)
}

function test1() {
  // const pattern=/[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
  const pattern = /\s+/g;
  const str = `wxam: name\n PID:   123456\n age: 12`;
  const res = str.replace(pattern, '')
  console.log(res, str)
}

test1()