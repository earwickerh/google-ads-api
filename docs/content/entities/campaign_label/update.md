---
title: Update CampaignLabel
order: 5
type: update
entity: CampaignLabel
---

### Update CampaignLabel

This section describes how to update a CampaignLabel.

```javascript
// Updating the entity

const campaign_label = {
  resource_name: 'customers/3827277046/campaignLabels/729914321~898377018', // The resource_name is required
  // ...any other fields that you would like to update
}

const result = await customer.campaignLabels.update(campaign_label)
```

```javascript
// Example result
;['customers/3827277046/campaignLabels/729914321~898377018']
```