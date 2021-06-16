import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x30368ca06F038085E76eBf6283B659E03865dc3c'
);

export default instance;



// 0xd181FE9332E9F9889c89BdfBF48B76Abde2B2D01