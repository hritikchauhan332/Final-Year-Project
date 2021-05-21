import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe0564D90066c77d0220b0B6D2AFa8dA9D605b9e5'
);

export default instance;

//prev version -> 0xd181FE9332E9F9889c89BdfBF48B76Abde2B2D01

// 0xef6C28A323c21a31594966EF0B87a7d25D369A8C



0xe0564D90066c77d0220b0B6D2AFa8dA9D605b9e5