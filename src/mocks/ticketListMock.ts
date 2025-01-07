import { Ticket, TicketStatus } from "../types/Ticket";

export const ticketsMock: Ticket[] = [
  {
    id: 1,
    title: "Add search functionality",
    status: TicketStatus.IN_PROGRESS,
    createdBy: "Jane Smith",
    createdAt: new Date(2024, 11, 1),
    description:
      "Implement search functionality to allow users to search for tickets."
  },
  {
    id: 2,
    title: "Improve application performance",
    status: TicketStatus.OPEN,
    createdBy: "Alice Johnson",
    createdAt: new Date(2024, 11, 1),
    description:
      "Optimize the application to improve performance and reduce load times."
  },
  {
    id: 3,
    title: "Update user profile page",
    status: TicketStatus.OPEN,
    createdBy: "Bob Brown",
    createdAt: new Date(2024, 11, 1),
    description:
      "Update the user profile page to include new fields and improve layout."
  },
  {
    id: 4,
    title: "Refactor codebase",
    status: TicketStatus.IN_PROGRESS,
    createdBy: "Charlie Davis",
    createdAt: new Date(2024, 11, 1),
    description:
      "Refactor the codebase to improve readability and maintainability."
  },
  {
    id: 5,
    title: "Fix security vulnerabilities",
    status: TicketStatus.DONE,
    createdBy: "Eve Wilson",
    createdAt: new Date(2024, 11, 1),
    description:
      "Address security vulnerabilities identified in the latest security audit."
  },
  {
    id: 6,
    title: "Implement new design",
    status: TicketStatus.OPEN,
    createdBy: "Frank Thomas",
    createdAt: new Date(2024, 11, 1),
    description: "Implement the new design provided by the design team."
  },
  {
    id: 7,
    title: "Optimize database queries",
    status: TicketStatus.IN_PROGRESS,
    createdBy: "Grace Lee",
    createdAt: new Date(2024, 11, 1),
    description:
      "Optimize database queries to improve performance and reduce load times."
  },
  {
    id: 8,
    title: "Add unit tests",
    status: TicketStatus.DONE,
    createdBy: "Hank Green",
    createdAt: new Date(2024, 11, 1),
    description:
      "Add unit tests to improve test coverage and ensure code quality."
  }
];
