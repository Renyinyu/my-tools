function getFilename(filepath) {
  const name = filepath.replace(/(.*\/)*([^.]+).*/ig,"$2")
  return name
}