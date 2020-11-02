/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = (componentName, _oName) => ({
    content: `@import '../../components/style/vars.scss';
.demo-${_oName.toLowerCase()} {
}
    `,
    extension: `index.scss`
  })
  