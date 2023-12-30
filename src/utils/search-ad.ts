import { IAd } from '@interface/';


export const searchAd = (ads: IAd[], text: string) => {
  const result: IAd[] = [];

  ads.forEach((ad) => {
    if (ad.title.toLowerCase().startsWith(text)) {
      result.push(ad);
    }
  });

  return result;
};
