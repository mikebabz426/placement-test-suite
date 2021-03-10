//Given a score determines the level of english profficiency

export const getLevel = (score: number) => {
  let level

  if (score >= 0 && score <= 15) {
    level = "Beginner"
    return level
  } else if (score >= 16 && score <= 24) {
    level = "Elementary"
    return level
  } else if (score >= 25 && score <= 32) {
    level = "Pre-Intermediate"
    return level
  } else if (score >= 33 && score <= 39) {
    level = "Intermediate"
    return level
  } else if (score >= 40 && score <= 45) {
    level = "Upper Intermediate"
    return level
  } else {
    level = "Advanced"
    return level
  }
}
