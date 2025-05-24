function scoreTest(str, right, omit, wrong){
  return (str.filter(a=>a==0).length * right) + (str.filter(b=>b===1).length * omit) - (str.filter(c=>c===2).length * wrong)
}