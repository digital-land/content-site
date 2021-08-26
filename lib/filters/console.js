 module.exports = (value) => {
  const output = JSON.stringify(value, null, '\t', { maxDepth: 3 });
  return `<script>console.log(${output});</script>`;
}
