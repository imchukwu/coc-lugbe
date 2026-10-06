export interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  day: string;
  month: string;
  year: number;
  time: string;
  place: string;
  schedule: string;
  tag: string;
  description?: string;
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Helper to find the N-th occurrence of a weekday in a given month and year
// weekday: 0 = Sunday, 1 = Monday, ..., 6 = Saturday
function getNthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date | null {
  let count = 0;
  // Day starts at 1, month is 0-indexed (0 to 11)
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const candidate = new Date(year, month, d);
    if (candidate.getDay() === weekday) {
      count++;
      if (count === n) {
        return candidate;
      }
    }
  }
  return null;
}

/**
 * Dynamically calculates upcoming church events strictly after the given reference date (defaults to current time).
 * Always filters out past dates and sorts chronologically.
 */
export function getUpcomingChurchEvents(limit = 8, referenceDate = new Date()): ChurchEvent[] {
  const now = referenceDate;
  const events: ChurchEvent[] = [];

  // Look ahead for the next 12 months
  for (let offset = 0; offset < 12; offset++) {
    const targetMonthDate = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    const year = targetMonthDate.getFullYear();
    const month = targetMonthDate.getMonth(); // 0 to 11

    // 1. Evangelism Outreach: First Saturday of the month
    const firstSat = getNthWeekdayOfMonth(year, month, 6, 1);
    if (firstSat) {
      firstSat.setHours(8, 0, 0, 0);
      if (firstSat.getTime() > now.getTime()) {
        events.push({
          id: `evangelism-${year}-${month}`,
          title: "Evangelism Outreach",
          date: firstSat,
          day: String(firstSat.getDate()).padStart(2, "0"),
          month: MONTH_NAMES[month],
          year,
          time: "8:00 AM",
          place: "Berger Yard & Lugbe Environs",
          schedule: "First Saturday of the month",
          tag: "Evangelism",
          description: "Congregational evangelism campaign and tract distribution to reach our community for Christ.",
        });
      }
    }

    // 2. Monthly Praise and Worship: First Sunday of every month
    // (except second Sunday of the quarter where song sessions take place)
    const firstSun = getNthWeekdayOfMonth(year, month, 0, 1);
    if (firstSun) {
      firstSun.setHours(8, 0, 0, 0);
      if (firstSun.getTime() > now.getTime()) {
        events.push({
          id: `praise-${year}-${month}`,
          title: "Monthly Praise and Worship",
          date: firstSun,
          day: String(firstSun.getDate()).padStart(2, "0"),
          month: MONTH_NAMES[month],
          year,
          time: "8:00 AM",
          place: "Main Sanctuary",
          schedule: "First Sunday of every month",
          tag: "Praise & Worship",
          description: "Reverent congregational a cappella praise, spiritual songs, prayers, and communion.",
        });
      }
    }

    // 3. Songs Teaching: Second Sunday of every quarter (Mar=2, Jun=5, Sep=8, Dec=11)
    const isQuarterMonth = [2, 5, 8, 11].includes(month);
    if (isQuarterMonth) {
      const secondSun = getNthWeekdayOfMonth(year, month, 0, 2);
      if (secondSun) {
        secondSun.setHours(8, 0, 0, 0);
        if (secondSun.getTime() > now.getTime()) {
          events.push({
            id: `song-teaching-${year}-${month}`,
            title: "Songs Teaching",
            date: secondSun,
            day: String(secondSun.getDate()).padStart(2, "0"),
            month: MONTH_NAMES[month],
            year,
            time: "8:00 AM",
            place: "Main Sanctuary",
            schedule: "Second Sunday of every quarter",
            tag: "Music & Singing",
            description: "Dedicated vocal training, learning new spiritual songs, and singing with understanding.",
          });
        }
      }
    }

    // 4. Welfare Visitation: Third Sunday of the month
    const thirdSun = getNthWeekdayOfMonth(year, month, 0, 3);
    if (thirdSun) {
      thirdSun.setHours(13, 0, 0, 0);
      if (thirdSun.getTime() > now.getTime()) {
        events.push({
          id: `welfare-${year}-${month}`,
          title: "Welfare Visitation",
          date: thirdSun,
          day: String(thirdSun.getDate()).padStart(2, "0"),
          month: MONTH_NAMES[month],
          year,
          time: "1:00 PM",
          place: "Brethren Homes & Community",
          schedule: "Third Sunday of the month",
          tag: "Benevolence",
          description: "Visiting sick, elderly, widows, and needy brethren to share love, prayers, and benevolent assistance.",
        });
      }
    }

    // 5. Men's Seminar: First Saturday of December
    if (month === 11) {
      const firstSatDec = getNthWeekdayOfMonth(year, 11, 6, 1);
      if (firstSatDec) {
        firstSatDec.setHours(9, 0, 0, 0);
        if (firstSatDec.getTime() > now.getTime()) {
          events.push({
            id: `mens-seminar-${year}`,
            title: "Men's Seminar",
            date: firstSatDec,
            day: String(firstSatDec.getDate()).padStart(2, "0"),
            month: "Dec",
            year,
            time: "9:00 AM to 2:00 PM",
            place: "Fellowship Hall",
            schedule: "First Saturday of December",
            tag: "Men's Fellowship",
            description: "Equipping brothers and fathers in spiritual leadership, Christian stewardship, and godly homes.",
          });
        }
      }
    }

    // 6. Open Mic Lectureship: Second Saturday of December
    if (month === 11) {
      const secondSatDec = getNthWeekdayOfMonth(year, 11, 6, 2);
      if (secondSatDec) {
        secondSatDec.setHours(9, 0, 0, 0);
        if (secondSatDec.getTime() > now.getTime()) {
          events.push({
            id: `open-mic-${year}`,
            title: "Open Mic Lectureship",
            date: secondSatDec,
            day: String(secondSatDec.getDate()).padStart(2, "0"),
            month: "Dec",
            year,
            time: "9:00 AM to 3:00 PM",
            place: "Main Auditorium",
            schedule: "Second Saturday of December",
            tag: "Gospel Lectureship",
            description: "Open platform scriptural lectureship, expository preaching, questions, and biblical exegesis.",
          });
        }
      }
    }

    // 7. Sister's Lectureship: Annual gathering
    // Configured for third Saturday of October
    if (month === 9) {
      const sistersSat = getNthWeekdayOfMonth(year, 9, 6, 3);
      if (sistersSat) {
        sistersSat.setHours(9, 0, 0, 0);
        if (sistersSat.getTime() > now.getTime()) {
          events.push({
            id: `sisters-lectureship-${year}`,
            title: "Sister's Lectureship",
            date: sistersSat,
            day: String(sistersSat.getDate()).padStart(2, "0"),
            month: "Oct",
            year,
            time: "9:00 AM to 3:00 PM",
            place: "Main Auditorium",
            schedule: "Annual Sisters' Spiritual Gathering",
            tag: "Sister's Fellowship",
            description: "Spiritual renewal conference for sisters in Christ: biblical womanhood, prayer, and godly families.",
          });
        }
      }
    }
  }

  // Sort strictly ascending by date (earliest upcoming first)
  events.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Strictly return only events that are after the current time/date
  return events.slice(0, limit);
}
