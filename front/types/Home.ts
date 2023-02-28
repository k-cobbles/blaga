import { Modify } from './Modify';
import { ApiHomeHome, SharedHero, SharedSeo } from './schemas'


export interface Home extends Modify<ApiHomeHome, {
  attributes: {
    hero: SharedHero;
    seo: SharedSeo;
  }
}> { }
