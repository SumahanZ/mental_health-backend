export default function toCamelCase(rows) {
  return rows.map((row) => {
    const replaced = {};

    for (let key in row) {
      const camelcase = key.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace("_", ""));
      replaced[camelcase] = row[key];
    }

    return replaced;
  });
}
