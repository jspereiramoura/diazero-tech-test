export enum TicketStatus {
  OPEN = "Aberto",
  IN_PROGRESS = "Em Progresso",
  DONE = "Concluído"
}

export type Ticket = {
  id: string | number;
  title: string;
  status: TicketStatus;
  createdBy: string;
  createdAt: Date;
  description: string;
};
