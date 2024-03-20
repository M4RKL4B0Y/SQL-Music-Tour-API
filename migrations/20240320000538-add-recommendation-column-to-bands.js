'use strict';

const { query } = require('express');
const { Sequelize } = require('sequelize');

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('bands', 'recommendations', {
    type: DataTypes.STRING
  })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
