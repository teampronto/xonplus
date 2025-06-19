
// JSON examples
export const jsonSampleMobile = `{
  "alert_id": "TI-2025-0472",
  "detected_at": "2025-04-02T14:23:47Z",
  "severity": "high",
  "source": {
    "name": "DarkMarket Forum",
    "category": "underground_forum"
  },
  "affected_assets": [
    {
      "type": "domain",
      "value": "example.com",
      "confidence": 0.92
    }
  ],
  "data_types_leaked": ["emails", "password_hashes"],
  "threat_actor": {
    "name": "RedSkull"
  }
}`;

export const jsonSample = `{
  "alert_id": "TI-2025-0472",
  "detected_at": "2025-04-02T14:23:47Z",
  "severity": "high",
  "source": {
    "name": "DarkMarket Forum",
    "category": "underground_forum",
    "url": "[redacted]"
  },
  "affected_assets": [
    {
      "type": "domain",
      "value": "example.com",
      "confidence": 0.92
    },
    {
      "type": "user_accounts",
      "count": "~15,000",
      "confidence": 0.88
    }
  ],
  "data_types_leaked": ["emails", "password_hashes", "internal_docs"],
  "threat_actor": {
    "name": "RedSkull",
    "known_affiliations": ["GhostCartel"],
    "previous_targets": ["finance", "healthcare"]
  },
  "summary": "Threat actor offering alleged database from Example Corp containing employee credentials and internal documents. Sample validation confirms legitimacy."
}`;

// CSV examples
export const csvSampleMobile = `alert_id,detected_at,severity,source_name
TI-2025-0472,2025-04-02T14:23:47Z,high,DarkMarket Forum
TI-2025-0465,2025-04-01T09:15:32Z,medium,PasteSite`;

export const csvSample = `alert_id,detected_at,severity,source_name,source_category,affected_domain,confidence,accounts_exposed,data_leaked,threat_actor
TI-2025-0472,2025-04-02T14:23:47Z,high,DarkMarket Forum,underground_forum,example.com,0.92,15000,"emails,password_hashes,internal_docs",RedSkull
TI-2025-0465,2025-04-01T09:15:32Z,medium,PasteSite,paste_site,example.net,0.85,2500,"emails,usernames",Unknown
TI-2025-0458,2025-03-30T22:04:11Z,critical,BreachForum,data_leak,example.org,0.97,45000,"emails,password_hashes,phone_numbers,addresses",DarkShadow
TI-2025-0453,2025-03-28T16:37:09Z,low,TelegramChannel,messaging,example-subsidiary.com,0.78,300,"email_addresses",InsiderGroup`;

// STIX examples
export const stixSampleMobile = `{
  "type": "bundle",
  "id": "bundle--5d0092c5-5f74-4287-9642-33f4c354e56d",
  "objects": [
    {
      "type": "indicator",
      "spec_version": "2.1",
      "id": "indicator--d81f86b9-975b-4c0b-875e-810c5ad45a4f",
      "name": "Data Breach - Example Corp"
    }
  ]
}`;

export const stixSample = `{
  "type": "bundle",
  "id": "bundle--5d0092c5-5f74-4287-9642-33f4c354e56d",
  "objects": [
    {
      "type": "indicator",
      "spec_version": "2.1",
      "id": "indicator--d81f86b9-975b-4c0b-875e-810c5ad45a4f",
      "created": "2025-04-02T14:23:47Z",
      "modified": "2025-04-02T14:23:47Z",
      "name": "Data Breach - Example Corp",
      "description": "Threat actor offering alleged database from Example Corp containing employee credentials and internal documents.",
      "indicator_types": ["compromised"],
      "pattern": "[domain-name:value = 'example.com']",
      "pattern_type": "stix",
      "valid_from": "2025-04-02T14:23:47Z",
      "created_by_ref": "identity--f431f809-377b-45e0-aa1c-6a4751cae5ff",
      "labels": ["breach", "credential-theft"]
    },
    {
      "type": "threat-actor",
      "spec_version": "2.1",
      "id": "threat-actor--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
      "created": "2024-01-01T00:00:00Z",
      "modified": "2025-04-02T14:23:47Z",
      "name": "RedSkull",
      "threat_actor_types": ["criminal"],
      "aliases": ["GhostCartel"],
      "roles": ["aggregator", "content-publisher"],
      "goals": ["credential-theft", "financial-gain"],
      "sophistication": "intermediate"
    }
  ]
}`;
