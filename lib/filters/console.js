 /**
  *
  * @param {*} value whatever is passed to console from the template
  * @returns a string to return to the browser as an inline script and log to the console
  */
 module.exports = (value) => {
  const output = JSON.stringify(value, null, '\t', { maxDepth: 3 });
  return `<script>console.log(${output});</script>`;
}
