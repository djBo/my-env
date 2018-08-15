import {JsonProperty} from 'json-typescript-mapper';

// See https://github.com/jf3096/json-typescript-mapper/issues/2

export class Environment {

  id: string;
  version: string;
  status: string;
  dc: string;

  env: string;

  //@JsonProperty({name: 'installed-at'})
  'installed-at': string;
  
  //@JsonProperty('stopped-at')
  'stopped-at': string;

}
