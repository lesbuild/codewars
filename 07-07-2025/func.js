function findAdmin(list, lang) {
  return [...list.filter(a=>a.githubAdmin == "yes" && a.language == lang)]
}