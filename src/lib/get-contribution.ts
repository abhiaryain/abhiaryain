export function getContribution(contribution: number) {
  switch (contribution) {
    case 0:
      return "0 contributions";
    case 1:
      return "maximum 3 contribution";
    case 2:
      return "maximum 5 contributions";
    case 3:
      return "maximum 8 contributions";
    default:
      return "minimum 8 contributions";
  }
}
