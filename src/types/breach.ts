
export type BreachDataType = {
  sendDomains: {
    breaches_details: {
      domain: string;
      breach_pastes: number;
      breach_emails: number;
      breach_total: number;
      breach_count: number;
      breach_last_seen: string;
    }[];
  };
  SearchStatus: string;
};
