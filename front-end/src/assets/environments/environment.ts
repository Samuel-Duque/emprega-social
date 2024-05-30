// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api/v1',
  ibgeUfApi: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
  ibgeCityApi: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios',
};

