import { BaseSchema, BaseModel } from './BaseSchema';

const ShowSchema = new BaseSchema({ seasons: Number });
const TVShow = BaseModel.discriminator( 'TVShow', ShowSchema );

module.exports = TVShow;
