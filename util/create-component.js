require('colors')
const fs = require('fs')
const template1 = require('./template1')
const template2 = require('./template2/page')

const componentName = process.argv[2]
const type = parseInt(process.argv[3])

if (!componentName) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

const getCompName = (name) => {
  const curName = name.replace('-', '')
  const cName = curName[0].toUpperCase() + curName.substr(1)
  return cName
}

if (type === 0) {
  console.log(`Creating Component Templates with name: ${componentName}`)
  const cName = getCompName(componentName)
  const componentDirectory = `./src/components/${cName}`
  if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${cName} already exists.`.red)
    process.exit(1)
  }
  fs.mkdirSync(componentDirectory)
  const generatedTemplates = template1.map((template) => template(cName))
  generatedTemplates.forEach((template) => {
    fs.writeFileSync(
      `${componentDirectory}/${template.extension}`,
      template.content
    )
  })
  console.log(
    `Successfully created component under: ${componentDirectory.green}`
  )
} else {
  console.log(`Creating Demo Templates with name: ${componentName}`)
  const demoDirectory = `./src/pages/${componentName}`
  if (fs.existsSync(demoDirectory)) {
    console.error(`Demo ${componentName} already exists.`.red)
    process.exit(1)
  }
  fs.mkdirSync(demoDirectory)
  const cName = getCompName(componentName)
  const generatedTemplates = template2.map((template) =>
    template(cName, componentName)
  )
  generatedTemplates.forEach((template) => {
    fs.writeFileSync(`${demoDirectory}/${template.extension}`, template.content)
  })
  console.log(`Successfully created Demo under: ${demoDirectory.green}`)
}
