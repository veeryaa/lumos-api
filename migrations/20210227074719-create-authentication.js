'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Authentications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_customer: {
        type: Sequelize.STRING,
        unique: true
      },
      no_handphone: {
        type: Sequelize.STRING(15)
      },
      passw0rd: {
        type: Sequelize.STRING
      },
      notif_key: {
        type: Sequelize.STRING
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

    await queryInterface.addConstraint('Authentications', 
    {
      fields: ['id_customer'],
      type: 'foreign key',
      name: 'id_customer_uniq_foreign',
      references: {
        table: 'Customers',
        field: 'id_customer'
      }
    })

    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Authentications');
  }
};