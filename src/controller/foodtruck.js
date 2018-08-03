import mongoose from 'mongoose';
import { Router } from 'express';
import Foodtruck from '../model/foodtruck';

export default({ config, db }) => {
  let api = Router();

  // '/v1/foodtruck/add'
  api.post('/add', (req, res) => {
    let newFoodT = new Foodtruck();
    newFoodT.name = req.body.name;

    newFoodT.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Foodtruck saved successfully'});
    });
  });

  return api;
}
