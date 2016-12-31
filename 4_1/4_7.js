// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '')

//normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '')

console.log(normalize(trim(' 123-45-6789 '))) //-> '123456789'
