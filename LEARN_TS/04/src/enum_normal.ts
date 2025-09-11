{
  // 1

  const enum Week {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Week): string {
    if (day === Week.MONDAY) return 'Monday';
    if (day === Week.TUESDAY) return 'Tuesday';
    if (day === Week.WEDNESDAY) return 'Wednesday';
    if (day === Week.THURSDAY) return 'Thursday';
    if (day === Week.FRIDAY) return 'Friday';
    if (day === Week.SATURDAY) return 'Saturday';
    if (day === Week.SUNDAY) return 'Sunday';
    return 'Invalid day';
  }
}

{
  // 2

  const enum Check {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Check): string {
    if (status === Check.SUCCESS) return 'Success';
    if (status === Check.NOT_FOUND) return 'Not Found';
    if (status === Check.INTERNAL_ERROR) return 'Internal Server Error';
    return 'Unknown Status';
  }
}

{
  // 3

  enum Local {
    SEOUL = 100,
    BUSAN = 200,
    DAEGU = 300,
  }

  function getCityByZip(zip: Local): string {
    if (zip === 100) return 'Seoul';
    if (zip === 200) return 'Busan';
    if (zip === 300) return 'Daegu';
    return 'Unknown City';
  }
}

{
  // 4
  const enum Visitor {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
  }

  function getPermissionLevel(role: Visitor): string {
    if (role === 'admin') return 'Full access';
    if (role === 'user') return 'Limited access';
    if (role === 'guest') return 'Guest access';
    return 'No access';
  }
}

{
  // 5
  const enum Status {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: number): string {
    if (status === 1) return 'Pending';
    if (status === 2) return 'Shipped';
    if (status === 3) return 'Delivered';
    return 'Unknown Status';
  }
}

{
  // 6
  enum Status {
    ORDER_PLACED = 'Order Placed',
    PAYMENT_PENDING = 'Payment Pending',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return 'Your order has been placed.';
    if (status === Status.PAYMENT_PENDING) return 'Payment is pending.';
    if (status === Status.SHIPPED) return 'Your order has been shipped.';
    if (status === Status.DELIVERED) return 'Your order has been delivered.';
    return 'Unknown Status';
  }
}

{
  // 7
  enum Status {
    IS_ACTIVE,
    IS_INACTIVE,
  }

  function toggleStatus(status: Status): boolean {
    return !status;
  }
}

{
  // 8

  enum Option {
    OPTION_ONE = 'Option 1',
    OPTION_TWO = 'Option 2',
    OPTION_THREE = 'Option 3',
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return 'You selected Option 1.';
    if (option === Option.OPTION_TWO) return 'You selected Option 2.';
    if (option === Option.OPTION_THREE) return 'You selected Option 3.';
    return 'Invalid option';
  }
}

{
  // 9

  enum Meal {
    BREAKFAST = 'Breakfast',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
  }

  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return 'Invalid meal time';
  }
}

{
  // 10

  enum Status {
    LOGGED_IN,
    LOGGED_OUT,
  }

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return 'You are logged in.';
    if (status === Status.LOGGED_OUT) return 'You are logged out.';
    return 'Unknown status';
  }
}
