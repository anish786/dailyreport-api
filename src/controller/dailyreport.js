import mongoose from 'mongoose';
import { Router } from 'express';
import Dailyreport from '../model/dailyreport';
import {authenticate} from '../middleware/authMiddleware';

export default({ config, db }) => {
  let api = Router();


  // '/v1/dailyreport/add'
  api.post('/add', (req, res) => {
    let newDailyReport= new Dailyreport();
    newDailyReport.sales  = 0;
    newDailyReport.salestax = 0;
    newDailyReport.fuelamount = 0;
    newDailyReport.dailyloanaccountreceivable = 0;
    newDailyReport.delitax = 0;
    newDailyReport.moneyfrombank = 0;
    newDailyReport.cashcardnonjobber = 0;
    newDailyReport.cashcardjobber = 0;
    newDailyReport.checkcashedfee = 0;
    newDailyReport.moneyorder = 0;
    newDailyReport.moneyorderfee = 0;
    newDailyReport.moneytransfer = 0;
    newDailyReport.moneytransferfee = 0;
    newDailyReport.lotterysales = 0;
    newDailyReport.lottosales = 0;
    newDailyReport.openingcashchecks = 0;

    newDailyReport.sales  = req.body.sales;
    newDailyReport.salestax = req.body.salestax;
    newDailyReport.fuelamount = req.body.fuelamount;
    newDailyReport.dailyloanaccountreceivable = req.body.dailyloanaccountreceivable;
    newDailyReport.delitax = req.body.delitax;
    newDailyReport.moneyfrombank = req.body.moneyfrombank;
    newDailyReport.cashcardnonjobber = req.body.cashcardnonjobber;
    newDailyReport.cashcardjobber = req.body.cashcardjobber;
    newDailyReport.checkcashedfee = req.body.checkcashedfee;
    newDailyReport.moneyorder = req.body.moneyorder;
    newDailyReport.moneyorderfee = req.body.moneyorderfee;
    newDailyReport.moneytransfer = req.body.moneytransfer;
    newDailyReport.moneytransferfee = req.body.moneytransferfee;
    newDailyReport.lotterysales = req.body.lotterysales;
    newDailyReport.lottosales = req.body.lottosales;
    newDailyReport.openingcashchecks = req.body.openingcashchecks;
    newDailyReport.totalin = newDailyReport.sales + newDailyReport.salestax + newDailyReport.fuelamount + newDailyReport.dailyloanaccountreceivable + 
                              newDailyReport.delitax + newDailyReport.moneyfrombank + newDailyReport.cashcardnonjobber + newDailyReport.cashcardjobber + 
                              newDailyReport.checkcashedfee + newDailyReport.moneyorder + newDailyReport.moneyorderfee + newDailyReport.moneytransfer + 
                              newDailyReport.moneytransferfee + newDailyReport.lotterysales + newDailyReport.lottosales + newDailyReport.openingcashchecks;



    newDailyReport.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Dailyreport saved successfully'});
    });
  });

  // '/v1/dailyreport/'
  api.get('/', (req,res) => {
    //find all dailyreport in db
    Dailyreport.find({}, (err, dailyreports) => {
      if(err) {
        res.send(err);
      }
      res.json(dailyreports);
    });
  });

  // 'v1/dailyreport/:id'
  api.get('/:id', (req,res) => {
    Dailyreport.findById(req.params.id, (err, dailyreport) => {
      if(err) {
        res.send(err);
      }
      res.json(dailyreport);
    });
  });

  // 'v1/dailyreport/:id'
  api.put('/:id', authenticate, (req,res) => {
    Dailyreport.findById(req.params.id, (err, dailyreport) => {
      if(err) {
        res.send(err);
      }
      dailyreport.name = req.body.name;
      dailyreport.save(err => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Dailyreport info updated"});
      });
    });
  });

  // 'v1/dailyreport/:id'
  api.delete('/:id', authenticate, (req, res) => {
    Dailyreport.remove({
      _id: req.params.id
    }, (err, dailyreport) => {
      if(err) {
        res.send(err);
      }
      res.json({message: "Dailyreport successfully deleted!"});
    });
  });
  return api;
}
