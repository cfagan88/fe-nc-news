function capitaliseWord (word) {
  return `${word.split("")[0].toUpperCase()}${word.slice(1)}`
}

export default capitaliseWord;