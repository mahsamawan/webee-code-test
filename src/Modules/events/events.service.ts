import Event from './entities/event.entity';
import WORKSHOP from './entities/workshop.entity';
export class EventsService {

  async getWarmupEvents() {
    return await  Event.findAll({
      include: [{
        model: WORKSHOP,
        required: true
       }]
    });
  }

  async getEventsWithWorkshops() {
    return await  Event.findAll({
      include: [{
        model: WORKSHOP,
        required: true,
        where: { start: {
          $gt: new Date()}
        }
       }]
    });
  }


  async getFutureEventWithWorkshops() {
    throw new Error('TODO task 2');
  }
}