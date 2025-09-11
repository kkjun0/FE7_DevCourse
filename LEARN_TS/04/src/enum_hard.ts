{
  // 1

  enum Status {
    UNVERIFIED = 'UNVERIFIED',
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED',
  }

  function getUserStatus(status: Status | string): string {
    if (status === Status.UNVERIFIED) return 'User is unverified';
    if (status === Status.PENDING) return 'User verification is pending';
    if (status === Status.VERIFIED) return 'User is verified';
    return 'Unknown status';
  }
}

{
  // 2
  enum State {
    INITIATED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: State | number): string {
    if (state === State.INITIATED) return 'Order initiated';
    if (state === State.PROCESSING) return 'Order being processed';
    if (state === State.SHIPPED) return 'Order shipped';
    if (state === State.DELIVERED) return 'Order delivered';
    if (state === State.CANCELLED) return 'Order cancelled';
    return 'Unknown state';
  }
}

{
  // 3

  enum Level {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    EXPERT = 'EXPERT',
  }

  function getUserLevel(level: Level | string): string {
    if (level === Level.BEGINNER) return 'Beginner user';
    if (level === Level.INTERMEDIATE) return 'Intermediate user';
    if (level === Level.EXPERT) return 'Expert user';
    return 'Unknown level';
  }
}

{
  // 4
  const enum Status {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: Status | number): string {
    if (status === Status.NOT_STARTED) return 'Payment not started';
    if (status === Status.IN_PROGRESS) return 'Payment in progress';
    if (status === Status.COMPLETED) return 'Payment completed';
    if (status === Status.FAILED) return 'Payment failed';
    return 'Unknown status';
  }
}

{
  // 5

  const enum Step {
    STEP_ONE = 'STEP_ONE',
    STEP_TWO = 'STEP_TWO',
    STEP_THREE = 'STEP_THREE',
  }

  function getSignupStep(step: Step | string): string {
    if (step === Step.STEP_ONE) return 'Step 1: Enter details';
    if (step === Step.STEP_TWO) return 'Step 2: Confirm email';
    if (step === Step.STEP_THREE) return 'Step 3: Complete registration';
    return 'Unknown step';
  }
}

{
  // 6

  const enum Type {
    SEDAN = 'SEDAN',
    SUV = 'SUV',
    TRUCK = 'TRUCK',
  }

  function getPriceByCarType(type: Type | string): number {
    if (type === Type.SEDAN) return 30000;
    if (type === Type.SUV) return 40000;
    if (type === Type.TRUCK) return 50000;
    return 0;
  }
}

{
  // 7

  const enum Type {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    FILE = 'FILE',
  }

  function getMessageType(type: Type | string): string {
    if (type === Type.TEXT) return 'Text message';
    if (type === Type.IMAGE) return 'Image message';
    if (type === Type.VIDEO) return 'Video message';
    if (type === Type.FILE) return 'File message';
    return 'Unknown message type';
  }
}

{
  // 8

  const enum Level {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
  }

  function logMessage(level: Level | string, message: string): void {
    if (level === Level.INFO) console.log('INFO: ' + message);
    if (level === Level.WARN) console.warn('WARN: ' + message);
    if (level === Level.ERROR) console.error('ERROR: ' + message);
    if (level === Level.DEBUG) console.debug('DEBUG: ' + message);
  }
}

{
  // 9

  const enum Day {
    WEEKDAY = 'WEEKDAY',
    WEEKEND = 'WEEKEND',
  }

  function getDayType(day: Day | string): string {
    if (day === Day.WEEKDAY) return "It's a weekday";
    if (day === Day.WEEKEND) return "It's a weekend";
    return 'Unknown day type';
  }
}

{
  // 10

  const enum Type {
    DISCOUNT = 'DISCOUNT',
    PROMOTION = 'PROMOTION',
    GIVEAWAY = 'GIVEAWAY',
  }

  function getCampaignType(type: Type | string): string {
    if (type === Type.DISCOUNT) return 'Discount campaign';
    if (type === Type.PROMOTION) return 'Promotion campaign';
    if (type === Type.GIVEAWAY) return 'Giveaway campaign';
    return 'Unknown campaign type';
  }
}
