
exports.seed = async function(knex) {
  await knex('cars').insert([
    {vinNumber: 1, make: 'toyota', model:'corolla', mileage: 2000000},
    {vinNumber: 2, make: 'toyota', model:'camry', mileage: 2000000},
    {vinNumber: 3, make: 'toyota', model:'yaris', mileage: 2000000},
    {vinNumber: 4, make: 'toyota', model:'supra', mileage: 2000000},
    {vinNumber: 5, make: 'toyota', model:'prius', mileage: 2000000},
    {vinNumber: 6, make: 'toyota', model:'tacoma', mileage: 2000000},
  ])
}
