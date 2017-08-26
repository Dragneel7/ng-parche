enum Aspect {
  FRONTEND,
  BACKEND,
  BOTH,
  UNKNOWN
}

enum Severity {
  CRIPPLING,
  IMPORTANT,
  NEUTRAL,
  UNIMPORTANT,
  ENHANCEMENT
}

enum Progress {
  REPORTED,
  UNDER_CONSIDERATION,
  UNDER_DEVELOPMENT,
  BEING_TESTED,
  LAUNCHED,
  DUPLICATE,
  REJECTED
}

export class Bug {
  id: number;

  title: string;
  description: string;
  stepsToReproduce: string;
  additionalInformation: string;

  aspect: Aspect;
  severity: Severity;
  progress: Progress;
}
