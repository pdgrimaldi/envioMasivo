// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  useJsons: false,
  servicesUrl: {
    createCampaign: 'https://wappsender-api.herokuapp.com/api/campaign',
    getAgendaReceivers: './assets/agenda/contacts.json',
    getCampaignList: 'https://wappsender-api.herokuapp.com/api/campaign',
    getCampaignDetail: 'https://wappsender-api.herokuapp.com/api/campaign/{0}',
    addCampaignReceivers: 'https://wappsender-api.herokuapp.com/api/campaing/{campaingId}/destinations'
  }
};
