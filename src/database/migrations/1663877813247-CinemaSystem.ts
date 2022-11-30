import { QueryInterface ,Sequelize } from 'sequelize';

export default {
  /**
   # ToDo: Create a migration that creates all tables for the following user stories

   For an example on how a UI for an api using this might look like, please try to book a show at https://in.bookmyshow.com/.
   To not introduce additional complexity, please consider only one cinema.

   Please list the tables that you would create including keys, foreign keys and attributes that are required by the user stories.

   ## User Stories

   *Movie exploration*
   * As a user I want to see which films can be watched and at what times
   * As a user I want to only see the shows which are not booked out

   *Show administration*
   * As a cinema owner I want to run different films at different times
   * As a cinema owner I want to run multiple films at the same time in different showrooms

   *Pricing*
   * As a cinema owner I want to get paid differently per show
   * As a cinema owner I want to give different seat types a percentage premium, for example 50 % more for vip seat

   *Seating*
   * As a user I want to book a seat
   * As a user I want to book a vip seat/couple seat/super vip/whatever
   * As a user I want to see which seats are still available
   * As a user I want to know where I'm sitting on my ticket
   * As a cinema owner I don't want to configure the seating for every show
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  up: (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('Cinema', 'time', {
              type: Sequelize.STRING
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'booking', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'role', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'showrooms', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'seat', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'premium', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'seat_available', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'seat_location', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'movie_name', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'price', {
              type: Sequelize.STRING,
          }, { transaction: t }),
          queryInterface.addColumn('Cinema', 'discount', {
              type: Sequelize.STRING,
          }, { transaction: t })
      ])
  })
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  down: (queryInterface: QueryInterface) => {
    // do nothing
  },
};