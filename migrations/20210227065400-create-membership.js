'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Memberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_rank: {
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      minimum_poin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('Memberships', {
      fields: ['member_rank'],
      type: 'unique',
      name: 'member_rank_uniq'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Memberships');
  }
};