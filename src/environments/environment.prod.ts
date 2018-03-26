export const environment = {
  production: true,
  useJsons: false,
  servicesUrl: {
    createCampaign: 'https://wappsender-api.herokuapp.com/api/campaign',
    getAgendaContacts: './assets/agenda/contacts.json',
    getCampaignList: './assets/campaign/campaignList_{0}.json',
    getCampaignDetail: './assets/campaign/campaignDetail_{0}_{1}.json'
  }
};
