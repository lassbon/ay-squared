function reconstructSentence(s) {
  const words = s.split(" ")
  const sentence = []
  for (const word of words){
    const index = parseInt(word.slice(-1)) - 1
    const actualWord = word.slice(0, -1)
    sentence[index] = actualWord
  }
  return sentence.join(" ")
}
console.log(reconstructSentence("This2 way3 is1 the4"))

const Ade=(arr,search)=>{
  let searchArr=arr.includes(search)
  if (searchArr){
  return search
}else {
  return "undefined"
}
}
console.log(Ade(['w','x','c','d'],'w'))