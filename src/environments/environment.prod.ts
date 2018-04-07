export const environment = {
  production: true,
  useJsons: false,
  servicesUrl: {
    createCampaign: 'https://wappsender-api.herokuapp.com/api/campaign',
    getAgendaReceivers: './assets/agenda/contacts.json',
    getCampaignList: 'https://wappsender-api.herokuapp.com/api/campaign',
    getCampaignDetail: 'https://wappsender-api.herokuapp.com/api/campaign/{0}',
    addCampaignReceivers: 'https://wappsender-api.herokuapp.com/api/campaing/{campaingId}/destinations'
  }
};
